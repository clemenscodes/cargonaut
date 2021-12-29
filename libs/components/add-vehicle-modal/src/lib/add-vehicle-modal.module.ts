import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddVehicleModalComponent } from './add-vehicle-modal/add-vehicle-modal.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    imports: [
        CommonModule,
        NgbModule
    ],
    declarations: [
      AddVehicleModalComponent
    ],
    exports: [AddVehicleModalComponent, ReactiveFormsModule]
})
export class AddVehicleModalModule {
    constructor() {}
}
