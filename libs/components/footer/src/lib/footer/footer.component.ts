import { Component } from '@angular/core';
import { AuthService } from '@services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'cargonaut-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    /**
     * Authenticated State
     */
    authenticated = false;
    /**
     * Subscription of the auth state
     */
    authSubscription: Subscription;
    /**
     * Constructor which subscribes the auth state
     * @param authService {AuthService}
     */
    constructor(private authService: AuthService) {
        this.authSubscription = this.authService.authState$.subscribe(
            (state) => {
                state
                    ? (this.authenticated = true)
                    : (this.authenticated = false);
            }
        );
    }
}
