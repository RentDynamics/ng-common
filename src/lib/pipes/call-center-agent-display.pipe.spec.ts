/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CallCenterAgentDisplayPipe } from './call-center-agent-display.pipe';

describe('Pipe: CallCenterAgentDisplay', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: 'AgentService', useValue: { } },
        { provide: 'SessionService', useValue: { } },
      ]
    })
  });

  it('create an instance', inject(['AgentService', 'SessionService'], (
    agentSvc: any, sessionSvc: any) => {
    let pipe = new CallCenterAgentDisplayPipe(agentSvc, sessionSvc);
    expect(pipe).toBeTruthy();
  }));
});
