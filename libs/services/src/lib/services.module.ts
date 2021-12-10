import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from './alert/alert.service';
import { AuthService } from './auth/auth.service';
import {
    AngularFireAuth,
    AngularFireAuthModule,
} from '@angular/fire/compat/auth';

@NgModule({
    imports: [CommonModule, AngularFireAuthModule],
    providers: [AlertService, AuthService, AngularFireAuth],
    exports: [AngularFireAuthModule],
})
export class ServicesModule {}
