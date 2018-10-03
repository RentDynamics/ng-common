import { ConversationListModule } from './conversation-list.module';

describe('ConversationListModule', () => {
  let conversationListModule: ConversationListModule;

  beforeEach(() => {
    conversationListModule = new ConversationListModule();
  });

  it('should create an instance', () => {
    expect(conversationListModule).toBeTruthy();
  });
});
