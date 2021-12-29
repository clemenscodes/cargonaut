import { Component } from "@angular/core";
import { Vehicle } from "@api-interfaces";
import { VehicleService } from "@services";
import { AddVehicleModalComponent } from "@add-vehicle-modal";
import { Observable } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
    selector: "cargonaut-vehicle",
    templateUrl: "./vehicle.component.html",
    styleUrls: ["./vehicle.component.scss"],
})
export class VehicleComponent {
    vehicles!: Observable<Vehicle[]>;
    constructor(
        public vehicleService: VehicleService,
        private modalService: NgbModal)
    {
        this.vehicles = this.vehicleService.vehicles.pipe()
    }
    public async addVehicle() {
        const modalReference = this.modalService.open(AddVehicleModalComponent, {
            size: "xl",
        });

        try {
            const resultVehicle: Vehicle = await modalReference.result;
            this.vehicleService.addVehicle(resultVehicle);
        }
        catch (error) {
            console.log(error);
        }
    }

    editVehicle() {
        console.log("editVehicle");
    }
    deleteVehicle() {
        console.log("deleteVehicle");
    }
}
