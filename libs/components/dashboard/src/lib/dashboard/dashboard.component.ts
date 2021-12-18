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
        this.dialog.open(AddOfferDialogComponent, {
            width: "70%",
            height: "70%",
            disableClose: true,
        });
    }
}
