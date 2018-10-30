import { Directive, OnInit, Optional, Input, HostListener } from '@angular/core';
import { NgModel, NgControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { REGEX_MASK } from './regex-mask';

@Directive({
  selector: 'input[rdTextUnmask]'
})
export class TextUnmaskDirective {
  @Input('rdTextUnmask') unmaskType: 'phone' | 'numeric';

  alive: boolean = true;
  unmaskRegex: RegExp;
  readonly REGEX = REGEX_MASK;

  constructor(private model: NgControl) {

  }

  ngOnInit(){
    if(this.unmaskType == 'phone'){
      this.unmaskRegex = /\D+/g;
    }
  }

  @HostListener('input') inputChange() {
    const newValue = this.model.value.replace(this.unmaskRegex, '');
    // Note that you need to pass the 2nd argument with the following values:
    this.model.control.setValue(newValue, {
      emitEvent: true,

      emitModelToViewChange: true,

      emitViewToModelChange: true
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}

