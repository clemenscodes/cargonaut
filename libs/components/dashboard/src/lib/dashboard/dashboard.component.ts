import { AddOfferDialogComponent } from '@add-offer-dialog';
import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";

@Component({
    selector: "cargonaut-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
    faPlusCircle = faPlusCircle;
    constructor(public dialog: MatDialog) {}
    openAddOfferDialog() {
        const dialogRef = this.dialog.open(AddOfferDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`The dialog was closed with result: ${result}`);
        });
        console.log("openAddOfferDialog");
    }
}
