import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-expanding-list-item',
  templateUrl: './expanding-list-item.component.html',
  styleUrls: ['./expanding-list-item.component.less']
})
export class ExpandingListItemComponent implements OnInit {
  @Input() open: boolean = false;
  @Input() backgroundColor: string = '#d9534f';
  @Input() foregroundColor: string = '#fff';
  @Input() rdInnerClass: any;
  @Input() ngClass: any;
  @Output() toggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onOpenClick(newVal: boolean){
    this.toggle.emit(newVal);
  }
}
