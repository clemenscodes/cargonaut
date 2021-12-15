import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
    AngularFireStorage,
    AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { UploadTaskSnapshot } from '@angular/fire/compat/storage/interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UploadService {
    private basePath = '/images';
    file!: File;
    url = '';
    constructor(
        private storage: AngularFireStorage,
        private afs: AngularFirestore
    ) {}
    task!: AngularFireUploadTask;
    snapshot!: Observable<UploadTaskSnapshot | undefined>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async startUpload(event: any) {
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
            this.snapshot = this.task.snapshotChanges().pipe(
                tap((snap) => {
                    if (snap?.bytesTransferred === snap?.totalBytes) {
                        if (snap) {
                            this.afs
                                .collection('photos')
                                .add({ path, size: snap?.totalBytes });
                            this.getUrl(snap);
                        }
                    }
                })
            );
        }
    }

    private async getUrl(snap: UploadTaskSnapshot) {
        const url = await snap.ref.getDownloadURL();
        this.url = url; //store the URL
        console.log(this.url);
    }
}
