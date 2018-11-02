import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { BulkEmailModule } from './bulk-email/bulk-email.module';
import { EmailComponent } from './email.component';

@NgModule({
  imports: [
    CommonModule,
    // BulkEmailModule,
  ],
  declarations: [
    EmailComponent,
  ],
  exports: [
    EmailComponent,
    // BulkEmailModule,
  ]
})
export class EmailModule { }
