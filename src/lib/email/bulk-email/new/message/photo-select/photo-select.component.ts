
import {tap} from 'rxjs/operators';
import { Component, ContentChild, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';

import { CoreApiService, CoreApiSelector } from '@rd/core';

import {ImageUrlUtilityService} from '../../../../../imgix/image-url-utility.service';
import { ImgixService } from '../../../../../imgix/imgix.service';
import { PhotosService } from '../../../../../photos/photos.service';
import { PhotoSelect } from '../../../../../photos/shared/photo-select';

@Component({
  selector: 'rd-photo-select',
  templateUrl: './photo-select.component.html',
  styleUrls: ['./photo-select.component.less']
})
export class PhotoSelectComponent implements OnInit, PhotoSelect {
  @Input() communities: any[];
  @Input() fileCategoryId: number;
  @Input() value: string;
  @Input() manageDisabled: boolean = false;
  @Output() updateSelectedCommunity = new EventEmitter<string>();
  @Output() change = new EventEmitter<string>();

  active: boolean = false;
  selectedCommunityId: number;
  images: any[] = [];
  modalActive: boolean = false;
  unitPhotosFileRelationType: Object;

  constructor(private coreApiSvc: CoreApiService, private imgixSvc: ImgixService,
    private photosSvc: PhotosService,
    private imageUrlUtilitySvc: ImageUrlUtilityService,
    @Inject('SessionService') private sessionSvc: any) {

  }

  ngOnInit() {
    if (!this.communities)
      throw Error('communities input not provided to PhotoSelectComponent');

    if (!this.fileCategoryId)
      throw Error('fileCategoryId input not provided to PhotoSelectComponent');

    this.updateSelectedCommunityId(this.communities[0].id);
    this.get().subscribe();
  }

  get() {
    let fileRelationType: Object = {community : this.selectedCommunityId};
    return this.photosSvc.get(fileRelationType, this.fileCategoryId).pipe(
      tap((result: any[]) => {
        if (!result) return;
        this.images = result;
      }));
  }

  updateSelectedCommunityId(id: number) {
    this.selectedCommunityId = id;
    this.unitPhotosFileRelationType = {community: this.selectedCommunityId};
    this.get().subscribe();
    this.updateSelectedCommunity.emit(id.toString());
  }

  updateSelectedPhotoUrl(newVal: string) {
    if (newVal) {
      this.value = newVal;
    }
    this.active = false;
    this.change.emit(this.value);
  }

  open() {
    if (!this.selectedCommunityId)
      this.selectedCommunityId = this.communities[0].id;

    this.get().subscribe();
    this.value = '';
    this.active = true;
  }

  close() {
    this.active = false;
  }

  closeModal() {
    this.modalActive = false;
    this.get().subscribe();
  }

  imageFullUrl(imageUrl: string) {
    return this.imageUrlUtilitySvc.getImageFullUrl(imageUrl);
  }

}
