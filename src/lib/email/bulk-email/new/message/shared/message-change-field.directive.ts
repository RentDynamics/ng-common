import { Directive, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[rdMessageChangeField]'
})
export class MessageChangeFieldDirective {
  @Input() key: string;
  @Output() updateField = new EventEmitter();
  @HostListener('change', ['$event']) change($event) {
    if (!this.key) {
      throw Error('Please provide a valid key ro MessageChangeFieldDirective');
    }
    if (typeof $event === 'undefined') {
      $event = null;
    }
    if ($event !== null && typeof $event.target !== 'undefined') {
      $event = $event.target.value;
    }

    const emitValue = {};
    emitValue[this.key] = $event;
    this.updateField.emit(emitValue);
  }
  @HostListener('keyup', ['$event']) keyup($event) {
    if (!this.key) {
      throw Error('Please provide a valid key ro MessageChangeFieldDirective');
    }
    if (typeof $event === 'undefined') {
      $event = null;
    }
    if ($event !== null && typeof $event.target !== 'undefined') {
      $event = $event.target.value;
    }

    const emitValue = {};
    emitValue[this.key] = $event;
    this.updateField.emit(emitValue);
  }
  constructor() { }

}
