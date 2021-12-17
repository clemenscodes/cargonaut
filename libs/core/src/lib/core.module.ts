import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { AlertModule } from "@alert";
import { ServicesModule } from "@services";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderModule } from "@header";
import { LoginModule } from "@login";
import { RegisterModule } from "@register";
import { FooterModule } from "@footer";
import { ProfileModule } from "@profile";
import { OfferModule } from "@offer";
import { HomeModule } from "@home";
import { RequestModule } from "@request";
import { VehicleModule } from "@vehicle";
import { UploadModule } from "@upload";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { DashboardModule } from "@dashboard";

@NgModule({
    exports: [
        BrowserModule,
        CommonModule,
        HomeModule,
        RequestModule,
        VehicleModule,
        ServicesModule,
        AlertModule,
        ProfileModule,
        LoginModule,
        FooterModule,
        RegisterModule,
        HeaderModule,
        UploadModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        FontAwesomeModule,
        OfferModule,
        BrowserAnimationsModule,
        DashboardModule,
    ],
})
export class CoreModule {}
