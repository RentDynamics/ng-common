import { TestBed, async, inject } from '@angular/core/testing';
import { CommunityDisplayPipe } from './community-display.pipe';

describe('Pipe: CommunityDisplay', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: 'SessionService', useValue: { } },
      ]
    })
  });

  it('create an instance', inject(['SessionService'], (
    sessionSvc: any) => {
    let pipe = new CommunityDisplayPipe(sessionSvc);
    expect(pipe).toBeTruthy();
  }));
});
