import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteProfileFormComponent } from './delete-profile-form/delete-profile-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule, BrowserModule, ReactiveFormsModule],
    declarations: [DeleteProfileFormComponent],
    exports: [DeleteProfileFormComponent],
})
export class DeleteProfileFormModule {}
