import { Component, Input } from "@angular/core";
import { Offer, Request} from "@api-interfaces";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddRequestModalComponent } from "@add-request-modal";
import { RequestService } from "@services";
import { OfferService } from "@services";


@Component({
    selector: "cargonaut-offer-item",
    templateUrl: "./offer-item.component.html",
    styleUrls: ["./offer-item.component.scss"],
})
export class OfferItemComponent {


    @Input() offer!: Offer;
    @Input() itemType!: string;

    constructor( 
        private modalService: NgbModal,
        private requestService: RequestService,
        private offerService: OfferService
    )
    {

    }


    public async createRequest(offer: Offer) {
        console.log("in create request: pushing to offerToRequest: " + offer.offerId);
        this.requestService.setOfferToRequest(offer);
        const modalReference = this.modalService.open(
            AddRequestModalComponent,
            {
                size: "xl",
            }
        );

        try {
            const resultRequest: Request = await modalReference.result;
            this.requestService.addRequest(resultRequest);
        } catch (error) {
            console.log(error);
        }
    }

    public async deleteOffer(offer: Offer){
        this.offerService.deleteOffer(offer);
    }

    public async deleteRequest(offer: Offer){
        this.requestService.deleteRequest(offer);
    }

    public unacceptedRequestExists(){
        return this.requestService.hasUnnacceptedRequest(this.offer);
    }

}


