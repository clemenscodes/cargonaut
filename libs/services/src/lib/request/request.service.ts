import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Request, Status, Offer, ServiceKind, User} from '@api-interfaces';
import { Timestamp } from 'firebase/firestore';
import { request } from 'http';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { OfferService } from '../offer/offer.service';

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
        private auth: AuthService,
        private offerService: OfferService
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

    getRequestedOffers(){
        //get requests of current user -> get related offers, return as collection
        const user = this.auth.getCurrentUser();


//query to observable
        const requestsOfCurrentUser = this.requestCollection.ref.where("userId", "==", user.uid);
        console.log("requests: " +requestsOfCurrentUser);

        /*
        this.offerService.offersCollection.ref.onSnapshot((snap) => {
            snap.forEach((item) => {
                if (item.data()["userId"] === user.uid){
                    const offer: Offer = {
                        userId: item.data()["userId"],
                        displayName: item.data()["displayName"],
                        offerId: item.data()["offerId"],
                        date: item.data()["date"],
                        price: item.data()["price"],
                        status: item.data()["status"],
                        serviceKind: item.data()["serviceKind"],
                        startAddress: item.data()["startAddress"],
                        targetAddress: item.data()["targetAddress"],
                        seats: item.data()["seats"],
                        volume: item.data()["volume"]

                    };
                    requestedOffers.
                }  
            });
        });
        */
        //return requestedOffers;
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
