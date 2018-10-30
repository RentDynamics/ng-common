import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-recipients-filtered-list',
  templateUrl: './recipients-filtered-list.component.html',
  styleUrls: ['./recipients-filtered-list.component.less']
})
export class RecipientsFilteredListComponent implements OnInit {
  @Input() isLoading: boolean;
  @Input() recipientCount: number;
  @Input() recipients: any;
  @Output() showMore: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  showMoreResults() {
    this.showMore.emit(null);
  }

}
