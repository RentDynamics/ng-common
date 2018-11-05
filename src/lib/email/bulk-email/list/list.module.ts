import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { BrowserMobilePreviewModule } from '../../shared/browser-mobile-preview/browser-mobile-preview.module';
import { ListComponent } from './list.component';
import { LoadingIndicatorModule } from '../../../loading-indicator/loading-indicator.module';
import { BulkEmailListItemComponent } from './shared/bulk-email-list-item/bulk-email-list-item.component';
// import { BulkEmailModalComponent } from './shared/bulk-email-modal/bulk-email-modal.component';
// import { RecipientStatusListComponent } from './shared/recipient-status-list/recipient-status-list.component';
// import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        LoadingIndicatorModule,

        // BrowserMobilePreviewModule,
        // CommonModule,
        // FormsModule,
    ],
    declarations: [
      ListComponent,
      BulkEmailListItemComponent,
      // BulkEmailModalComponent,
      // RecipientStatusListComponent
    ],
    exports: [
      ListComponent,
      // BrowserMobilePreviewModule,
      // FormsModule,
    ],
    providers: [

    ]
})
export class BulkEmailListModule { }
