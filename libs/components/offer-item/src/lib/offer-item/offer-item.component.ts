import { Component, Input } from "@angular/core";
import { Offer } from "@api-interfaces";

@Component({
    selector: "cargonaut-offer-item",
    templateUrl: "./offer-item.component.html",
    styleUrls: ["./offer-item.component.scss"],
})
export class OfferItemComponent {


    @Input() offer!: Offer;
    @Input() isOfferListItem!: boolean;

}


