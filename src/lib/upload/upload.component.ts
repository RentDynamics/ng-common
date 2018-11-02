import { Component, EventEmitter, OnInit, OnDestroy, Input, Output, Optional } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'rd-upload, [rd-upload]',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.less'],
})
export class UploadComponent implements OnInit, OnDestroy {
    @Input() url: string = '';
    @Input() uploader: FileUploader = new FileUploader({ url: this.url });
    @Output() onWhenAddingFileFailed = new EventEmitter();
    @Output() onAfterAddingFile = new EventEmitter();
    @Output() onAfterAddingAll = new EventEmitter();
    @Output() onBeforeUploadItem = new EventEmitter();
    @Output() onProgressItem = new EventEmitter();
    @Output() onProgressAll = new EventEmitter();
    @Output() onSuccessItem = new EventEmitter();
    @Output() onErrorItem = new EventEmitter();
    @Output() onCancelItem = new EventEmitter();
    @Output() onCompleteItem = new EventEmitter();
    @Output() onCompleteAll = new EventEmitter();
    /* Depracated */
    @Output() change = new EventEmitter();
    @Output() complete = new EventEmitter();
    @Output() success = new EventEmitter();
    /* End Depracated */

    constructor() { }

    ngOnInit() {
      this.subscribeToEvents();
    }

    subscribeToEvents(){
        let self = this;
        this.uploader.onWhenAddingFileFailed = function (item, filter, options) {
          self.onWhenAddingFileFailed.emit(arguments);
        };
        this.uploader.onAfterAddingFile = function (fileItem) {
          self.onAfterAddingFile.emit(arguments);
        };
        this.uploader.onAfterAddingAll = function (addedFileItems) {
          self.change.emit(addedFileItems);
          self.onAfterAddingAll.emit(arguments);
        };
        this.uploader.onBeforeUploadItem = function (item) {
          self.onBeforeUploadItem.emit(arguments);
        };
        this.uploader.onProgressItem = function (fileItem, progress) {
          self.onProgressItem.emit(arguments);
        };
        this.uploader.onProgressAll = function (progress) {
          self.onProgressAll.emit(arguments);
        };
        this.uploader.onSuccessItem = function (fileItem, response, status, headers) {
          self.success.emit(response);
          self.onSuccessItem.emit(arguments);
        };
        this.uploader.onErrorItem = function (fileItem, response, status, headers) {
          self.onErrorItem.emit(arguments);
        };
        this.uploader.onCancelItem = function (fileItem, response, status, headers) {
          self.onCancelItem.emit(arguments);
        };
        this.uploader.onCompleteItem = function (fileItem, response, status, headers) {
          self.complete.emit(response);
          self.onCompleteItem.emit(arguments);
        };
        this.uploader.onCompleteAll = function () {
          self.onCompleteAll.emit(arguments);
        };
    }

    ngOnDestroy(){
      this.uploader.destroy();
    }
}
