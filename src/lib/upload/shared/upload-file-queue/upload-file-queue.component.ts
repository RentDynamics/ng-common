import { Component, OnInit } from '@angular/core';

import { UploadComponent } from '../../upload.component';

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
