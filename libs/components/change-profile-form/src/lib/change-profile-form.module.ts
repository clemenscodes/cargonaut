import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChangeProfileFormComponent } from "./change-profile-form/change-profile-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { faUserTag } from "@fortawesome/free-solid-svg-icons";
import {
    FontAwesomeModule,
    FaIconLibrary,
} from "@fortawesome/angular-fontawesome";
import { UploadModule } from "@upload";
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        UploadModule,
    ],
    declarations: [ChangeProfileFormComponent],
    exports: [ChangeProfileFormComponent],
})
export class ChangeProfileFormModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faUserTag);
    }
}
