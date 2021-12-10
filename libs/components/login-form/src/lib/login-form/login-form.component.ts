import { Component, EventEmitter, Output } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { AlertService, AuthService } from '@services';
import { Router } from '@angular/router';

@Component({
    selector: 'cargonaut-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
    /**
     * Login Form Group
     */
    loginForm: FormGroup;
    /**
     * Loading state
     */
    loading = false;
    /**
     * Show email form event
     */
    @Output() showEmailFormEvent = new EventEmitter();

    /**
     * Constructor which initializes the reactive login form
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
        this.loginForm = this.fb.group({
            email: new FormControl('', [Validators.email, Validators.required]),
            password: new FormControl('', [
                Validators.minLength(6),
                Validators.required,
            ]),
        });
    }

    /**
     * @returns {AbstractControl} The email input control of the form
     */
    get email(): AbstractControl {
        return this.loginForm.controls.email;
    }

    /**
     * @returns {AbstractControl} The password input control of the form
     */
    get password(): AbstractControl {
        return this.loginForm.controls.password;
    }

    /**
     * Calls auth service to login the user with email and password and handles success and error cases
     */
    async login(): Promise<void> {
        try {
            this.loading = true;
            await this.authService.login(this.email.value, this.password.value);
            this.loading = false;
            this.loginForm.reset();
            this.alertService.addAlert({
                type: 'success',
                message: 'Erfolgreich angemeldet',
            });
            await this.router.navigate(['/profile']);
        } catch (e) {
            if (e instanceof Error) {
                this.loading = false;
                this.loginForm.reset();
                this.alertService.addAlert({
                    type: 'error',
                    message: e.message,
                });
            }
        }
    }

    /**
     * Calls auth service to open login with google popup and handles success and error cases
     */
    async loginWithGoogle(): Promise<void> {
        try {
            await this.authService.loginWithGoogle();
            this.alertService.addAlert({
                type: 'success',
                message: 'Erfolgreich mit Google angemeldet.',
            });
            await this.router.navigate(['/profile']);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            if (e.code !== 'auth/popup-closed-by-user') {
                this.alertService.addAlert({
                    type: 'error',
                    message: e.message,
                });
            }
        }
    }

    /**
     * Emits the event to show the email form
     */
    resetPassword(): void {
        this.showEmailFormEvent.emit();
    }
}
