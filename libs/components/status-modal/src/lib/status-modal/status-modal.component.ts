import { Component, Inject, OnInit } from "@angular/core";
import {
    MatDialogRef,
    MAT_DIALOG_DATA,
    MatDialog,
} from "@angular/material/dialog";
import { OfferService } from "@services";
import { Offer, Status } from "@api-interfaces";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "cargonaut-status-modal",
    templateUrl: "./status-modal.component.html",
    styleUrls: ["./status-modal.component.scss"],
})
export class StatusModalComponent implements OnInit {
    carIcon = faCar;
    userIcon = faUser;
    flagIcon = faFlag;

    constructor(
        public dialogRef: MatDialogRef<StatusModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Offer,
        private offerService: OfferService
    ) {}

    ngOnInit(): void {
        this.updateDialog();
    }

    public updateStatus() {
        if (this.data.status === Status.started) {
            this.data.status = Status.arrived;
            console.log(this.data.status);
        } else if (this.data.status === Status.arrived) {
            this.data.status = Status.finished;
            console.log(this.data.status);
        }

        this.offerService.updateOfferStatus(this.data);
        this.updateDialog();
    }

    private updateDialog() {
        if (this.data.status === "arrived") {
            document.querySelector("#arrived")?.classList.add("active");
        } else if (this.data.status === "finished") {
            document.querySelector("#arrived")?.classList.add("active");
            document.querySelector("#finished")?.classList.add("active");
        }
    }
}
