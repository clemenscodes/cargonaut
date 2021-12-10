import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from './alert/alert.service';

@NgModule({
    imports: [CommonModule],
    providers: [AlertService],
})
export class ServicesModule {}
