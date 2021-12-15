import { Component } from '@angular/core';
import {
    AngularFireStorage,
    AngularFireUploadTask,
} from '@angular/fire/compat/storage';
// import { UploadService } from '@services';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
// import { finalize, Observable } from 'rxjs';

@Component({
    selector: 'cargonaut-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
    constructor(private storage: AngularFireStorage) {}
    task!: AngularFireUploadTask;
    snapshot!: Observable<firebase.storage.UploadTaskSnapshot | undefined>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    startUpload(event: any) {
        const file = event.target.files[0];
        if (file?.type.split('/')[0] !== 'image') {
            console.error('Man kann nur Bilder hochladen.');
            return;
        }
        const path = `${new Date().getTime()}_${file.name}`;
        this.task = this.storage.ref(path).put(file);
        this.snapshot = this.task.snapshotChanges();
    }
}
