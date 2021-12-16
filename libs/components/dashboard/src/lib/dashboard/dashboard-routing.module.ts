import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {
    redirectUnauthorizedTo,
    canActivate,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthenticatedToHome = () => redirectUnauthorizedTo(['/']);

const route = {
    path: 'dashboard',
    component: DashboardComponent,
    ...canActivate(redirectUnauthenticatedToHome),
};

const routes = [route];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
