import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationComposerModule } from './conversation-composer/conversation-composer.module';
import { ConversationListModule } from './conversation-list/conversation-list.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  exports: [
    CommonModule,
    ConversationComposerModule,
    ConversationListModule,
    HttpClientModule
  ],
  providers: []
})
export class CommonConversationModule { }
