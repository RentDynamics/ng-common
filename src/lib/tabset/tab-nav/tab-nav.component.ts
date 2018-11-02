import { Component, Input, OnInit, QueryList, Host, Inject, forwardRef } from '@angular/core';

import { TabsetComponent } from '../tabset.component';

@Component({
  selector: 'rd-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.less'],
})
export class TabNavComponent implements OnInit {

  constructor(public tabset: TabsetComponent) {
    // @Host() @Inject(forwardRef(() => TabsetComponent))

  }

  ngOnInit() {

  }
}
