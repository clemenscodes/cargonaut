import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request/request.component';
import { RequestRoutingModule } from './request/request-routing.module';

@NgModule({
    imports: [CommonModule, RequestRoutingModule],
    declarations: [RequestComponent],
    exports: [RequestComponent],
})
export class RequestModule {}
