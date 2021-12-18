import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddOfferModalComponent } from "./add-offer-modal/add-offer-modal.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        NgbModule,
    ],
    declarations: [AddOfferModalComponent],
    exports: [AddOfferModalComponent],
})
export class AddOfferModalModule {}
