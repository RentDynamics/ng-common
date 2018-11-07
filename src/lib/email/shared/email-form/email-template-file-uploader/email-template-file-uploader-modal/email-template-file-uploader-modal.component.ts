
import {forkJoin as observableForkJoin,  Observable } from 'rxjs';
import { Component, OnInit, Inject, ViewChild, EventEmitter, Output } from '@angular/core';

import { CoreApiService } from '@rd/core';

// import { environment } from '../../../../../environments/environment';

import { FileUploader } from 'ng2-file-upload';
import { BootstrapModalComponent } from '@rd/common/src/lib/modal/bootstrap-modal/bootstrap-modal.component';

@Component({
  selector: 'rd-email-template-file-uploader-modal',
  templateUrl: './email-template-file-uploader-modal.component.html',
  styleUrls: ['./email-template-file-uploader-modal.component.less']
})
export class EmailTemplateFileUploaderModalComponent implements OnInit {
  @ViewChild(BootstrapModalComponent) modal: BootstrapModalComponent;
  @Output() upload: EventEmitter<any> = new EventEmitter<any>();
    @Output() hidden: EventEmitter<boolean> = new EventEmitter<boolean>();

  fileCategoryId: number;
  communityId: number = this.sessionSvc.getSelectedCommunityID();
  uploadedFiles: any[];
  // environment: any = {production: false};

  private uploadFileUrl: string = '';
  uploader: FileUploader;

  private modalOptions: ModalOptions = {
    show: true
  };

  constructor(
    private coreApiSvc: CoreApiService,
    @Inject('SessionService') private sessionSvc: any
  ) {}

  ngOnInit() {
    this.fileCategoryId = 5;
    this.setupFileUploader();
    this.getUploadedImages();
  }

  setupFileUploader() {
    let self = this;
    // if (environment.production) {
    // if (false) {
    //   this.uploadFileUrl = 'https://api.rentdynamics.com/files';
    // } else {
      this.uploadFileUrl = 'https://api-dev.rentdynamics.com/files';
    // }

    this.uploader = new FileUploader({ url: this.uploadFileUrl });

    this.uploader.onBuildItemForm = function(fileItem, form) {
      form.append('fileCategory', self.fileCategoryId);
      form.append('name', fileItem._file.name);
      form.append('createdBy', self.sessionSvc.getSelectedAgentID());
      form.append('community', self.communityId);
    };
  }

  getUploadedImages() {
    // TODO: Updated the FileCategory table > change id 3 to community (not emailtemplate)
    this.coreApiSvc
      .get(
        `/files?filters=file_relation_type__community=${
          this.communityId
        }|file_category_id=${this.fileCategoryId}`
      )
      .subscribe(result => {
        this.uploadedFiles = result;
      });
  }

  cancelUpload() {
    this.uploader.clearQueue();
    this.hideModal();
  }

  uploadComplete(event) {
    let files = JSON.parse(event);
    this.createEmailAttachments(files);
    this.hideModal();
  }

  createEmailAttachments(files) {
    if (files.length > 0) {
      let postAttachments = [];
      files.forEach(f => {
        let body = { originalFileName: f.name, fileId: f.id };
        postAttachments.push(this.coreApiSvc.post('/emailAttachments', body));
      });

      observableForkJoin(postAttachments).subscribe(results => {
        if (results.length > 0) {
          results.forEach(emailAttachment => {
            let file = files.find(f => f.id == emailAttachment['fileId']);
            file.emailAttachmentId = emailAttachment['id'];
          });
          this.upload.emit(files);
        }
      });
    }
  }

  hideModal() {
    this.modal.hide();
  }

  onHidden($event) {
    this.hidden.emit(true);
  }
}
