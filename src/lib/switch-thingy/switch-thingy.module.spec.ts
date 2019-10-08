import { SwitchThingyModule } from './switch-thingy.module';

describe('SwitchThingyModule', () => {
  let switchThingyModule: SwitchThingyModule;

  beforeEach(() => {
    switchThingyModule = new SwitchThingyModule();
  });

  it('should create an instance', () => {
    expect(switchThingyModule).toBeTruthy();
  });
});
