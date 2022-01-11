import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from "@services";
import { Vehicle, VehicleKind } from "@api-interfaces";
import { VehicleService } from "@services";
import { AngularFirestore } from "@angular/fire/compat/firestore";

import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";

@Component({
    selector: "cargonaut-add-vehicle-modal",
    templateUrl: "./add-vehicle-modal.component.html",
    styleUrls: ["./add-vehicle-modal.component.scss"],
})
export class AddVehicleModalComponent {
    vehicleForm: FormGroup;
    vehicle!: Vehicle;
    vehicleKindNames: VehicleKind[] = Object.values(VehicleKind);
    constructor(
        public activeModal: NgbActiveModal,
        private authService: AuthService,
        public vehicleService: VehicleService,
        private afs: AngularFirestore,
        private fb: FormBuilder
    ) {
        if (this.vehicleService.editMode == true) {
            this.vehicleForm = this.fb.group({
                marke: new FormControl(this.vehicleService.vehicleToEdit.mark, [
                    Validators.required,
                ]),
                art: new FormControl(this.vehicleService.vehicleToEdit.kind, [
                    Validators.required,
                ]),
                baujahr: new FormControl(
                    this.vehicleService.vehicleToEdit.constructionYear,
                    [Validators.required]
                ),
                sitze: new FormControl(
                    this.vehicleService.vehicleToEdit.seats,
                    [Validators.required]
                ),
                stauraum: new FormControl(
                    this.vehicleService.vehicleToEdit.volume,
                    [Validators.required]
                ),
            });
        } else {
            this.vehicleForm = this.fb.group({
                marke: new FormControl("", [Validators.required]),
                art: new FormControl("", [Validators.required]),
                baujahr: new FormControl(0, [Validators.required]),
                sitze: new FormControl(0, [Validators.required]),
                stauraum: new FormControl(0, [Validators.required]),
            });
        }
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
        if (this.vehicleService.editMode == true) {
            this.vehicle = {
                vehicleId: this.vehicleService.vehicleToEdit.vehicleId,
                photoURL: this.vehicleService.vehicleToEdit.photoURL,
                userId: this.vehicleService.vehicleToEdit.userId,
                mark: this.marke.value,
                kind: this.art.value,
                model: "",
                constructionYear: this.baujahr.value,
                seats: this.sitze.value,
                volume: this.stauraum.value,
            };
            console.log(this.vehicleService.vehicleToEdit);
            console.log(this.vehicle);
        } else {
            const { uid } = this.authService.getCurrentUser();
            this.vehicle = {
                vehicleId: this.afs.createId(),
                photoURL: "",
                userId: uid,
                mark: this.marke.value,
                kind: this.art.value,
                model: "",
                constructionYear: this.baujahr.value,
                seats: this.sitze.value,
                volume: this.stauraum.value,
            };
            console.log(this.vehicle);
        }
        this.activeModal.close(this.vehicle);
    }
}
