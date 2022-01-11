import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OfferItemComponent } from "./offer-item/offer-item.component";

@NgModule({
    imports: [CommonModule],
    declarations: [OfferItemComponent],
    exports: [OfferItemComponent],
})
export class OfferItemModule {}
