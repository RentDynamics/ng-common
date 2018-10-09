import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileDropZoneComponent, UploadFilePreviewComponent, UploadFileProgressBarComponent,
  UploadFileQueueComponent, UploadFileSelectButtonComponent, UploadFileSubmitButtonComponent } from './shared/index';
import { UploadComponent } from './upload.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
  ],
  declarations: [
    UploadFileDropZoneComponent,
    UploadFilePreviewComponent,
    UploadFileProgressBarComponent,
    UploadFileQueueComponent,
    UploadFileSelectButtonComponent,
    UploadFileSubmitButtonComponent,
    UploadComponent
  ],
  exports: [
    CommonModule,
    UploadFileDropZoneComponent,
    UploadFilePreviewComponent,
    UploadFileProgressBarComponent,
    UploadFileQueueComponent,
    UploadFileSelectButtonComponent,
    UploadFileSubmitButtonComponent,
    UploadComponent
  ],
  providers: []
})
export class UploadModule { }
