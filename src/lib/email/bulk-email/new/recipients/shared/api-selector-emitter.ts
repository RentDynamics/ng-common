import { Component, EventEmitter } from '@angular/core';

import { CoreApiSelector } from '@rd/core';

export interface ApiSelectorEmitter extends Component {
    onApiSelectorChange: EventEmitter<CoreApiSelector>;
    getSelector(): CoreApiSelector;
}
