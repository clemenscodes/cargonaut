import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from './alert/alert.service';
import { AuthService } from './auth/auth.service';
import { DriverService } from './driver/driver.service';
import { OfferService } from './offer/offer.service';
import { RatingService } from './rating/rating.service';
import { RequestService } from './request/request.service';
import { VehicleService } from './vehicle/vehicle.service';
import {
    AngularFirestore,
    AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import {
    AngularFireAuth,
    AngularFireAuthModule,
} from '@angular/fire/compat/auth';
import {
    AngularFireStorage,
    AngularFireStorageModule,
} from '@angular/fire/compat/storage';
import { UploadService } from './upload/upload.service';
@NgModule({
    imports: [
        CommonModule,
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
    ],
    providers: [
        AlertService,
        AuthService,
        AngularFireAuth,
        DriverService,
        OfferService,
        AngularFirestore,
        AngularFireStorage,
        RatingService,
        RequestService,
        UploadService,
        VehicleService,
    ],
    exports: [
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
    ],
})
export class ServicesModule {}
