import { Component, OnInit } from '@angular/core';
import { Offer } from '@api-interfaces';
import { OfferService, RequestService } from '@services';
import { map, Observable } from 'rxjs';
import { Request } from '@api-interfaces';

@Component({
    selector: 'cargonaut-offer',
    templateUrl: './offer.component.html',
    styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
    offers: Observable<Offer[]>;
    requests: Map<string, Request> | undefined;
    constructor(
        public offerService: OfferService,
        private requestService: RequestService
    ) {
        this.offers = this.offerService.offers.pipe(
            map((offers) => {
                offers.map((offer) => {
                    this.requestService
                        .getRequest(offer.requestId)
                        .get()
                        .subscribe((req) => {
                            const data = req.data();
                            if (data) {
                                console.log(data);
                                this.requests?.set(offer.requestId, data);
                            }
                        });
                });
                return offers;
            })
        );
    }
    ngOnInit(): void {
        this.offers.subscribe((offer) => console.log(offer));
    }
}
