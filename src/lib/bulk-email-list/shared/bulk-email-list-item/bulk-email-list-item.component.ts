import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'rd-bulk-email-list-item',
  templateUrl: './bulk-email-list-item.component.html',
  styleUrls: ['./bulk-email-list-item.component.less']
})
export class BulkEmailListItemComponent implements OnInit {
  @Input() message: any;

  constructor() { }

  ngOnInit() {
  }

}
