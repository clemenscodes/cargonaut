import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardInactiveOfferComponent } from './dashboard-inactive-offer/dashboard-inactive-offer.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
      DashboardInactiveOfferComponent
    ],
    exports: [DashboardInactiveOfferComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardInactiveOfferModule {}
