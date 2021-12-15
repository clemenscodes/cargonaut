import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Upload } from '@api-interfaces';
// import firebase from 'firebase/compat/app';

@Injectable({
    providedIn: 'root',
})
export class UploadService {
    constructor(private storage: AngularFireStorage) {}
}
