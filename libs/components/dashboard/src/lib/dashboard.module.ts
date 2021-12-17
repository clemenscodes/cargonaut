import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardRoutingModule } from "./dashboard/dashboard-routing.module";
import { MatTabsModule } from "@angular/material/tabs";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatTabsModule,
        MatDialogModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
})
export class DashboardModule {}
