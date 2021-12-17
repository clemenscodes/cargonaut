import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddOfferDialogComponent } from "./add-offer-dialog/add-offer-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
    ],
    declarations: [AddOfferDialogComponent],
    exports: [AddOfferDialogComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddOfferDialogModule {}
