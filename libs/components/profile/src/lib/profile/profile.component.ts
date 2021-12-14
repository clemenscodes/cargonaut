import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService, AuthService } from '@services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
    ChangeEmailData,
    ChangePasswordData,
    ChangeProfileData,
    User,
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
    user: User | null = null;
    /**
     * The current selected nav
     */
    activeNavLink: 'password' | 'email' | 'profile' = 'profile';
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
     */
    constructor(
        private authService: AuthService,
        private alertService: AlertService
    ) {
        this.user = this.authService.getCurrentUser();
    }

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
     * @param nav {'password' | 'email' | 'profile} Active navigation
     */
    setActiveLink(nav: 'password' | 'email' | 'profile'): void {
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
            .subscribe((user) => {
                return user;
            });
        this.checkProvider();
        console.log(this.user);
    }

    /**
     * Unsubscribe from observables
     */
    ngOnDestroy(): void {
        this.destroy$.complete();
    }
}
