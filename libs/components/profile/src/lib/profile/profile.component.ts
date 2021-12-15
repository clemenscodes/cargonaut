import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService, AuthService } from '@services';
import { Subject } from 'rxjs';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import {
    ChangeEmailData,
    ChangePasswordData,
    ChangeProfileData,
} from '@api-interfaces';

@Component({
    selector: 'cargonaut-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
    /**
     * Subject for unsubscribing from observables
     * @private
     */
    private destroy$ = new Subject();
    /**
     * The current authenticated user
     */
    user: firebase.User | null = null;
    /**
     * The current selected nav
     */
    activeNavLink: 'password' | 'email' | 'delete' | 'profile' = 'profile';
    /**
     * User provider
     */
    provider = '';
    /**
     * Loading state
     */
    loading = false;

    /**
     * Constructor of the profile component
     * @param authService {AuthService}
     * @param alertService {AlertService}
     * @param router {Router}
     */
    constructor(
        private authService: AuthService,
        private alertService: AlertService,
        private router: Router

    ) {}
    /**
     * Change password of user
     *
     * @param data {ChangePasswordData} Data required to change password
     */
    async changePassword(data: ChangePasswordData): Promise<void> {
        this.loading = true;
        try {
            await this.authService.reauthenticateUser(data.oldPassword);
            await this.authService.updatePassword(data.newPassword);
            this.alertService.addAlert({
                type: 'success',
                message: 'Passwort erfolgreich geändert',
            });
        } catch (e) {
            if (e instanceof Error) {
                this.alertService.addAlert({
                    type: 'error',
                    message: e.message,
                });
            }
        }
        this.loading = false;
    }

    /**
     * Change email of user
     *
     * @param data {ChangeEmailData} Data required to change email
     */
    async changeEmail(data: ChangeEmailData): Promise<void> {
        this.loading = true;
        try {
            await this.authService.reauthenticateUser(data.password);
            await this.authService.updateEmail(data.newEmail);
            await this.authService.sendEmailVerification();
            this.alertService.addAlert({
                type: 'success',
                message:
                    'E-Mail erfolgreich geändert. Bitte bestätige deine neue E-Mail.',
            });
        } catch (e) {
            if (e instanceof Error) {
                this.alertService.addAlert({
                    type: 'error',
                    message: e.message,
                });
            }
        }
        this.loading = false;
    }

    /**
     * Delete profile
     *
     */
    async deleteProfile(): Promise<void> {
        this.loading = true;
        try {
            await this.authService.deleteProfile();
            await this.router.navigate(['/home']);
            this.alertService.addAlert({
                type: 'success',
                message: 'Profil erfolgreich gelöscht',
            });
        } catch (e) {
            if (e instanceof Error) {
                this.alertService.addAlert({
                    type: 'error',
                    message: e.message,
                });
            }
        }
        this.loading = false;
    }

    /**
     * Change profile display name and icon
     *
     * @param data {ChangeProfileData} Data to change profile
     */
    async changeProfile(data: ChangeProfileData): Promise<void> {
        this.loading = true;
        try {
            await this.authService.updateProfile(data.displayName);
            this.alertService.addAlert({
                type: 'success',
                message: 'Profil erfolgreich bearbeitet',
            });
        } catch (e) {
            if (e instanceof Error) {
                this.alertService.addAlert({
                    type: 'error',
                    message: e.message,
                });
            }
        }
        this.loading = false;
    }

    /**
     * Set the active navigation
     *
     * @param nav {'password' | 'email' | 'delete' | 'profile} Active navigation
     */
    setActiveLink(nav: 'password' | 'email' | 'delete' | 'profile'): void {
        this.activeNavLink = nav;
        this.checkProvider();
    }

    /**
     * Check provider of authenticated user and set provider id
     */
    checkProvider(): void {
        this.authService.user?.providerData?.forEach((provider) => {
            if (provider) {
                this.provider = provider.providerId;
            }
        });
    }

    /**
     * Subscribe to auth service for current authenticated user
     */
    ngOnInit(): void {
        this.authService.authState$
            .pipe(takeUntil(this.destroy$))
            .subscribe((user) => (this.user = user));
        this.checkProvider();
        this.authService.getProfileData();
    }

    /**
     * Unsubscribe from observables
     */
    ngOnDestroy(): void {
        this.destroy$.complete();
    }
}
