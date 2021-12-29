import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddVehicleModalComponent } from './add-vehicle-modal/add-vehicle-modal.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import {
    faEnvelope,
    faLock,
    faExclamationCircle,
    faCheckCircle,
    faTimesCircle,
    faAddressCard,
    faExclamationTriangle,
    faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        AddVehicleModalComponent
    ],
    exports: [AddVehicleModalComponent, ReactiveFormsModule],
})
export class AddVehicleModalModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(
            faEnvelope,
            faLock,
            faExclamationCircle,
            faCheckCircle,
            faTimesCircle,
            faAddressCard,
            faExclamationTriangle,
            faCalendarAlt
        );
    }
}
