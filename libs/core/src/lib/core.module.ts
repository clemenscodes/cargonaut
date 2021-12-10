import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AlertModule } from '@alert';
import { ServicesModule } from '@services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    exports: [
        BrowserModule,
        CommonModule,
        ServicesModule,
        AlertModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
    ],
})
export class CoreModule {}
