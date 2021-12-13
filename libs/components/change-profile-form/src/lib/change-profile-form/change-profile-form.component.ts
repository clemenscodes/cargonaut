import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { ChangeProfileData } from '@api-interfaces';

@Component({
    selector: 'cargonaut-change-profile-form',
    templateUrl: './change-profile-form.component.html',
    styleUrls: ['./change-profile-form.component.scss'],
})
export class ChangeProfileFormComponent {
    /**
     * Change profile event
     */
    @Output() changeProfileEvent = new EventEmitter();
    /**
     * User display name
     */
    @Input() userDisplayName: string | undefined = '';
    /**
     * Loading state
     */
    @Input() loading = false;
    /**
     * Change profile form group
     */
    changeProfileForm: FormGroup;
    /**
     * Encoded preview icon string
     */
    /**
     * Constructor which initializes change profile reactive form and gets all icons
     * @param fb {FormBuilder}
     * @param iconService {IconService}
     */
    constructor(private fb: FormBuilder) {
        this.changeProfileForm = this.fb.group({
            displayName: new FormControl('', [
                Validators.maxLength(15),
                Validators.required,
            ]),
        });
    }
    /**
     * @returns {AbstractControl} The display name input control of the form
     */
    get displayName(): AbstractControl {
        return this.changeProfileForm.controls.displayName;
    }

    /**
     * Emit event to parent component with change profile data
     */
    changeProfile(): void {
        const data: ChangeProfileData = {
            displayName: this.displayName.value,
        };
        this.changeProfileEvent.emit(data);
    }
}
