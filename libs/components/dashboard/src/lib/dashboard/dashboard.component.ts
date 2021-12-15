import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { OfferService } from '@services';
import { AddOfferModalComponent } from '../../../../add-offer-modal/src/lib/add-offer-modal/add-offer-modal.component';
import { Offer } from '@api-interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'cargonaut-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    public faPlusCircle = faPlusCircle;

  constructor(public offerService: OfferService, private modalService: NgbModal) { }

    public async addOffer() {
        const modalReference = this.modalService.open(AddOfferModalComponent);
        //
        // try {
        //     const resultOffer: Offer = await modalReference.result;
        //     //TODO: add resultOffer to Firestore
        // } catch (error) {
        //     console.log(error);
        // }
    }

}
