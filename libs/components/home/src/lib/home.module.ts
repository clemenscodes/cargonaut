import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule, BrowserModule, NgbButtonsModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
})
export class HomeModule {}
