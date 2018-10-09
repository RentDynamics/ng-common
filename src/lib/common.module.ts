import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { FileUploadModule } from 'ng2-file-upload';

import { RdAngularCoreModule } from '@rd/core';

import { ExpandingListViewModule } from './expanding-list-view/index';
import { TabsetModule } from './tabset/index';
import { UploadModule } from './upload/index';
import { ModalModule } from './modal/index';
import { LoadingIndicatorModule } from './loading-indicator/index';
import { SimpleSortModule } from './simple-sort/index';
import { ToastModule } from './toast/index';
import { IFrameModule } from './iframe/iframe.module';
import { PipesModule } from './pipes';

@NgModule({
    declarations: [
        // ExpandingListViewComponent,
        // BootstrapModalComponent, ModalShowButton, ModalHideButton,
        // ModalToggleButton,
        // ModalComponent, ModalShowButton, ModalHideButton, ModalToggleButton,
        // TelephonePipe,
        // TabComponent, TabNavComponent, TabsetComponent,
        // UploadComponent,
        // UploadFileQueueComponent, UploadFilePreviewComponent,
        // UploadFileDropZoneComponent,
        // UploadFileProgressBarComponent, UploadFileSelectButtonComponent,
        // UploadFileSubmitButtonComponent,
    ],
    imports: [
        CommonModule,
        RdAngularCoreModule,
        FormsModule,
        // FileUploadModule,
        IFrameModule,
        SimpleSortModule,
        LoadingIndicatorModule,
        TabsetModule,
        ExpandingListViewModule,
        ModalModule,
        UploadModule,
        PipesModule,
        ToastModule,
    ],
    exports: [
        // ExpandingListViewComponent,
        // BootstrapModalComponent, ModalShowButton, ModalHideButton,
        // ModalToggleButton,
        // ModalComponent, ModalShowButton, ModalHideButton, ModalToggleButton,
        // TelephonePipe,
        // TabComponent, TabNavComponent, TabsetComponent,
        // UploadComponent,
        // UploadFileQueueComponent, UploadFilePreviewComponent,
        // UploadFileDropZoneComponent,
        // UploadFileProgressBarComponent, UploadFileSelectButtonComponent,
        // UploadFileSubmitButtonComponent,
        SimpleSortModule,
        IFrameModule,
        LoadingIndicatorModule,
        TabsetModule,
        ExpandingListViewModule,
        ModalModule,
        UploadModule,
        PipesModule,
        ToastModule,
    ],
    providers: [

    ]
})
export class RdAngularCommonModule { }
