import { Component, OnInit } from '@angular/core';
//import { FileDropDirective } from 'ng2-file-upload';

import { UploadComponent } from '../../upload.component';

@Component({
  selector: 'rd-upload-file-submit-button',
  template: `
  <button type="button" class="btn btn-success btn-s"
          (click)="onClick()" [disabled]="!uploadComponent.uploader.getNotUploadedItems().length">
      <span class="glyphicon glyphicon-upload"></span> Upload all
  </button>
  `,
  styleUrls: ['./upload-file-submit-button.component.less'],
})
export class UploadFileSubmitButtonComponent implements OnInit {

  constructor(private uploadComponent: UploadComponent) {}

  ngOnInit() {
  }

  onClick(){
    this.uploadComponent.uploader.uploadAll();
    console.log(this.uploadComponent.uploader);
  }
}
