import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VehicleComponent } from './vehicle.component';
import {
    redirectUnauthorizedTo,
    canActivate,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthenticatedToHome = () => redirectUnauthorizedTo(["/"]);

const route = {
    path: "vehicle",
    component: VehicleComponent,
    ...canActivate(redirectUnauthenticatedToHome),
};

const routes = [route];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VehicleRoutingModule {}
