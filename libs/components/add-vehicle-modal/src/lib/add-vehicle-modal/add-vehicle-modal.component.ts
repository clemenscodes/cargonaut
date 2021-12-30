import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from "@services";
import { Vehicle, VehicleKind } from "@api-interfaces";
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";

@Component({
  selector: 'cargonaut-add-vehicle-modal',
  templateUrl: './add-vehicle-modal.component.html',
  styleUrls: ['./add-vehicle-modal.component.scss']
})
export class AddVehicleModalComponent {
    vehicleForm: FormGroup;
    vehicle!: Vehicle;
    constructor(
        public activeModal: NgbActiveModal,
        private authService: AuthService,
        private fb: FormBuilder
    ) {
        this.vehicleForm = this.fb.group({
            marke: new FormControl("", [Validators.required]),
            art: new FormControl("", [Validators.required]),
            baujahr: new FormControl(0, [Validators.required]),
            sitze: new FormControl(0, [Validators.required]),
            stauraum: new FormControl(0, [Validators.required]),
        });
    }
    get marke(): AbstractControl {
        return this.vehicleForm.controls.marke;
    }

    get art(): AbstractControl {
        return this.vehicleForm.controls.art;
    }

    get baujahr(): AbstractControl {
        return this.vehicleForm.controls.baujahr;
    }

    get sitze(): AbstractControl {
        return this.vehicleForm.controls.sitze;
    }

    get stauraum(): AbstractControl {
        return this.vehicleForm.controls.stauraum;
    }

    save(): void {
        const { uid } = this.authService.getCurrentUser();
        this.vehicle = {
            photoURL: "",
            userId: uid,
            mark: this.marke.value,
            kind: VehicleKind.Cabrio,
            manufacturer: "",
            model: "",
            constructionYear: this.baujahr.value,
            seats: this.sitze.value,
            volume: this.stauraum.value
        };
        console.log(this.vehicle);
        this.activeModal.close(this.vehicle);
    }

 

}
