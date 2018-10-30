import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-button-option',
  templateUrl: './button-option.component.html',
  styleUrls: ['./button-option.component.less']
})
export class ButtonOptionComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() disabled: boolean = false;
  @Input() style: any;
  
  constructor() { }

  ngOnInit() {
    if(typeof this.style === 'undefined'){
      this.style = 'btn-primary';
    }
  }
}
