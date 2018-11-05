import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { FileUploadModule } from 'ng2-file-upload';

import { RdAngularCoreModule } from '@rd/core';

import { ExpandingListViewModule } from './expanding-list-view/expanding-list-view.module';
import { TabsetModule } from './tabset/tabset.module';
// import { UploadModule } from './upload/index';
// import { ModalModule } from './modal/index';
import { LoadingIndicatorModule } from './loading-indicator/loading-indicator.module';
import { SimpleSortModule } from './simple-sort/simple-sort.module';
// import { ToastModule } from './toast/index';
import { IFrameModule } from './iframe/iframe.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
    declarations: [
        // ExpandingListViewComponent,
        // BootstrapModalComponent, ModalShowButton, ModalHideButton,
        // ModalToggleButton,
        // ModalComponent, ModalShowButton, ModalHideButton, ModalToggleButton,
        // TelephonePipe,
        // TabComponent, TabNavComponent, TabsetComponent,
        // UploadComponent
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
        // ModalModule,
        // UploadModule,
        PipesModule,
        // ToastModule,
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
        // ModalModule,
        // UploadModule,
        PipesModule,
        // ToastModule,
    ],
    providers: [

    ]
})
export class RdAngularCommonModule { }
