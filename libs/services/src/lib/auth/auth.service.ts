import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { BehaviorSubject } from "rxjs";
import firebase from "firebase/compat/app";
import {
    getAuth,
    UserCredential,
    reauthenticateWithCredential,
    updatePassword,
    updateEmail,
    sendEmailVerification,
} from "firebase/auth";
import { User } from "@api-interfaces";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    /**
     * Firebase user object
     */
    user: firebase.User | null = null;
    profileData: User | undefined;
    /**
     * Auth state Subject
     * @private
     */
    private readonly authState = new BehaviorSubject<firebase.User | null>(
        null
    );
    /**
     * Auth state observable
     */
    readonly authState$ = this.authState.asObservable();

    /**
     * Constructor of auth service
     * @param auth {AngularFireAuth}
     */
    constructor(private auth: AngularFireAuth, private afs: AngularFirestore) {
        this.auth.authState.subscribe(async (user) => {
            if (user) {
                this.user = user;
                const token = await user.getIdToken(true);
                localStorage.setItem("idToken", token);
                this.profileData = await this.getProfileData();
                this.authState.next(user);
            } else {
                this.user = null;
                localStorage.clear();
                this.authState.next(null);
            }
        });
    }

    /**
     *gCreates new user with email and password and sends email verification link
     *
     * @param email {string} The email of the user
     * @param password {string} The password of the user
     */
    async register(
        email: string,
        password: string,
        displayName: string,
        firstName: string,
        lastName: string,
        birthDate: string
    ): Promise<void> {
        const userCredential = await this.auth.createUserWithEmailAndPassword(
            email,
            password
        );
        if (userCredential.user) {
            await userCredential.user.sendEmailVerification();
            const token = await userCredential.user.getIdToken(true);
            localStorage.setItem("idToken", token);
            const { emailVerified, uid } = userCredential.user;
            const user = {
                uid,
                email,
                emailVerified,
                photoURL: "",
                firstName,
                lastName,
                birthDate,
                displayName,
                rating: 5,
            };
            const doc = (
                await this.afs.collection(`/users`).doc<User>(uid).ref.get()
            ).data();
            if (doc) {
                await this.afs.collection(`/users`).doc(uid).set(user);
            }
            return;
        }
    }

    /**
     * Login the user with email and password
     *
     * @param email {string} The email of the user
     * @param password {string} The password of the user
     */
    async login(email: string, password: string): Promise<void> {
        const user = await this.auth.signInWithEmailAndPassword(
            email,
            password
        );
        if (user.user) {
            const token = await user.user.getIdToken(true);
            localStorage.setItem("idToken", token);
        }
    }

    /**
     * Login user with google credentials
     */
    async loginWithGoogle(): Promise<void> {
        const user = await this.auth.signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        );
        if (user.user) {
            const token = await user.user.getIdToken(true);
            localStorage.setItem("idToken", token);
        }
    }

    /**
     * Send password reset email link to current authenticated user
     *
     * @param email {string} The email to send the reset link to
     */
    async resetPassword(email: string): Promise<void> {
        await this.auth.sendPasswordResetEmail(email);
    }

    /**
     * Verify the password reset code
     *
     * @param code {string} The code to verify
     */
    verifyPasswordResetCode(code: string): Promise<string> {
        return this.auth.verifyPasswordResetCode(code);
    }

    /**
     * Apply code to current authenticated user
     *
     * @param code {string} The code to apply
     */
    applyActionCode(code: string): Promise<void> {
        return this.auth.applyActionCode(code);
    }

    /**
     * Confirms the password reset
     *
     * @param code {string} The code for the action
     * @param newPassword {string} The new password to set
     */
    confirmPasswordReset(code: string, newPassword: string): Promise<void> {
        return this.auth.confirmPasswordReset(code, newPassword);
    }

    /**
     * Send email verification link to current authenticated user
     */
    sendEmailVerification(): Promise<void> {
        const user = getAuth().currentUser;
        if (!user) {
            throw new Error("Kein Benutzer gefunden");
        }
        return sendEmailVerification(user);
    }

    /**
     * Delete profile of current authentificated user
     *
     */
    async deleteProfile(): Promise<void> {
        if (!this.user) {
            throw new Error("Kein Benutzer gefunden");
        }
        await this.afs.collection("/users").doc(this.user.uid).delete();
        return await this.logout();
    }

    /**
     * Update profile of current authenticated user
     *
     * @param displayName {string} The new display name
     * @param photoURL {string} The new icon code
     */
    async updateProfile(displayName: string): Promise<void> {
        const user = this.getCurrentUser();
        if (!user) {
            throw new Error("Kein Benutzer gefunden");
        }
        console.log("updating username to " + displayName);
        return await this.afs
            .collection("/users")
            .doc(user.uid)
            .update({ displayName: displayName });
    }

    /**
     * Update email of current authenticated user
     *
     * @param newEmail {string} The new email of the user
     */
    updateEmail(newEmail: string): Promise<void> {
        const user = getAuth().currentUser;
        if (!user) {
            throw new Error("Kein Benutzer gefunden");
        }
        return updateEmail(user, newEmail);
    }

    /**
     * Update password of current authenticated user
     *
     * @param newPassword {string} The new password of the user
     */
    updatePassword(newPassword: string): Promise<void> {
        const user = getAuth().currentUser;
        if (!user) {
            throw new Error("Kein Benutzer gefunden");
        }
        return updatePassword(user, newPassword);
    }

    /**
     * Reauthenticate a user with a given password
     *
     * @param password {string} The password of the user to reauthenticate
     * @returns {UserCredential} The credentials of the user
     */
    reauthenticateUser(password: string): Promise<UserCredential> {
        const user = getAuth().currentUser;
        if (!user || !user.email) {
            throw new Error("Keinen Benutzer gefunden");
        }
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            password
        );
        return reauthenticateWithCredential(user, credential);
    }

    /**
     * Logout user and clear local storage
     */
    async logout(): Promise<void> {
        localStorage.clear();
        await this.auth.signOut();
    }

    async getProfileData() {
        const user = this.getCurrentUser();
        if (!user) {
            return;
        }
        return await this.afs
            .collection<User>("/users")
            .doc(user.uid)
            .ref.get()
            .then((user) => {
                const data = user.data();
                return data;
            });
    }

    /**
     * Get current user
     *
     * @returns {User} The current user profile data
     */
    getCurrentUser(): User {
        if (this.user) {
            const displayName = this.user.displayName || "";
            const email = this.user.email || "";
            const photoURL = this.user.photoURL || "";
            const emailVerified = this.user.emailVerified;
            return {
                uid: this.user.uid,
                email: email,
                photoURL: photoURL,
                emailVerified: emailVerified,
                displayName: displayName,
            };
        }
        throw new Error();
    }
}
