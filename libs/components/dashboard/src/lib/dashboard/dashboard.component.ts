import { Component } from "@angular/core";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import { OfferService, RequestService } from "@services";
import { AddOfferModalComponent } from "@add-offer-modal";
import { Offer } from "@api-interfaces";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "cargonaut-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
    public faPlusCircle = faPlusCircle;
    constructor(
        public offerService: OfferService,
        public requestService: RequestService,
        private modalService: NgbModal
    ) {}
    public async addOffer() {
        const modalReference = this.modalService.open(AddOfferModalComponent, {
            size: "xl",
        });

        try {
            const resultOffer: Offer = await modalReference.result;
            //TODO: add resultOffer to Firestore
            this.offerService.addOffer(resultOffer);
        } catch (error) {
            console.log(error);
        }
    }
}
