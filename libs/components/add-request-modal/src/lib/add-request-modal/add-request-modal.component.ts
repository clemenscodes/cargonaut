import { Component } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AuthService, RequestService } from "@services";
import { Request, Status } from "@api-interfaces";
import { AngularFirestore } from "@angular/fire/compat/firestore";

import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: 'cargonaut-add-request-modal',
  templateUrl: './add-request-modal.component.html',
  styleUrls: ['./add-request-modal.component.scss']
})
export class AddRequestModalComponent  {
    requestForm: FormGroup;
    request!: Request;
    constructor(
      public activeModal: NgbActiveModal,
      private authService: AuthService,
      public requestService: RequestService,
      private afs: AngularFirestore,
      private fb: FormBuilder
    ) {
        this.requestForm = this.fb.group({
          sitze: new FormControl(this.requestService.seats[0], [Validators.required]),
          stauraum: new FormControl(this.requestService.volume[0], [Validators.required])
        });

    }

    get seats(): AbstractControl {
      return this.requestForm.controls.sitze;
    }

    get volume(): AbstractControl {
      return this.requestForm.controls.stauraum;
    }

    save(): void {
      //offer modal receives needed seats and storage

      //offering person: receives a request with seats, storage and user name in the related offer
      //                   possibility to accept or reject
      //requesting person: receives reference of the offer card in the own requests section
      const { uid } = this.authService.getCurrentUser();
      console.log("pushing request related to offerId " + this.requestService.offerToRequest.offerId);
      this.request = {
          userId: uid,
          offerId: this.requestService.offerToRequest.offerId,
          seats: this.seats.value,
          volume: this.volume.value,
          status: Status.toBeStarted,
          accepted: false,
      };
      this.activeModal.close(this.request);
    }

}
