import { Component, Input, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'rd-expanding-list-view',
  templateUrl: './expanding-list-view.component.html',
  styleUrls: ['./expanding-list-view.component.less'],
})
export class ExpandingListViewComponent implements OnInit {
  @HostBinding('class.active') @Input() open: boolean = false;
  @Output() toggle = new EventEmitter<boolean>();
  @HostBinding('style.display') display: string = 'block';

  constructor() {}

  ngOnInit() {
  }

  onClick(newVal: boolean){
    this.toggle.emit(newVal);
  }

}
