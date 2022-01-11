import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VehicleComponent } from "./vehicle/vehicle.component";
import { VehicleRoutingModule } from "./vehicle/vehicle-routing.module";
import { ServicesModule } from "@services";
import {
    FaIconLibrary,
    FontAwesomeModule,
} from "@fortawesome/angular-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { AddVehicleModalModule } from "@add-vehicle-modal";

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        VehicleRoutingModule,
        AddVehicleModalModule,
        ServicesModule,
    ],
    declarations: [VehicleComponent],
    exports: [VehicleComponent],
})
export class VehicleModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faPen, faTrash);
    }
}
