import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Request, Status, Offer, ServiceKind, User} from '@api-interfaces';
import { Timestamp } from 'firebase/firestore';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Injectable({
    providedIn: 'root',
})
export class RequestService {
    private requestCollection: AngularFirestoreCollection<Request>;
    public offerToRequest: Offer;
    public seats: Array<number>;
    public volume: Array<number>;

    requests: Observable<Request[]>;
    constructor(
        private readonly afs: AngularFirestore, 
        private auth: AuthService
    ) {
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
        this.offerToRequest = {
            displayName: "",
            userId: "",
            offerId: "",
            date: new Timestamp(0,0),
            price: 0,
            status: Status.toBeStarted,
            serviceKind: ServiceKind.taxi,
            startAddress: {
                street: "",
                house: 0,
                zipCode: 0,
                city: ""
            },
            targetAddress: {
                street: "",
                house: 0,
                zipCode: 0,
                city: ""
            },
            seats: 0,
            volume: 0
        };
        this.seats = [];
        this.volume = [];
    }
    addRequest(request: Request) {
        this.requestCollection.add(request);
    }
    getRequest(id: string) {
        return this.requestCollection.doc(id);
    }


    setOfferToRequest(offer: Offer){
        this.offerToRequest = offer;
        this.seats = [...Array(offer.seats).keys()];
        //increase each by 1
        for (let i = 0; i < this.seats.length; i++){
            this.seats[i] += 1;
        }
        this.volume = [...Array(offer.volume).keys()];
        for (let i = 0; i < this.seats.length; i++){
            this.volume[i] += 1;
        }
    }

}
