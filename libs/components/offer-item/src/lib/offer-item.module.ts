import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OfferItemComponent } from "./offer-item/offer-item.component";
import { AddRequestModalModule } from "@add-request-modal";

@NgModule({
    imports: [CommonModule, AddRequestModalModule],
    declarations: [OfferItemComponent],
    exports: [OfferItemComponent],
})
export class OfferItemModule {}
