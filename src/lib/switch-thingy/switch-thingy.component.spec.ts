import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchThingyComponent } from './switch-thingy.component';

describe('SwitchThingyComponent', () => {
  let component: SwitchThingyComponent;
  let fixture: ComponentFixture<SwitchThingyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchThingyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchThingyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
