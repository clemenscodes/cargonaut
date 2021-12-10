import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { AlertModule } from '@alert';
import { EmailFormModule } from '@email-form';
import { LoginFormModule } from '@login-form';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        AlertModule,
        EmailFormModule,
        LoginFormModule,
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
