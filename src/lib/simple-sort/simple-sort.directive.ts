import { Directive, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Directive({
  selector: '[rdSimpleSort]'
})
export class SimpleSortDirective implements OnInit {
  @Input() activeSortField: string;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
