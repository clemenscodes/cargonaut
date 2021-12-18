import { Timestamp } from "firebase/firestore";
import { Component } from "@angular/core";
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Offer, ServiceKind, Status } from "@api-interfaces";
import { AuthService, OfferService } from "@services";

@Component({
    selector: "cargonaut-add-offer-dialog",
    templateUrl: "./add-offer-dialog.component.html",
    styleUrls: ["./add-offer-dialog.component.scss"],
})
export class AddOfferDialogComponent {
    /**
     * Add Offer Form Group
     */
    offerForm!: FormGroup;
    offer!: Offer;
    constructor(
        public dialogRef: MatDialogRef<AddOfferDialogComponent>,
        private fb: FormBuilder,
        private authService: AuthService,
        private offerService: OfferService
    ) {
        this.offerForm = this.fb.group({
            seats: new FormControl(5, [Validators.required]),
            volume: new FormControl(400, [Validators.required]),
            date: new FormControl("", [Validators.required]),
            price: new FormControl(30, [Validators.required]),
            serviceKind: new FormControl(ServiceKind.taxi, [
                Validators.required,
            ]),
            startStreet: new FormControl("Marburger Straße", [
                Validators.required,
            ]),
            startCity: new FormControl("Gießen", [Validators.required]),
            startHouse: new FormControl(1, [Validators.required]),
            startZipCode: new FormControl(35390, [Validators.required]),
            targetStreet: new FormControl("Krofdorfer Straße", [
                Validators.required,
            ]),
            targetCity: new FormControl("Gießen", [Validators.required]),
            targetHouse: new FormControl(12, [Validators.required]),
            targetZipCode: new FormControl(35398, [Validators.required]),
        });
    }
    /**
     * @returns {AbstractControl} The seats input control of the form
     */
    get seats(): AbstractControl {
        return this.offerForm.controls.seats;
    }
    /**
     * @returns {AbstractControl} The volume input control of the form
     */
    get volume(): AbstractControl {
        return this.offerForm.controls.volume;
    }
    /**
     * @returns {AbstractControl} The date input control of the form
     */
    get date(): AbstractControl {
        return this.offerForm.controls.date;
    }
    /**
     * @returns {AbstractControl} The price input control of the form
     */
    get price(): AbstractControl {
        return this.offerForm.controls.price;
    }
    /**
     * @returns {AbstractControl} The serviceKind input control of the form
     */
    get serviceKind(): AbstractControl {
        return this.offerForm.controls.serviceKind;
    }
    /**
     * @returns {AbstractControl} The startStreet input control of the form
     */
    get startStreet(): AbstractControl {
        return this.offerForm.controls.startStreet;
    }
    /**
     * @returns {AbstractControl} The startCity input control of the form
     */
    get startCity(): AbstractControl {
        return this.offerForm.controls.startCity;
    }
    /**
     * @returns {AbstractControl} The startHouse input control of the form
     */
    get startHouse(): AbstractControl {
        return this.offerForm.controls.startHouse;
    }
    /**
     * @returns {AbstractControl} The startZipCode input control of the form
     */
    get startZipCode(): AbstractControl {
        return this.offerForm.controls.startZipCode;
    }
    /**
     * @returns {AbstractControl} The targetStreet input control of the form
     */
    get targetStreet(): AbstractControl {
        return this.offerForm.controls.targetStreet;
    }
    /**
     * @returns {AbstractControl} The targetCity input control of the form
     */
    get targetCity(): AbstractControl {
        return this.offerForm.controls.targetCity;
    }
    /**
     * @returns {AbstractControl} The targetHouse input control of the form
     */
    get targetHouse(): AbstractControl {
        return this.offerForm.controls.targetHouse;
    }
    /**
     * @returns {AbstractControl} The targetZipCode input control of the form
     */
    get targetZipCode(): AbstractControl {
        return this.offerForm.controls.targetZipCode;
    }
    addOffer() {
        const { uid } = this.authService.getCurrentUser();
        this.offer = {
            seats: this.seats.value,
            price: this.price.value,
            volume: this.volume.value,
            date: this.date.value ? Timestamp.fromDate(this.date.value) : Timestamp.now(),
            startAddress: {
                street: this.startStreet.value,
                city: this.startCity.value,
                house: this.startHouse.value,
                zipCode: this.startZipCode.value,
            },
            targetAddress: {
                street: this.targetStreet.value,
                city: this.targetCity.value,
                house: this.targetHouse.value,
                zipCode: this.targetZipCode.value,
            },
            serviceKind: this.serviceKind.value,
            status: Status.toBeStarted,
            userId: uid,
        };
        console.log(this.offer);
        this.offerService.addOffer(this.offer);
    }
    onCancelClick(): void {
        console.log("onCancelClick");
        this.dialogRef.close();
    }
}
