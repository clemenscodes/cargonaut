import { Component } from "@angular/core";
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";
import { AlertService, AuthService } from "@services";
import { Router } from "@angular/router";
import { NAME_REGEX, PASSWORD_REGEX, USERNAME_REGEX } from "@utils";
@Component({
    selector: "cargonaut-register-form",
    templateUrl: "./register-form.component.html",
    styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent {
    /**
     * Register Form Group
     */
    registerForm: FormGroup;
    /**
     * Loading state
     */
    loading = false;

    /**
     * Constructor which initializes the reactive register form
     * @param fb {FormBuilder}
     * @param authService {AuthService}
     * @param alertService {AlertService}
     * @param router {Router}
     */
    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private alertService: AlertService,
        private router: Router
    ) {
        this.registerForm = this.fb.group({
            firstName: new FormControl("", [
                Validators.pattern(NAME_REGEX),
                Validators.required,
            ]),
            lastName: new FormControl("", [
                Validators.pattern(NAME_REGEX),
                Validators.required,
            ]),
            birthDate: new FormControl("", [
                // Validators.pattern(DATE_REGEX),
                Validators.maxLength(10),
                Validators.required,
            ]),
            displayName: new FormControl("", [
                Validators.maxLength(15),
                Validators.pattern(USERNAME_REGEX),
                Validators.required,
            ]),
            email: new FormControl("", [Validators.email, Validators.required]),
            password: new FormControl("", [
                Validators.minLength(8),
                Validators.pattern(PASSWORD_REGEX),
                Validators.required,
            ]),
        });
    }

    /**
     * @returns {AbstractControl} The firstName input control of the form
     */
    get firstName(): AbstractControl {
        return this.registerForm.controls.firstName;
    }

    /**
     * @returns {AbstractControl} The lastName input control of the form
     */
    get lastName(): AbstractControl {
        return this.registerForm.controls.lastName;
    }

    /**
     * @returns {AbstractControl} The birthDate input control of the form
     */
    get birthDate(): AbstractControl {
        return this.registerForm.controls.birthDate;
    }

    /**
     * @returns {AbstractControl} The displayName input control of the form
     */
    get displayName(): AbstractControl {
        return this.registerForm.controls.displayName;
    }

    /**
     * @returns {AbstractControl} The email input control of the form
     */
    get email(): AbstractControl {
        return this.registerForm.controls.email;
    }

    /**
     * @returns {AbstractControl} The password input control of the form
     */
    get password(): AbstractControl {
        return this.registerForm.controls.password;
    }
    /**
     * Calls auth service to register user with email and password and handles success and error cases
     */
    async register(): Promise<void> {
        try {
            this.loading = true;
            await this.authService.register(
                this.email.value,
                this.password.value,
                this.birthDate.value,
                this.firstName.value,
                this.lastName.value,
                this.displayName.value
            );
            this.loading = false;
            this.registerForm.reset();
            this.alertService.addAlert({
                type: "success",
                message:
                    "Erfolgreich registriert und eingeloggt. Bitte bestätige deine E-Mail.",
            });
            await this.router.navigate(["/profile"]);
        } catch (e) {
            if (e instanceof Error) {
                this.loading = false;
                this.registerForm.reset();
                this.alertService.addAlert({
                    type: "error",
                    message: e.message,
                });
            }
        }
    }
}
