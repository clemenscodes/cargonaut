import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormGroup,
} from '@angular/forms';

@Component({
  selector: 'cargonaut-delete-profile-form',
  templateUrl: './delete-profile-form.component.html',
  styleUrls: ['./delete-profile-form.component.scss']
})
export class DeleteProfileFormComponent {
    @Output() deleteProfileEvent = new EventEmitter();

    @Input() loading = false;

    constructor() {
    }

    deleteProfile(): void {
        this.deleteProfileEvent.emit();
    }


}
