import { Component } from '@angular/core';
import { Offer } from '@api-interfaces';
import { OfferService } from '@services';
import { Observable } from 'rxjs';

@Component({
    selector: 'cargonaut-offer',
    templateUrl: './offer.component.html',
    styleUrls: ['./offer.component.scss'],
})
export class OfferComponent {
    offers: Observable<Offer[]>;
    constructor(public offerService: OfferService) {
        this.offers = this.offerService.offers.pipe();
    }
}
