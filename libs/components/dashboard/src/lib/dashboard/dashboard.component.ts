import { Component } from "@angular/core";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons/faPlusCircle";

@Component({
    selector: "cargonaut-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
    faPlusCircle = faPlusCircle;
}
