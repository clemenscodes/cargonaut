import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardRoutingModule } from "./dashboard/dashboard-routing.module";
import { MatTabsModule } from "@angular/material/tabs";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatTabsModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
})
export class DashboardModule {}
