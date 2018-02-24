import { Component, ElementRef, HostListener, Input } from '@angular/core';

import { SimpleSortDirective } from '../simple-sort.directive';

@Component({
  selector: '[rd-simple-sort-field]',
  templateUrl: './simple-sort-field.component.html',
  styleUrls: ['./simple-sort-field.component.less'],
})

export class SimpleSortFieldComponent {
  @Input('rd-simple-sort-field') sortField: string;

  private elem: HTMLElement;
  private get reverseSortField (){
    return `-${this.sortField}`;
  }

  constructor(elementRef: ElementRef, private simpleSort: SimpleSortDirective) {
    this.elem = elementRef.nativeElement;
  }

  @HostListener('click') hostClick(){
    if(this.simpleSort.activeSortField === this.sortField)
      return this.simpleSort.change.emit(this.reverseSortField);

    return this.simpleSort.change.emit(this.sortField);
  }
}
