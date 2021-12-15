import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '@services';
import { UploadComponent } from './upload/upload.component';

@NgModule({
    imports: [CommonModule, ServicesModule],
    declarations: [UploadComponent],
    exports: [UploadComponent],
})
export class UploadModule {}
