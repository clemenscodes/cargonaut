import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Offer } from '@api-interfaces';

@Component({
    selector: "cargonaut-add-offer-dialog",
    templateUrl: "./add-offer-dialog.component.html",
    styleUrls: ["./add-offer-dialog.component.scss"],
})
export class AddOfferDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<AddOfferDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Offer
    ) {}

    onCancelClick(): void {
        this.dialogRef.close();
    }
}
