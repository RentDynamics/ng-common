import {
  Directive, Input, OnInit, Output, EventEmitter,
  HostBinding, HostListener
} from '@angular/core';

@Directive({
  selector: '[rdExpandingListItem]',
  exportAs: 'rdExpandingListItem'
})
export class ExpandingListItemDirective {
  @Input() open: boolean = false;
  @Input() backgroundColor: string = '#d9534f';
  @Input() foregroundColor: string = '#fff';
  @Output() openClick = new EventEmitter<boolean>();
  @HostListener('click', ['$event']) click(newVal) {
    this.onHostClick(!this.open);
  }

  constructor() { }

  onHostClick(newVal: boolean) {
    this.openClick.emit(newVal);
  }
}
