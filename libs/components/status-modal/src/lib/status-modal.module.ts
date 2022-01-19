import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StatusModalComponent } from "./status-modal/status-modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
    imports: [CommonModule, MatDialogModule, FontAwesomeModule],
    declarations: [StatusModalComponent],
    exports: [StatusModalComponent],
})
export class StatusModalModule {}
