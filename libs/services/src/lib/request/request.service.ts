import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Request } from '@api-interfaces';
import { map, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class RequestService {
    private requestCollection: AngularFirestoreCollection<Request>;
    requests: Observable<Request[]>;
    constructor(private readonly afs: AngularFirestore) {
        this.requestCollection = this.afs.collection<Request>('requests');
        this.requests = this.requestCollection.snapshotChanges().pipe(
            map((actions) =>
                actions.map((a) => {
                    const data = a.payload.doc.data() as Request;
                    const id = a.payload.doc.id;
                    return { id, ...data };
                })
            )
        );
    }
    addRequest(request: Request) {
        this.requestCollection.add(request);
    }
    getRequest(id: string) {
        return this.requestCollection.doc(id);
    }
}
