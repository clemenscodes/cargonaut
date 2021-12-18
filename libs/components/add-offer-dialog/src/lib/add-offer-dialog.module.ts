import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddOfferDialogComponent } from "./add-offer-dialog/add-offer-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
    declarations: [AddOfferDialogComponent],
    exports: [AddOfferDialogComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddOfferDialogModule {}
