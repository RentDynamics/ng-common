import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { RdAngularCoreModule } from '@rd/core';

import { ExpandingListViewComponent } from './expanding-list-view/expanding-list-view.component';
import { TelephonePipe } from './pipes/telephone.pipe';
import { TabComponent, TabNavComponent, TabsetComponent } from './tabset/index';
import {   UploadComponent,
  UploadFileQueueComponent, UploadFilePreviewComponent, UploadFileDropZoneComponent,
  UploadFileProgressBarComponent, UploadFileSelectButtonComponent, UploadFileSubmitButtonComponent
 } from './upload/index';
import { ModalComponent, ModalShowButton, ModalHideButton, ModalToggleButton,
  BootstrapModalComponent
} from './modal/index';
import { LoadingIndicatorModule } from './loading-indicator/index';
import { SimpleSortModule } from './simple-sort/index';
import { Toast } from './toast/index';
import { IFrameModule } from './iframe/iframe.module';

@NgModule({
    declarations: [
        ExpandingListViewComponent,
        BootstrapModalComponent, ModalShowButton, ModalHideButton,
        ModalToggleButton,
        ModalComponent, ModalShowButton, ModalHideButton, ModalToggleButton,
        TelephonePipe,
        TabComponent, TabNavComponent, TabsetComponent,
        UploadComponent,
        UploadFileQueueComponent, UploadFilePreviewComponent,
        UploadFileDropZoneComponent,
        UploadFileProgressBarComponent, UploadFileSelectButtonComponent,
        UploadFileSubmitButtonComponent,
    ],
    imports: [
        CommonModule,
        RdAngularCoreModule,
        FormsModule,
        FileUploadModule,
        IFrameModule,
        SimpleSortModule,
        LoadingIndicatorModule,
    ],
    exports: [
        ExpandingListViewComponent,
        BootstrapModalComponent, ModalShowButton, ModalHideButton,
        ModalToggleButton,
        ModalComponent, ModalShowButton, ModalHideButton, ModalToggleButton,
        TelephonePipe,
        TabComponent, TabNavComponent, TabsetComponent,
        UploadComponent,
        UploadFileQueueComponent, UploadFilePreviewComponent,
        UploadFileDropZoneComponent,
        UploadFileProgressBarComponent, UploadFileSelectButtonComponent,
        UploadFileSubmitButtonComponent,
        SimpleSortModule,
        IFrameModule,
        LoadingIndicatorModule,
    ],
    providers: [
        Toast
    ]
})
export class RdAngularCommonModule { }
