import { Component, Input } from '@angular/core';
import { Vehicle } from "@api-interfaces";

@Component({
  selector: 'cargonaut-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.scss']
})
export class VehicleItemComponent {
    @Input() vehicle!: Vehicle;
}
