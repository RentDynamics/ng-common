import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { RdAngularFormsModule } from '@rd/forms';

import { BulkEmailComponent } from './bulk-email.component';
// import { BulkEmailNewModule } from './new/new.module';
// import { BulkEmailListModule } from './list/list.module';

@NgModule({
  imports: [
    CommonModule,
    // BulkEmailNewModule,
    // BulkEmailListModule,
    // RdAngularFormsModule,
  ],
  declarations: [
    BulkEmailComponent,
  ],
  exports: [
    BulkEmailComponent,
  ]
})
export class BulkEmailModule { }
