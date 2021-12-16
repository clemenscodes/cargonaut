import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
    AngularFireStorage,
    AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { UploadTaskSnapshot } from '@angular/fire/compat/storage/interfaces';
import { AlertService } from '../alert/alert.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class UploadService {
    private basePath = '/images';
    file!: File;
    url = '';
    constructor(
        private authService: AuthService,
        private alertService: AlertService,
        private storage: AngularFireStorage,
        private afs: AngularFirestore
    ) {}
    task!: AngularFireUploadTask;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    startUpload(event: any) {
        this.file = event.target.files[0];
        if (this.file) {
            if (this.file.type.split('/')[0] !== 'image') {
                console.error('Man kann nur Bilder hochladen.');
                return;
            }
            const path = `${this.basePath}/${new Date().getTime()}_${
                this.file.name
            }`;
            this.task = this.storage.ref(path).put(this.file);
            this.task.snapshotChanges().subscribe(async (snap) => {
                if (snap && snap?.bytesTransferred === snap?.totalBytes) {
                    const user = this.authService.getCurrentUser();
                    await this.afs.collection('/photos').add({
                        path,
                        size: snap.totalBytes,
                    });
                    const url = await this.getUrl(snap);
                    console.log(url);
                    this.afs.collection('/users').doc(user.uid).update({
                        photoURL: url,
                    });
                    location.reload();
                }
            });
        }
        this.alertService.addAlert({
            type: 'success',
            message: 'Profilfoto erfolgreich hinzugefügt',
        });
    }

    private async getUrl(snap: UploadTaskSnapshot) {
        const url = await snap.ref.getDownloadURL();
        this.url = url; //store the URL
        console.log(this.url);
        return url;
    }
}
