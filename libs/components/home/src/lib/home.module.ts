import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, NgbButtonsModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
})
export class HomeModule {}
