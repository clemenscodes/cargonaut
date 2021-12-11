import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from './alert/alert.service';
import { AuthService } from './auth/auth.service';
import {
    AngularFireAuth,
    AngularFireAuthModule,
} from '@angular/fire/compat/auth';
import { DriverService } from './driver/driver.service';
import { OfferService } from './offer/offer.service';
import { RatingService } from './rating/rating.service';
import { RequestService } from './request/request.service';
import { VehicleService } from './vehicle/vehicle.service';

@NgModule({
    imports: [CommonModule, AngularFireAuthModule],
    providers: [
        AlertService,
        AuthService,
        AngularFireAuth,
        DriverService,
        OfferService,
        RatingService,
        RequestService,
        VehicleService,
    ],
    exports: [AngularFireAuthModule],
})
export class ServicesModule {}
