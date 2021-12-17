import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { AlertModule } from "@alert";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
    FontAwesomeModule,
    FaIconLibrary,
} from "@fortawesome/angular-fontawesome";
import {
    faEnvelope,
    faLock,
    faExclamationCircle,
    faCheckCircle,
    faTimesCircle,
    faCalendarAlt,
    faAddressCard,
    faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        AlertModule,
        RouterModule,
    ],
    declarations: [RegisterFormComponent],
    exports: [RegisterFormComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterFormModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(
            faEnvelope,
            faLock,
            faExclamationCircle,
            faCheckCircle,
            faTimesCircle,
            faAddressCard,
            faExclamationTriangle,
            faCalendarAlt
        );
    }
}
