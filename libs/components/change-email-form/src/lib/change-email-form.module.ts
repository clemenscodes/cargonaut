import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeEmailFormComponent } from './change-email-form/change-email-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
    FontAwesomeModule,
    FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
    faExclamationCircle,
    faLock,
    faEnvelope,
    faUnlock,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
    declarations: [ChangeEmailFormComponent],
    exports: [ChangeEmailFormComponent],
})
export class ChangeEmailFormModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faExclamationCircle, faLock, faEnvelope, faUnlock);
    }
}
