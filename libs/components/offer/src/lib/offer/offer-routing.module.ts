import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OfferComponent } from './offer.component';
import {
    redirectUnauthorizedTo,
    canActivate,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthenticatedToHome = () => redirectUnauthorizedTo(['/']);

const route = {
    path: 'offer',
    component: OfferComponent,
    ...canActivate(redirectUnauthenticatedToHome),
};

const routes = [route];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OfferRoutingModule {}
