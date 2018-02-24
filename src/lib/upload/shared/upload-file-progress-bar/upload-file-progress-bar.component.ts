import { Component, OnInit } from '@angular/core';
import { FileDropDirective } from 'ng2-file-upload';

import { UploadComponent } from '../../upload.component';

@Component({
  selector: 'rd-upload-file-progress-bar',
  templateUrl: './upload-file-progress-bar.component.html',
  styleUrls: ['./upload-file-progress-bar.component.less'],
})
export class UploadFileProgressBarComponent implements OnInit {

  constructor(private uploadComponent: UploadComponent) {}

  ngOnInit() {
  }

}
