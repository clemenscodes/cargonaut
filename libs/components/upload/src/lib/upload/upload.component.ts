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
    percentage!: Observable<number | undefined>;
    snapshot!: Observable<firebase.storage.UploadTaskSnapshot | undefined>;
    downloadURL!: Promise<string>;
    isHovering!: boolean;
    toggleHover(event: boolean) {
        this.isHovering = event;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    startUpload(event: any) {
        const file = event.target.files[0];
        if (file?.type.split('/')[0] !== 'image') {
            console.error('Man kann nur Bilder hochladen.');
            return;
        }
        const path = `test/${new Date().getTime()}_${file.name}`;
        this.task = this.storage.ref(path).put(file);
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges();
        this.downloadURL = this.task.task.snapshot.ref.getDownloadURL();
    }

    isActive(snapshot: firebase.storage.UploadTaskSnapshot) {
        return (
            snapshot.state === 'running' &&
            snapshot.bytesTransferred < snapshot.totalBytes
        );
    }

    //     const fileRef = this.storage.ref(filePath);
    //     const task = this.storage.upload(filePath, file);

    //     // observe percentage changes
    //     this.uploadPercent = task.percentageChanges();
    //     // get notified when the download URL is available
    //     task.snapshotChanges()
    //         .pipe(finalize(() => (this.downloadURL = fileRef.getDownloadURL())))
    //         .subscribe();
    // }
}
