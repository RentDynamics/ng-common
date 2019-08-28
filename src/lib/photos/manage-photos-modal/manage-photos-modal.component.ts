
import {mergeMap, tap} from 'rxjs/operators';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild, Inject } from '@angular/core';

import { CoreApiService, CoreApiSelector } from '@rd/core';
import { FileUploader } from 'ng2-file-upload';

import { ImgixService } from '../../imgix/imgix.service';
import { Image } from '../shared/image';
import { PhotosService } from '../photos.service';
import { PhotosUploader } from '../photos-uploader';
import { Observable } from 'rxjs';

@Component({
  selector: 'rd-manage-photos-modal',
  templateUrl: 'manage-photos-modal.component.html',
  styleUrls: ['manage-photos-modal.component.less']
})
export class ManagePhotosModalComponent implements OnInit {
  @Input() fileCategoryId: number;
  @Input() fileRelationType: Object;
  @Output() hidden: EventEmitter<any> = new EventEmitter<any>();

  imageOverlay: boolean = false;
  imageOverlayUrl: string;
  images: string[] = [];
  modalOptions: ModalOptions = {
    show: true
  };

  constructor(private changeDetectorRef: ChangeDetectorRef, private coreApiSvc: CoreApiService, 
    public imgixSvc: ImgixService,
    private photosSvc: PhotosService, public photosUploader: PhotosUploader) { }

  ngOnInit() {
    let self = this;
    if (!this.fileCategoryId){
      throw Error('fileCategoryId input not provided to ManagePhotosModalComponent');
    }

    this.getImages().subscribe(null, this.onError);

    this.photosUploader.onBuildItemForm = function (fileItem, form) {
      form.append('file_category', self.fileCategoryId);
      form.append('name', fileItem._file.name);
      for (const prop in self.fileRelationType){
        if(prop){
          form.append(prop, self.fileRelationType[prop])
        }
      }
    }
  }

  onError(err) {
    console.log(err);
  }

  onUploadSuccess() {
    this.getImages().subscribe(null, this.onError);
  }

  onHidden($event) {
    this.hidden.emit($event);
  }

  getImages(): Observable<any> {
    let self = this;
    return this.photosSvc.get(this.fileRelationType, this.fileCategoryId).pipe(tap(result => {
      self.images = result;
      self.changeDetectorRef.detectChanges();
    }));
  }

  deleteImage(imageId: number) {
    this.coreApiSvc.delete(`/files/${imageId}`).pipe(mergeMap(result => this.getImages())).subscribe(
      null,
      this.onError
    );
  }

  launchImageOverlay(fileUrl: string){
    this.imageOverlayUrl = this.imgixSvc.getImageUrl(fileUrl, 250, 180);
    this.imageOverlay = true;
  }
}
