import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Offer, ServiceKind, Status } from "@api-interfaces";
import { Timestamp } from "firebase/firestore";
import { AuthService } from "@services";
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";

@Component({
    selector: "cargonaut-add-offer-modal",
    templateUrl: "./add-offer-modal.component.html",
    styleUrls: ["./add-offer-modal.component.scss"],
})
export class AddOfferModalComponent {
    offerForm: FormGroup;
    offer!: Offer;
    constructor(
        public activeModal: NgbActiveModal,
        private authService: AuthService,
        private fb: FormBuilder
    ) {
        this.offerForm = this.fb.group({
            seats: new FormControl("", [Validators.required]),
            volume: new FormControl("", [Validators.required]),
            date: new FormControl("", [Validators.required]),
            price: new FormControl("", [Validators.required]),
            startStreet: new FormControl("", [Validators.required]),
            startCity: new FormControl("", [Validators.required]),
            startHouse: new FormControl("", [Validators.required]),
            startZipCode: new FormControl("", [Validators.required]),
            targetStreet: new FormControl("", [Validators.required]),
            targetCity: new FormControl("", [Validators.required]),
            targetHouse: new FormControl("", [Validators.required]),
            targetZipCode: new FormControl("", [Validators.required]),
        });
    }
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
    save(): void {
        const { uid } = this.authService.getCurrentUser();
        this.offer = {
            seats: this.seats.value,
            price: this.price.value,
            volume: this.volume.value,
            date: this.date.value
                ? Timestamp.fromDate(new Date(this.date.value))
                : Timestamp.now(),
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
            serviceKind:
                this.seats.value > 0 ? ServiceKind.taxi : ServiceKind.transport,
            status: Status.toBeStarted,
            userId: uid,
        };
        console.log(this.offer);
        this.activeModal.close(this.offer);
    }
}
