import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleRoutingModule } from './vehicle/vehicle-routing.module';

@NgModule({
    imports: [CommonModule, VehicleRoutingModule],
    declarations: [VehicleComponent],
    exports: [VehicleComponent],
})
export class VehicleModule {}
