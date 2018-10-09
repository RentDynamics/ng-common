import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationComposerModule } from './conversation-composer/conversation-composer.module';
import { ConversationListModule } from './conversation-list/conversation-list.module';
import { HttpClientModule } from '@angular/common/http';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
  ],
  exports: [
    CommonModule,
    ConversationComposerModule,
    ConversationListModule,
    HttpClientModule,
    // InfiniteScrollModule
  ],
  providers: []
})
export class CommonConversationModule { }
