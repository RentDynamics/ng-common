import { Subscription, Observable } from 'rxjs';

import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from '../modal/modal.module';

import { BrowserMobilePreviewModule } from './shared/browser-mobile-preview/index';
import { ListComponent } from './list.component';
import { BulkEmailListItemComponent } from './shared/bulk-email-list-item/bulk-email-list-item.component';
import { BulkEmailModalComponent } from './shared/bulk-email-modal/bulk-email-modal.component';
import { RecipientStatusListComponent } from './shared/recipient-status-list/recipient-status-list.component';
import { LoadingIndicatorModule } from '../loading-indicator/loading-indicator.module';
import { TabsetModule } from '../tabset/tabset.module';
import { RdAngularFormsModule } from '@rd/forms';
import { BulkEmailDataService } from './bulk-email-data-service';


@NgModule({
  imports: [
    CommonModule,
    BrowserMobilePreviewModule,
    ModalModule,
    LoadingIndicatorModule,
    TabsetModule,
    RdAngularFormsModule
  ],
  declarations: [
    ListComponent,
    BulkEmailListItemComponent,
    BulkEmailModalComponent,
    RecipientStatusListComponent
  ],
  exports: [
    ListComponent
  ],
  providers: [
    BulkEmailDataService
  ]
})
export class BulkEmailListModule {
}
