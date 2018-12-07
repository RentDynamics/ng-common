import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-expanding-bulk-email-list-item > rd-show-more-btn',
  templateUrl: './show-more-btn.component.html',
  styleUrls: ['./show-more-btn.component.less']
})
export class ShowMoreBtnComponent implements OnInit {
  @Input() active: boolean = false;
  @Output() showMoreClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onShowMoreClick(newVal: boolean){
    this.active = newVal;
    this.showMoreClick.emit(newVal);
  }

}
