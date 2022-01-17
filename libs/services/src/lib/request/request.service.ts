import { ComponentFactoryResolver, Injectable } from '@angular/core';
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
    requestsByUser: Observable<Offer[]>;
    //offersByUser: Observable<Offer[]>;

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



        
        this.requestsByUser = this.offerService.offersCollection.snapshotChanges().pipe(
            map((elements) => 
                elements.filter((el) => this.userRequestsContains(el.payload.doc.data().offerId))
                        .map((el) => {
                            const data = el.payload.doc.data() as Offer;
                            const id = el.payload.doc.id;
                            return { id, ...data };
                        }) 
                )
                    
        );
        

        /*
        this.requestsByUser = this.requestCollection.snapshotChanges().pipe(
            map((elements) => 
                elements.filter((el) => this.auth.getCurrentUser().uid == el.payload.doc.data().userId)
                        .map((el) => {
                            const data = el.payload.doc.data() as Request;
                            const id = el.payload.doc.id;
                            return { id, ...data };
                        }) 
                )       
        ); // -> returns Observable<Request[]>
        */


        

        //print smth
        this.offerService.offersCollection.ref.onSnapshot((snap) => {
            console.log("--- printing all offers ---")
            snap.forEach((item) => {
                    console.log("offer id: " + item.data()["offerId"] + " by user: " + item.data()["userId"]);
                
            });
            console.log("--- stop --- ");
        });

        this.requestCollection.ref.onSnapshot((snap) => {
            console.log("--- printing all requests ---")
            snap.forEach((item) => {
                    console.log("offer id: " + item.data()["offerId"] + " by user: " + item.data()["userId"]);
                
            });
            console.log("--- stop --- ");
        });



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

    hasUnnacceptedRequest(offer: Offer){
        let res = false;
        this.requestCollection.ref.onSnapshot((snap) => {
            snap.forEach((item) => {
                if(item.data()["offerId"] === offer.offerId && item.data()["accepted"] == false){
                    res = true;
                }
            })
        });
        return res;
    }


    async deleteRequest(offer: Offer){
        //should modify Observable requestsByUser
        await this.requestCollection.ref.onSnapshot((snap) => {
            snap.forEach((item) => {
                item.ref.delete();
            });
        });

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

    /*
    async userRequestsContains(offerId: string){
        console.log("call to userRequestContains")
        const offerIds = new Array<string>();
        const user = this.auth.getCurrentUser();
        this.requestCollection.ref.onSnapshot((snap) => {
            snap.forEach((item) => {
                if (item.data()["userId"] === user.uid){
                    offerIds.push(item.data()["offerId"]);
                }
            });
            return offerIds.includes(offerId);
        });
    }
    */

    async userRequestsContains(offerId: string){
        const offerIds = new Array<string>();
        this.requestCollection.ref.onSnapshot((snap) => {
            snap.forEach((item) => {
                offerIds.push(item.data()["offerId"]);
            })
            return offerIds.includes(offerId);
        });
    }

}
