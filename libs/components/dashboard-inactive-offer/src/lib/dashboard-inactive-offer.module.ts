import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardInactiveOfferComponent } from "./dashboard-inactive-offer/dashboard-inactive-offer.component";
import { MatDialogModule } from "@angular/material/dialog";
import { StatusModalModule } from "@cargonaut/status-modal";

@NgModule({
    imports: [CommonModule, MatDialogModule, StatusModalModule],
    declarations: [DashboardInactiveOfferComponent],
    exports: [DashboardInactiveOfferComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardInactiveOfferModule {}
