import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardRoutingModule } from "./dashboard/dashboard-routing.module";
import { MatTabsModule } from "@angular/material/tabs";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { OfferModule } from "@offer";
import { OfferItemModule } from '@offer-item';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatTabsModule,
        OfferModule,
        MatDialogModule,
        FontAwesomeModule,
        OfferItemModule,
        BrowserAnimationsModule,
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
