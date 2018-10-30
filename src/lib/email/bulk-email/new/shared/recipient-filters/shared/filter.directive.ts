import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[rdFilter]'
})
export class FilterDirective {
  @Output()
  updateFilter = new EventEmitter();
  @HostListener('update', ['$event'])
  update($event) {
    this.updateFilter.emit($event);
  }

  constructor() {}
}
