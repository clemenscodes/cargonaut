import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    ],
})
export class CoreModule {}
