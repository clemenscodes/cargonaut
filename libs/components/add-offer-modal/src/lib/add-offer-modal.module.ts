import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOfferModalComponent } from './add-offer-modal/add-offer-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
      AddOfferModalComponent
    ],
})
export class AddOfferModalModule {}
