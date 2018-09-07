import { Component, OnInit } from '@angular/core';
import { FileDropDirective } from 'ng2-file-upload';

import { UploadComponent } from '../../upload.component';
import { UploadFilePreviewComponent } from '../upload-file-preview/upload-file-preview.component';
//import { UploadFileProgressBarComponent } from '../upload-file-progress-bar';

@Component({
  selector: 'rd-upload-file-queue',
  templateUrl: './upload-file-queue.component.html',
  styleUrls: ['./upload-file-queue.component.less'],
})
export class UploadFileQueueComponent implements OnInit {

  public support = !!(FileReader && CanvasRenderingContext2D);

  constructor(public uploadComponent: UploadComponent) {}

  ngOnInit() {

  }

}
