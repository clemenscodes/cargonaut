import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { AlertService } from '@services';

@Component({
    selector: 'cargonaut-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('alertAnimation', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(-2rem)' }),
                animate(
                    '200ms',
                    style({ opacity: 1, transform: 'translateY(0)' })
                ),
            ]),
            transition(':leave', [
                style({ transform: 'translateY(0)' }),
                animate(
                    '200ms',
                    style({ opacity: 0, transform: 'translateY(-2rem)' })
                ),
            ]),
        ]),
    ],
})
export class AppComponent implements OnInit {
    constructor(public alertService: AlertService) {}
    ngOnInit() {
        this.alertService.addAlert({
            type: 'success',
            message: 'Cargonaut initialized',
        });
    }
}
