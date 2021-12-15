import { Component } from '@angular/core';
import {
    AngularFireStorage,
    AngularFireUploadTask,
} from '@angular/fire/compat/storage';
// import { UploadService } from '@services';
import { Observable, tap } from 'rxjs';
import firebase from 'firebase/compat/app';
import { UploadService } from '@services';

@Component({
    selector: 'cargonaut-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
    constructor(public uploadService: UploadService) {}
}
