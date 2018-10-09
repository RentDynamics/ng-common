
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild, Inject } from '@angular/core';

import { CoreApiService, CoreApiSelector } from '@rd/core';
import { BootstrapModalComponent } from '../../modal/bootstrap-modal/bootstrap-modal.component';
import { FileUploader } from 'ng2-file-upload';

// import { environment } from '../../../../environments/environment';
import { ImgixService } from '../../imgix';
import { Image } from '../shared/image';
import { PhotosService } from '../photos.service';
import { PhotosUploader } from '../photos-uploader';

@Component({
  selector: 'rd-manage-photo-modal',
  templateUrl: 'manage-photo-modal.component.html',
  styleUrls: ['manage-photo-modal.component.less']
})
export class ManagePhotoModalComponent implements OnInit {
  @Input() fileCategoryId: number;
  @Input() fileRelationType: Object;
  @Input() uploader: FileUploader = new FileUploader({
    url: this.photosSvc.uploadFileUrl,
    autoUpload: true
  });
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() hidden: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(BootstrapModalComponent) parentModal: BootstrapModalComponent;

  imageOverlay: boolean = false;
  imageOverlayUrl: string;
  image: any;
  modalOptions: ModalOptions = {
    show: true
  };

  constructor(private changeDetectorRef: ChangeDetectorRef, private coreApiSvc: CoreApiService,
    @Inject('environment') private environment: any,
    public imgixSvc: ImgixService,
    private photosSvc: PhotosService) { }

  ngOnInit() {
    let self = this;
    if (!this.fileCategoryId) {
      throw Error('fileCategoryId input not provided to ManagePhotosModalComponent');
    }

    this.getImage().subscribe(null, this.onError);

    this.uploader.onBuildItemForm = function (fileItem, form) {
      form.append('file_category', self.fileCategoryId);
      form.append('name', fileItem._file.name);
      for (const prop in self.fileRelationType) {
        if (prop) {
          form.append(prop, self.fileRelationType[prop]);
        }
      }
    }
  }

  onError(err) {
    console.log(err);
  }

  onUploadSuccess($event) {
    this.getImage().subscribe(null, this.onError);
    this.parentModal.hide();
  }

  onHidden($event) {
    this.hidden.emit(this.image);
  }

  getImage(): Observable<any> {
    return this.photosSvc.get(this.fileRelationType, this.fileCategoryId).pipe(tap(result => {
      if (!result) {
        return this.image = null;
      }
      if (result && result[0]) {
        this.image = result[0];
        this.changeDetectorRef.markForCheck();
      }
      console.log('image', this.image)
    }));
  }

  deleteImage(imageId: number) {
    this.coreApiSvc.delete(`/files/${imageId}`).subscribe(() => {
      this.image = null;
      this.delete.emit(imageId);
      this.parentModal.hide();
    },
      this.onError
    );
  }

  launchImageOverlay(fileUrl: string) {
    this.imageOverlayUrl = this.imgixSvc.getImageUrl(fileUrl, 250, 180);
    this.imageOverlay = true;
  }
}
