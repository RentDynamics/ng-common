import { Injectable } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { PhotosService } from './photos.service';

@Injectable()
export class PhotosUploader extends FileUploader {

  constructor(photosSvc: PhotosService) { 
    super({ url: photosSvc.uploadFileUrl });
  }

}
