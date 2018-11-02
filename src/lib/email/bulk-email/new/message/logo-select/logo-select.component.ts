import {
  Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange,
  SimpleChanges, ChangeDetectorRef
} from '@angular/core';

import { FILE_CATEGORY } from '../../../../../file/file-category.enum';

import { ImgixService } from '../../../../../imgix/imgix.service';
import { PhotosService } from '../../../../../photos/photos.service';
import { Image } from '../../../../../photos/shared/image';

@Component({
  selector: 'rd-logo-select',
  templateUrl: './logo-select.component.html',
  styleUrls: ['./logo-select.component.less']
})
export class LogoSelectComponent implements OnInit, OnChanges {
  @Input() fileCategoryId: number = FILE_CATEGORY.LOGO;
  @Input() fileRelationType: Object;
  @Output() change = new EventEmitter<string>();

  image: Image;
  logoPhotoModalActive: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef, public imgixSvc: ImgixService, private photosSvc: PhotosService) { }

  ngOnInit() {
    this.get();
  }

  ngOnChanges(newVal: SimpleChanges) {
    let fileRelationTypeChange = newVal['fileRelationType'];
    if (fileRelationTypeChange && !fileRelationTypeChange.isFirstChange() && fileRelationTypeChange.currentValue != fileRelationTypeChange.previousValue)
      this.get();
  }

  get() {
    this.photosSvc.get(this.fileRelationType, this.fileCategoryId).subscribe(result => {
      if (!result || !result[0])
        return this.image = null;

      this.set(result[0]);
      this.changeDetectorRef.markForCheck();
    });
  }

  set(newVal: Image){
      this.image = newVal;
      this.change.emit(this.imgixSvc.getImageUrl(newVal.fileUrl, 196));
  }

  onDeletePhoto(imageId?: number) {
    this.logoPhotoModalActive = false;
    this.get();
  }

  onModalHidden(event) {
    this.logoPhotoModalActive = false;
    this.get();
  }

}
