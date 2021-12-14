import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { DeleteProfileFormComponent } from './delete-profile-form/delete-profile-form.component'


@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [DeleteProfileFormComponent],
    exports: [DeleteProfileFormComponent],
})
export class DeleteProfileFormModule {
    constructor() { };
}
