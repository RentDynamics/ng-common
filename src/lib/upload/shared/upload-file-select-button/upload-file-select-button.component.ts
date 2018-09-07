import { Component, OnInit, Input } from '@angular/core';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';

import { UploadComponent } from '../../upload.component';

@Component({
  selector: 'rd-upload-file-select-button',
  template: `
    <input type="file" ng2FileSelect [uploader]="uploadComponent.uploader" [attr.multiple]="multiple" /><br/>
  `,
  styleUrls: ['./upload-file-select-button.component.less'],
})
export class UploadFileSelectButtonComponent implements OnInit {
  @Input() multiple: boolean;

  constructor(public uploadComponent: UploadComponent) {}

  ngOnInit() {
  }

}
