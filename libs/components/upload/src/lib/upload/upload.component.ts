import { Component } from '@angular/core';
import { UploadService } from '@services';

@Component({
    selector: 'cargonaut-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
    constructor(public uploadService: UploadService) {}
}
