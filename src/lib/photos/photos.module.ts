import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FileUploadModule } from 'ng2-file-upload';

// import { RdAngularFormsModule } from '@rd/forms';
import { RdAngularCommonModule } from '../common.module';

import { ImgixModule } from '../imgix/imgix.module';
import { PhotosService } from './photos.service';
import { PhotosUploader } from './photos-uploader';
import { ManagePhotosModalComponent } from './manage-photos-modal/manage-photos-modal.component';
import { ManagePhotoModalComponent } from './manage-photo-modal/manage-photo-modal.component';
import { UploadModule } from '@rd/common/src/lib/upload';
import { ModalModule } from '@rd/common/src/lib/modal';

@NgModule({
  imports: [
    CommonModule,
    // RdAngularFormsModule,
    RdAngularCommonModule,
    ImgixModule,
    // FileUploadModule,
    UploadModule,
    ModalModule
  ],
  declarations: [
    ManagePhotosModalComponent,
    ManagePhotoModalComponent,
  ],
  exports: [
    ManagePhotosModalComponent,
    ManagePhotoModalComponent,
    // RdAngularFormsModule,
    RdAngularCommonModule,
    ImgixModule,
    // FileUploadModule,
  ],
  providers: [
    PhotosService,
    PhotosUploader
  ]
})

export class PhotosModule { }
