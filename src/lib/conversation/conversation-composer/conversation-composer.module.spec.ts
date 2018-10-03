import { ConversationComposerModule } from './conversation-composer.module';

describe('ConversationComposerModule', () => {
  let conversationComposerModule: ConversationComposerModule;

  beforeEach(() => {
    conversationComposerModule = new ConversationComposerModule();
  });

  it('should create an instance', () => {
    expect(conversationComposerModule).toBeTruthy();
  });
});
