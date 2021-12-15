import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOfferModalComponent } from './add-offer-modal/add-offer-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
      AddOfferModalComponent
    ],
})
export class AddOfferModalModule {}
