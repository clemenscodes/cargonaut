import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Offer } from '@api-interfaces';
import { map, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class OfferService {
    private offersCollection: AngularFirestoreCollection<Offer>;
    offers: Observable<Offer[]>;
    constructor(
        private readonly afs: AngularFirestore,
    ) {
        this.offersCollection = this.afs.collection<Offer>('offers');
        this.offers = this.offersCollection.snapshotChanges().pipe(
            map((actions) =>
                actions.map((a) => {
                    const data = a.payload.doc.data() as Offer;
                    const id = a.payload.doc.id;
                    return { id, ...data };
                })
            )
        );
    }
    addOffer(offer: Offer) {
        this.offersCollection.add(offer);
    }
}
