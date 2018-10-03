import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { ConversationComposerComponent } from './conversation-composer.component';
import { ConversationComposerHeaderComponent } from './conversation-composer-header/conversation-composer-header.component';
import { ConversationComposerBodyComponent } from './conversation-composer-body/conversation-composer-body.component';
import { ConversationComposerFooterComponent } from './conversation-composer-footer/conversation-composer-footer.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ConversationComposerComponent, ConversationComposerHeaderComponent,
    ConversationComposerBodyComponent, ConversationComposerFooterComponent],
  exports: [ConversationComposerComponent, ConversationComposerHeaderComponent,
    ConversationComposerBodyComponent, ConversationComposerFooterComponent]
})
export class ConversationComposerModule { }
