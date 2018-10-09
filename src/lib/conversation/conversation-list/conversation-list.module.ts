import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationListComponent } from './conversation-list.component';
import { ConversationListItemComponent } from './conversation-list-item/conversation-list-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ConversationListHeaderComponent } from './conversation-list-header/conversation-list-header.component';
import { ConversationListBodyComponent } from './conversation-list-body/conversation-list-body.component';
import { ConversationListFooterComponent } from './conversation-list-footer/conversation-list-footer.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ConversationListComponent, ConversationListItemComponent, ConversationListHeaderComponent,
    ConversationListBodyComponent, ConversationListFooterComponent],
  exports: [ConversationListComponent, ConversationListItemComponent, ConversationListHeaderComponent,
    ConversationListBodyComponent, ConversationListFooterComponent]
})
export class ConversationListModule { }
