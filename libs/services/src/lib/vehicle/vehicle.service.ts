import { Injectable } from "@angular/core";
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import { Vehicle, VehicleKind } from "@api-interfaces";
import { map, Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { deleteDoc, doc} from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";


@Injectable({
    providedIn: "root",
})
export class VehicleService {
    vehicles: Observable<Vehicle[]>;
    vehiclesCollection: AngularFirestoreCollection<Vehicle>;
    vehicleToEdit: Vehicle;
    editMode: boolean = false;
    constructor(
        private afs: AngularFirestore,
        private authService: AuthService
    ) {
        const { uid } = this.authService.getCurrentUser();
        this.vehiclesCollection = this.afs.collection<Vehicle>(
            "vehicles",
            (ref) => ref.where("userId", "==", uid)
        );
        this.vehicleToEdit = { 
            vehicleId: "",
            photoURL: "",
            userId: "",
            mark: "",
            kind: VehicleKind.Cabrio,
            model: "",
            constructionYear: 0,
            seats: 0,
            volume: 0
        };
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

    editVehicle() {
        this.vehiclesCollection.ref.onSnapshot((snap) => {
            snap.forEach((item) => {
                console.log("item id: " + item.data()['vehicleId']);
                console.log("expected vehicle id: " + this.vehicleToEdit.vehicleId);
                if(item.data()["vehicleId"] === this.vehicleToEdit.vehicleId) {
                    item.ref.update({
                        "mark": this.vehicleToEdit.mark,
                        "kind": this.vehicleToEdit.kind,
                        "constructionYear": this.vehicleToEdit.constructionYear,
                        "seats": this.vehicleToEdit.seats,
                        "volume": this.vehicleToEdit.volume
                    });
                }
            });
        });
    }

    deleteVehicle(vehicle: Vehicle) {
        this.vehiclesCollection.ref.onSnapshot((snap) => {
            snap.forEach((item) => {
                console.log("item id: " + item.data()['vehicleId']);
                console.log("expected vehicle id: " + vehicle.vehicleId);
                if(item.data()["vehicleId"] === vehicle.vehicleId) item.ref.delete();
            });
        });
    }
}
