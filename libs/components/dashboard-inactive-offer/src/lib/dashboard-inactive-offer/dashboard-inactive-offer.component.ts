import { Component, Input } from "@angular/core";
import { Offer, Status } from "@api-interfaces";
import { OfferService } from "@services";
import { MatDialog } from "@angular/material/dialog";
import { StatusModalComponent } from "libs/components/status-modal/src/lib/status-modal/status-modal.component";

@Component({
    selector: "cargonaut-dashboard-inactive-offer",
    templateUrl: "./dashboard-inactive-offer.component.html",
    styleUrls: ["./dashboard-inactive-offer.component.scss"],
})
export class DashboardInactiveOfferComponent {
    @Input() offer!: Offer;

    public offerCreatorName: string | undefined;

    constructor(private offerService: OfferService, public dialog: MatDialog) {
        this.offerCreatorName = this.offer.displayName;
    }

    public updateStatus(offer: Offer) {
        if (offer.status === Status.toBeStarted) {
            offer.status = Status.started;
        } else if (offer.status === Status.started) {
            offer.status = Status.arrived;
        } else if (offer.status === Status.arrived) {
            offer.status = Status.finished;
        }

        this.offerService.updateOfferStatus(offer);
    }

    public async showStatus(offer: Offer) {
        const dialogRef = this.dialog.open(StatusModalComponent, {
            height: "200px",
            width: "320px",
            panelClass: "status-box",
            data: offer,
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    public async deleteOffer(offer: Offer) {
        this.offerService.deleteOffer(offer);
    }
}
