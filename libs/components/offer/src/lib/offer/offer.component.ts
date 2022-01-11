import { Component } from "@angular/core";
import { OfferService } from "@services";

@Component({
    selector: "cargonaut-offer",
    templateUrl: "./offer.component.html",
    styleUrls: ["./offer.component.scss"],
})
export class OfferComponent {
    constructor(public offerService: OfferService) {}
}
