import { Component, OnInit } from '@angular/core';

import { UploadComponent } from '../../upload.component';

@Component({
  selector: 'rd-upload-file-progress-bar',
  templateUrl: './upload-file-progress-bar.component.html',
  styleUrls: ['./upload-file-progress-bar.component.less'],
})
export class UploadFileProgressBarComponent implements OnInit {

  constructor(public uploadComponent: UploadComponent) {}

  ngOnInit() {
  }

}
