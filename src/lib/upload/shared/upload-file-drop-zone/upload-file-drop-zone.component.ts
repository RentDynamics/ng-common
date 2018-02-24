import { Component, Directive, Input, Output, OnInit } from '@angular/core';
import { FileDropDirective } from 'ng2-file-upload';

import { UploadChildComponent } from '../upload-child-component';
import { UploadComponent } from '../../upload.component';

@Component({
  selector: 'rd-upload-file-drop-zone, [rd-upload-file-drop-zone]',
  // host: {
  //   'ng2FileDrop': 'true',
  //   '[ngClass]': "{'nv-file-over': hasDropZoneOver}",
  //   '(fileOver)': "onFileOver($event)",
  //   '[uploader]': "uploadComponent.uploader"
  // },
  template: `
  <div ng2FileDrop
       [ngClass]="{'nv-file-over': hasDropZoneOver}"
       (fileOver)="onFileOver($event)"
       [uploader]="uploadComponent.uploader"
       style="width: 100%; height: 100%;">
      <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./upload-file-drop-zone.component.less'],
})
export class UploadFileDropZoneComponent implements OnInit, UploadChildComponent {

  private hasDropZoneOver: boolean = false;

  constructor(private uploadComponent: UploadComponent) {}

  ngOnInit() {
  }

  onFileOver($event: any): void {
      this.hasDropZoneOver = $event;
  }

}
