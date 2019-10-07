import { Component, OnInit, ViewEncapsulation, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-switch-thingy',
  templateUrl: './switch-thingy.component.html',
  styleUrls: ['./switch-thingy.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwitchThingyComponent implements OnInit {
  // @HostBinding('class.switch-option-container') hostClass = true;
  @Input() options: string[];
  @Input() selected: string;
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
