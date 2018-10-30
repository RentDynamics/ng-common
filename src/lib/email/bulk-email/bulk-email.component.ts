import { Component, Inject, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'rd-bulk-email',
  templateUrl: './bulk-email.component.html',
  styleUrls: ['./bulk-email.component.less']
})
export class BulkEmailComponent implements OnInit {
  constructor(
    @Inject('SessionService') public sessionSvc: any,
    @Inject('$state') public $state: any
  ) {}

  ngOnInit() {}
}
