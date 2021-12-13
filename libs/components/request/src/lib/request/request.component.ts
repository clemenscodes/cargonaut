import { Component } from '@angular/core';
import { RequestService } from '@services';
import { Request } from '@api-interfaces';

@Component({
    selector: 'cargonaut-request',
    templateUrl: './request.component.html',
    styleUrls: ['./request.component.scss'],
})
export class RequestComponent {
    requests: Map<string, Request> = new Map<string, Request>();
    constructor(private requestService: RequestService) {}
    setRequest(id: string) {
        this.requestService
            .getRequest(id)
            .get()
            .subscribe((req) => {
                const data = req.data();
                if (data) {
                    console.log(data);
                    this.requests.set(id, data);
                }
            });
    }
}
