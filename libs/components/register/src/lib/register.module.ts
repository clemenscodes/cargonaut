import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register/register-routing.module';
import { RegisterComponent } from './register/register.component';
import { RegisterFormModule } from '@register-form';
import { AlertModule } from '@alert';

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        AlertModule,
        RegisterRoutingModule,
        RegisterFormModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [RegisterComponent],
})
export class RegisterModule {}
