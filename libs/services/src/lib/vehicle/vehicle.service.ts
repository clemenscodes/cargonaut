import { Injectable } from "@angular/core";
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import { Vehicle } from "@api-interfaces";
import { map, Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: "root",
})
export class VehicleService {
    vehicles: Observable<Vehicle[]>;
    vehiclesCollection: AngularFirestoreCollection<Vehicle>;
    constructor(
        private afs: AngularFirestore,
        private authService: AuthService
    ) {
        const { uid } = this.authService.getCurrentUser();
        this.vehiclesCollection = this.afs.collection<Vehicle>(
            "vehicles",
            (ref) => ref.where("userId", "==", uid)
        );
        this.vehicles = this.vehiclesCollection.snapshotChanges().pipe(
            map((vehicles) =>
                vehicles.map((v) => {
                    const data = v.payload.doc.data() as Vehicle;
                    const id = v.payload.doc.id;
                    const vehicle = { id, ...data };
                    console.log(vehicle);
                    return vehicle;
                })
            )
        );
    }
    addVehicle(vehicle: Vehicle) {
        this.vehiclesCollection.add(vehicle);
    }
}
