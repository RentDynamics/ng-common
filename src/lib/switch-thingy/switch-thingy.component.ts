import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-switch-thingy',
  templateUrl: './switch-thingy.component.html',
  styleUrls: ['./switch-thingy.component.scss']
})
export class SwitchThingyComponent implements OnInit {
  @Input() options: string[];
  @Input() disabled: string[] = [];
  @Input() selected: string;
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  isDisabled(option: string): boolean {
    return !!this.disabled.find(x => x === option);
  }

}
