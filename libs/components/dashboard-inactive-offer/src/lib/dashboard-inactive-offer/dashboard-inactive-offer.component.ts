import { Component, Input } from "@angular/core";
import { Offer, Status} from "@api-interfaces";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { OfferService } from "@services";

@Component({
  selector: 'cargonaut-dashboard-inactive-offer',
  templateUrl: './dashboard-inactive-offer.component.html',
  styleUrls: ['./dashboard-inactive-offer.component.scss']
})
export class DashboardInactiveOfferComponent{

    @Input() offer!: Offer;

    constructor( 
        private offerService: OfferService,
        private modalService: NgbModal
    )
    {

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
        const modalReference = this.modalService.open(StatusModalComponent, {
            size: "xl",
        });
    }


    public async deleteOffer(offer: Offer){
        this.offerService.deleteOffer(offer);
    }

}
function StatusModalComponent(StatusModalComponent: any, arg1: { size: string; }) {
    throw new Error("Function not implemented.");
}

