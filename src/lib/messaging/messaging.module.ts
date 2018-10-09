import { NgModule } from '@angular/core';

import { MessagingRoutingModule } from './messaging-routing.module';
import { MessagingComponent } from './messaging.component';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import {SmsModule} from './sms/sms.module';
// import {ChatModule} from './chat/chat.module';
import { ConversationComposerModule } from '../conversation/conversation-composer/conversation-composer.module';
import { ConversationListModule } from '../conversation/conversation-list/conversation-list.module';
import {ChatConversationListComponent} from './chat/chat-conversation-list/chat-conversation-list.component';
import {SmsConversationListComponent} from './sms/sms-conversation-list/sms-conversation-list.component';

@NgModule({
  declarations: [
    MessagingComponent,
    ChatConversationListComponent,
    SmsConversationListComponent
  ],
  imports: [
    CommonModule,
    // CommunityInfoModule,
    // ContactCardModule,
    MessagingRoutingModule,
    ConversationComposerModule,
    ConversationListModule,
    InfiniteScrollModule,
    // SmsModule,
    // ChatModule
  ],
  providers: []
})
export class CommonMessagingModule { }
