import { Component } from "@angular/core";
import { Vehicle } from "@api-interfaces";
import { VehicleService } from "@services";
import { Observable } from "rxjs";

@Component({
    selector: "cargonaut-vehicle",
    templateUrl: "./vehicle.component.html",
    styleUrls: ["./vehicle.component.scss"],
})
export class VehicleComponent {
    vehicles!: Observable<Vehicle[]>;
    constructor(public vehicleService: VehicleService) {
        this.vehicles = this.vehicleService.vehicles.pipe();
    }
    addVehicle() {
        console.log("addVehicle");
    }
    editVehicle() {
        console.log("editVehicle");
    }
    deleteVehicle() {
        console.log("deleteVehicle");
    }
}
