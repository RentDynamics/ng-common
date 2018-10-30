import {
  AfterContentInit,
  ContentChildren,
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  QueryList
} from '@angular/core';

import { equals } from '@rd/core';

@Directive({
  selector: '[rdCheckboxGroupOption]'
})
export class CheckboxGroupOptionDirective {
  @Output()
  selectionChanged = new EventEmitter();
  @Input()
  @HostBinding('checked')
  checked: boolean = false;
  @Input()
  @HostBinding('value')
  value: any;
  @HostListener('change', ['$event'])
  onChange($event) {
    if (
      typeof $event.target !== 'undefined' &&
      typeof $event.target.value !== 'undefined'
    ) {
      this.selectionChanged.emit($event.target.value);
    }
  }

  constructor() {}
}

@Directive({
  selector: '[rdCheckboxGroup]'
})
export class CheckboxGroupDirective implements AfterContentInit {
  @Input()
  multiple: boolean = true;
  @ContentChildren(CheckboxGroupOptionDirective)
  checkboxList: QueryList<CheckboxGroupOptionDirective> = new QueryList<
    CheckboxGroupOptionDirective
  >();
  @Output()
  update = new EventEmitter();
  @Input()
  values: any;

  selected: any[] = [];

  constructor() {}

  ngAfterContentInit() {
    let valueArray = [];
    if (this.values) {
      if (!Array.isArray(this.values)) {
        valueArray = this.values.split(',');
        this.selected = valueArray;
      } else {
        valueArray = this.values;
        this.selected = this.values;
      }
    }

    this.checkboxList.forEach((checkbox: CheckboxGroupOptionDirective) => {
      if (valueArray) {
        let valueIndex = valueArray.findIndex(value =>
          equals(value, checkbox.value.toString())
        );
        checkbox.checked = valueIndex != -1;
      }
      checkbox.selectionChanged.subscribe(newVal => {
        if (!this.multiple) {
          if (this.selected == newVal) this.selected = [];
          else this.selected = newVal;
          this.update.emit(this.selected);
        } else {
          let index = this.selected.findIndex(value => equals(value, newVal));
          if (index == -1) {
            this.selected.push(newVal);
          } else {
            this.selected.splice(index, 1);
          }

          if (this.selected.length === 0) this.selected = [];

          this.update.emit(this.selected);
        }
      });
    });
  }
}
