import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OfferComponent } from "./offer/offer.component";
import { ServicesModule } from "@services";
import { OfferRoutingModule } from "./offer/offer-routing.module";
import { OfferItemModule } from "@offer-item";

@NgModule({
    imports: [
        CommonModule,
        ServicesModule,
        OfferRoutingModule,
        OfferItemModule,
    ],
    declarations: [OfferComponent],
    exports: [OfferComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OfferModule {}
