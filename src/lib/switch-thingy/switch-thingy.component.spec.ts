import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SwitchThingyComponent } from './switch-thingy.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SwitchThingyModule } from './switch-thingy.module';

describe('SwitchThingyComponent', () => {
  let component: SwitchThingyComponent;
  let fixture: ComponentFixture<SwitchThingyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SwitchThingyModule],
      schemas: [NO_ERRORS_SCHEMA]
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

  it('should emit new value when onChange is emitted', fakeAsync(() => {
    // arrange
    let result;
    component.onChange.subscribe((newVal) => {
      result = newVal;
    });
    // act
    component.onChange.emit('Resident');
    tick();
    // assert
    expect(result).toBe('Resident');
  }));
});
