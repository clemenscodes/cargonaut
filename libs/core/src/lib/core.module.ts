import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AlertModule } from '@alert';
import { ServicesModule } from '@services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from '@header';
import { LoginModule } from '@login';
import { RegisterModule } from '@register';
import { FooterModule } from '@footer';
import { ProfileModule } from '@profile';
import { OfferModule } from '@offer';
import { HomeModule } from '@home';
import { RequestModule } from '@request';
import { VehicleModule } from '@vehicle';
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
        FontAwesomeModule,
        OfferModule,
        BrowserAnimationsModule,
    ],
})
export class CoreModule {}
