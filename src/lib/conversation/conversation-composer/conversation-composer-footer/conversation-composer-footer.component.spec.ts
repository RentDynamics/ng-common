import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { ConversationComposerFooterComponent } from './conversation-composer-footer.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {EventEmitter, NO_ERRORS_SCHEMA} from '@angular/core';

describe('ConversationComposerFooterComponent', () => {
  let component: ConversationComposerFooterComponent;
  let fixture: ComponentFixture<ConversationComposerFooterComponent>;
  let fb: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationComposerFooterComponent ],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
      // providers: [{ provide: FormBuilder, useValue: { group: () => {}  } }]
    })
      .compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb2) => {
    fixture = TestBed.createComponent(ConversationComposerFooterComponent);
    component = fixture.componentInstance;
    fb = fb2;
    // fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not call setValue onInit when "filter" is not defined', () => {
    // Arrange
    spyOn(fb, 'group').and.returnValue({ setValue: jasmine.createSpy('setValue'),
      valueChanges: { subscribe: () => {} }});
    // Act
    component.ngOnInit();
    // Assert
    expect(component.form.setValue).not.toHaveBeenCalled();
  });

  it('should call setValue onInit when "value" is defined', () => {
    // Arrange
    component.value = getFormValue();
    spyOn(component, 'getForm').and.returnValue({
      setValue: jasmine.createSpy('setValueSpy'),
      valueChanges: new EventEmitter()
    });
    // Act
    component.ngOnInit();
    // Assert
    expect(component.form.setValue).toHaveBeenCalled();
  });

  it('should emit filterChange upon form valueChanges', () => {
    // Arrange
    const mockForm = {
      setValue: jasmine.createSpy('setValueSpy'),
      valueChanges: new EventEmitter()
    };
    spyOn(component, 'getForm').and.returnValue(mockForm);
    spyOn(component, 'onFormValueChange');
    spyOn(component, 'valueChange').and.callFake(() => {});
    // Act
    component.ngOnInit();
    mockForm.valueChanges.emit({ openOrClosedFc: 'Open Conversations' });
    // Assert
    expect(component.onFormValueChange).toHaveBeenCalled();
  });
});

export function getFormValue() {
  return {
    msg: 'Hello World!!'
  };
}
