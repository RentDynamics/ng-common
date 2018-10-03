import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationComposerModule } from './conversation-composer/conversation-composer.module';
import { ConversationListModule } from './conversation-list/conversation-list.module';

@NgModule({
  declarations: [
  ],
  exports: [
    CommonModule,
    ConversationComposerModule,
    ConversationListModule
  ],
  providers: []
})
export class CommonConversationModule { }
