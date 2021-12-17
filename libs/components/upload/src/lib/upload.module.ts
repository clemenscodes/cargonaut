import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServicesModule } from "@services";
import { UploadComponent } from "./upload/upload.component";
import { DirectivesModule } from "@directives";

@NgModule({
    imports: [CommonModule, ServicesModule, DirectivesModule],
    declarations: [UploadComponent],
    exports: [UploadComponent],
})
export class UploadModule {}
