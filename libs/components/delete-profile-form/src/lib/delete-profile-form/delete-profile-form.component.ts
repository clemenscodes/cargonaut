import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'cargonaut-delete-profile-form',
    templateUrl: './delete-profile-form.component.html',
    styleUrls: ['./delete-profile-form.component.scss'],
})
export class DeleteProfileFormComponent {
    @Output() deleteProfileEvent = new EventEmitter();

    @Input() loading = false;

    deleteProfile(): void {
        this.deleteProfileEvent.emit();
    }
}
