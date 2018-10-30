import {
  AfterContentInit,
  ContentChildren,
  Directive,
  EventEmitter,
  Output,
  QueryList
} from '@angular/core';
import { Observable } from 'rxjs';

import { FilterCompilerDirective } from './shared/filter-compiler.directive';

@Directive({
  selector: '[rdFilterGroup]'
})
export class FilterGroupDirective implements AfterContentInit {
  @ContentChildren(FilterCompilerDirective)
  filterCompilerList: QueryList<FilterCompilerDirective> = new QueryList<FilterCompilerDirective>();
  @Output()
  update: EventEmitter<any> = new EventEmitter<any>();

  filters: any = {};

  constructor() {}

  ngAfterContentInit() {
    this.filterCompilerList.forEach(filterCompiler => {
      filterCompiler.updateCompiled.subscribe(newValue => {
        let keys = Object.keys(newValue);
        keys.forEach(key => {
          if (newValue[key]) {
            this.filters[key] = newValue[key];
          } else {
            delete this.filters[key];
          }
        });

        this.update.emit(this.filters);
      });
    });
  }
}
