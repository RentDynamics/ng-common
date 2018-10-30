import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChildren,
  EventEmitter,
  Inject,
  NgZone,
  OnInit,
  Output,
  Input,
  QueryList,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { CoreApiService } from '@rd/core';

import { FILE_CATEGORY } from '../../../../file/file-category.enum';
import { ImgixService } from '../../../../imgix/imgix.service';

import { MessageChangeFieldDirective } from './shared/message-change-field.directive';
import { PhotosService } from '../../../../photos/photos.service';
import { ImageUrlUtilityService } from '../../../../imgix/image-url-utility.service';
import { Message } from './shared/message';
import { MessageModel } from './shared/message.model';

@Component({
  selector: 'rd-bulk-email-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit, AfterViewInit {
  @Input() communityGroupId: number;
  @Input() message: Message = new MessageModel();
  @Output() onMessageChange = new EventEmitter<Message>();
  @ViewChild('messageForm') messageForm: NgForm;
  @ViewChildren(MessageChangeFieldDirective) messageFieldList: QueryList<MessageChangeFieldDirective> = new QueryList<MessageChangeFieldDirective>();

  communityGroup: any;
  FILE_CATEGORY = FILE_CATEGORY;
  logoUrl: string = null;
  logoPhotoModalActive: boolean = false;

  communityGroupCommunities: Object[];

  constructor(
    public ngZone: NgZone,
    public photosSvc: PhotosService,
    private coreApiSvc: CoreApiService,
    private changeDetectorRef: ChangeDetectorRef,
    @Inject('SessionService') public sessionSvc: any,
    private imageUrlUtilitySvc: ImageUrlUtilityService,
    public imgixSvc: ImgixService
  ) {}

  ngOnInit() {
    if (this.communityGroupId) {
      this.coreApiSvc
        .get(
          `/communityGroups/${
            this.communityGroupId
          }?include=emailMsgItAdsourceTracking`
        )
        .subscribe(result => {
          this.ngZone.run(() => {
            this.communityGroup = result;
          });
        });

      if (!this.message.fileRelationType)
        this.message.fileRelationType = {
          communityGroup: this.communityGroupId
        };
    }
  }

  ngAfterViewInit() {
    console.log('this.messageForm', this.messageForm);
    this.messageFieldList.forEach(field => {
      field.updateField.subscribe(newVal => {
        let key = Object.keys(newVal)[0];
        this.message[key] = newVal[key];
        this.onMessageChange.emit(this.message);
      });
    });
  }

  setPhotoUrl(imageUrl: string) {
    this.message.photoUrl = this.imageUrlUtilitySvc.getImageFullUrl(imageUrl);
  }

  onChange(newVal) {
    this.validate();
  }

  // updateSelectedCommunity(id) {
  //   this.unitPhotosFileRelationType = {community: id};
  // }

  updateFooter(event) {
    this.message.footer = event;
    this.onMessageChange.emit(this.message);
    this.changeDetectorRef.detectChanges();
  }

  validate() {
    console.log(this.message.body, this.message.subject);
    if (this.message.body && this.message.subject) {
      return true;
    }
    return false;
  }
}
