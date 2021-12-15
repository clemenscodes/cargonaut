import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Offer, ServiceKind, Status } from '@api-interfaces';
import { Timestamp } from 'firebase-admin/firestore';

@Component({
  selector: 'cargonaut-add-offer-modal',
  templateUrl: './add-offer-modal.component.html',
  styleUrls: ['./add-offer-modal.component.scss']
})
export class AddOfferModalComponent{
    public offer: Offer;

    constructor(public activeModal: NgbActiveModal) {
        this.offer = new Offer("UserId", Timestamp.fromDate(new Date(2021,12,15)), 0, Status.toBeStarted, ServiceKind.taxi, "", "", 0, 0);
    }

    save(): void {
        if (this.offer.seats > 0) {
            this.offer.serviceKind = ServiceKind.taxi;
        } else if (this.offer.volume > 0) {
            this.offer.serviceKind = ServiceKind.transport;
        }
        this.activeModal.close(this.offer);
    }
}
