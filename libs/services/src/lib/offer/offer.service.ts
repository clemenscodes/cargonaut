import { Injectable } from "@angular/core";
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import { Offer } from "@api-interfaces";
import { map, Observable } from "rxjs";
@Injectable({
    providedIn: "root",
})
export class OfferService {
    offersCollection: AngularFirestoreCollection<Offer> =
        this.afs.collection<Offer>("offers", (ref) => ref.limit(5));
    offers: Observable<Offer[]>;
    constructor(public afs: AngularFirestore) {
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

    deleteOffer(offer: Offer) {
        this.offersCollection.ref.onSnapshot((snap) => {
            snap.forEach((item) => {
                console.log("item id: " + item.data()["offerId"]);
                console.log("expected offer id: " + offer.offerId);
                if (item.data()["offerId"] === offer.offerId)
                    item.ref.delete();
            });
        });
    }
}
