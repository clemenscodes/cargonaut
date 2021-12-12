import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestComponent } from './request.component';
import {
    redirectUnauthorizedTo,
    canActivate,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthenticatedToHome = () => redirectUnauthorizedTo(['/']);

const route = {
    path: 'request',
    component: RequestComponent,
    ...canActivate(redirectUnauthenticatedToHome),
};

const routes = [route];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RequestRoutingModule {}
