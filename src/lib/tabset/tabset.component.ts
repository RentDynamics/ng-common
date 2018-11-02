import { AfterContentInit, Component, EventEmitter, OnInit, OnDestroy, Output, Query, QueryList, ContentChildren } from '@angular/core';

import { TabComponent } from './tab';

@Component({
    selector: 'rd-tabset',
    templateUrl: './tabset.component.html',
    styleUrls: ['./tabset.component.less'],
})
export class TabsetComponent implements OnInit {
    @Output() selected = new EventEmitter();

    public tabs: TabComponent[] = [];

    constructor() {

    }

    ngOnInit() {

    }

    addTab(tab: TabComponent) {
        if (!this.tabs.length) {
            tab.activate();
        }
        this.tabs.push(tab);
    }

    selectTab(tab: TabComponent) {
        this.tabs.map((tab) => {
            tab.deactivate();
        });
        tab.activate();
        this.selected.emit(tab);
    }
}
