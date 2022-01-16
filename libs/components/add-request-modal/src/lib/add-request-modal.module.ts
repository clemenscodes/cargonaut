import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddRequestModalComponent } from "./add-request-modal/add-request-modal.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import {
    faEnvelope,
    faLock,
    faExclamationCircle,
    faCheckCircle,
    faTimesCircle,
    faAddressCard,
    faExclamationTriangle,
    faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
@NgModule({
  imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      NgbModule,
  ],
  declarations: [AddRequestModalComponent],
  exports: [AddRequestModalComponent, ReactiveFormsModule],
})
export class AddRequestModalModule {
  constructor(library: FaIconLibrary) {
      library.addIcons(
          faEnvelope,
          faLock,
          faExclamationCircle,
          faCheckCircle,
          faTimesCircle,
          faAddressCard,
          faExclamationTriangle,
          faCalendarAlt
      );
  }
}
