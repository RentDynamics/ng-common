import {
  AfterContentInit,
  ContentChildren,
  Directive,
  Input,
  Output,
  EventEmitter,
  QueryList
} from '@angular/core';

import { FilterDirective } from './filter.directive';

@Directive({
  selector: '[rdFilterCompiler]'
})
export class FilterCompilerDirective implements AfterContentInit {
  @Input()
  label: string;

  @ContentChildren(FilterDirective)
  filterList: QueryList<FilterDirective> = new QueryList<FilterDirective>();
  @Output()
  updateCompiled = new EventEmitter();

  filterObj: any = {};

  constructor() {}

  ngAfterContentInit() {
    this.filterObj[this.label] = null;
    this.filterList.forEach(filter => {
      filter.updateFilter.subscribe(newVal => {
        this.filterObj[this.label] = newVal;
        this.updateCompiled.emit(this.filterObj);
      });
    });
  }
}
