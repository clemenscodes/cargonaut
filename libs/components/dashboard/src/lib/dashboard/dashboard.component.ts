import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { OfferService } from '@services';

@Component({
  selector: 'cargonaut-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    public faPlusCircle = faPlusCircle;

  constructor() { }

}
