import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer/offer.component';
import { ServicesModule } from '@services';
import { OfferRoutingModule } from './offer/offer-routing.module';

@NgModule({
    imports: [CommonModule, ServicesModule, OfferRoutingModule],
    declarations: [OfferComponent],
    exports: [OfferComponent],
})
export class OfferModule {}
