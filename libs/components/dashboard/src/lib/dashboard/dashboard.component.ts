import { AddOfferDialogComponent } from "@add-offer-dialog";
import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Offer } from '@api-interfaces';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import { OfferService } from '@services';
import { Observable } from 'rxjs';

@Component({
    selector: "cargonaut-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
    faPlusCircle = faPlusCircle;
    offers: Observable<Offer[]>;
    constructor(public dialog: MatDialog, public offerService: OfferService) {
        this.offers = this.offerService.offers.pipe();
    }
    openAddOfferDialog() {
        this.dialog.open(AddOfferDialogComponent, {
            width: "70%",
            height: "70%",
            disableClose: true,
        });
    }
}
