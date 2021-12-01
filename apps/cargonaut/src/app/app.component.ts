import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@api-interfaces';
import { environment } from '@env';

@Component({
    selector: 'cargonaut-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    apiUrl = environment.apiUrl;
    hello$ = this.http.get<Message>(this.apiUrl);
    constructor(private http: HttpClient) {}
}
