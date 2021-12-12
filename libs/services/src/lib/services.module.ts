import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from './alert/alert.service';
import { AuthService } from './auth/auth.service';
import { DriverService } from './driver/driver.service';
import { OfferService } from './offer/offer.service';
import { RatingService } from './rating/rating.service';
import { RequestService } from './request/request.service';
import { VehicleService } from './vehicle/vehicle.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
    AngularFireAuth,
    AngularFireAuthModule,
} from '@angular/fire/compat/auth';
@NgModule({
    imports: [CommonModule, AngularFireAuthModule],
    providers: [
        AlertService,
        AuthService,
        AngularFireAuth,
        DriverService,
        OfferService,
        AngularFirestore,
        RatingService,
        RequestService,
        VehicleService,
    ],
    exports: [AngularFireAuthModule],
})
export class ServicesModule {}
