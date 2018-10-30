import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule, RdAngularFormsModule } from '@rd/forms';

import { EmailTemplateSelectComponent } from './email-template-select/email-template-select.component';
import { EmailTemplateFileUploaderModalComponent } from './email-template-file-uploader/email-template-file-uploader-modal/email-template-file-uploader-modal.component';
import { EmailPreviewComponent } from './email-preview/email-preview.component';
import { EmailAttachmentComponent } from './email-attachment/email-attachment.component';
import { EmailTemplateFileUploaderComponent } from './email-template-file-uploader/email-template-file-uploader.component';

import { FormsModule } from '@angular/forms';
import { EmailFormComponent } from './email-form.component';
import { EmailPreviewInlineComponent } from './email-preview/email-preview-inline/email-preview-inline.component';
import { EmailPreviewModalComponent } from './email-preview/email-preview-modal/email-preview-modal.component';
import { EmailTemplateCkeditorComponent } from './email-template-ckeditor/email-template-ckeditor.component';

@NgModule({
  imports: [CommonModule, FormsModule, CommonModule, RdAngularFormsModule],
  declarations: [
    EmailTemplateSelectComponent,
    EmailTemplateFileUploaderModalComponent,
    EmailPreviewComponent,
    EmailAttachmentComponent,
    EmailFormComponent,
    EmailPreviewInlineComponent,
    EmailPreviewModalComponent,
    EmailTemplateCkeditorComponent,
    EmailTemplateFileUploaderComponent
  ],
  exports: [
    EmailTemplateSelectComponent,
    EmailTemplateFileUploaderModalComponent,
    EmailPreviewComponent,
    EmailAttachmentComponent,
    EmailFormComponent,
    EmailPreviewInlineComponent,
    EmailPreviewModalComponent,
    EmailTemplateCkeditorComponent,
    EmailTemplateFileUploaderComponent,
    FormsModule,
    RdAngularFormsModule
  ]
})
export class EmailFormModule {}
