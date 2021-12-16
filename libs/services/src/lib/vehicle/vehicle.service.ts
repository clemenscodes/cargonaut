import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Vehicle } from '@api-interfaces';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class VehicleService {
    vehicles!: Observable<Vehicle[]>;
    vehiclesCollection: AngularFirestoreCollection<Vehicle> =
        this.afs.collection<Vehicle>('vehicles');
    constructor(public afs: AngularFirestore) {
        this.vehicles = this.vehiclesCollection.snapshotChanges().pipe(
            map((actions) =>
                actions.map((a) => {
                    const data = a.payload.doc.data() as Vehicle;
                    const id = a.payload.doc.id;
                    return { id, ...data };
                })
            )
        );
    }
    addVehicle(vehicle: Vehicle) {
        this.vehiclesCollection.add(vehicle);
    }
}
