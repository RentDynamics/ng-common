import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsService } from './shared/tabs.service';
import { TabComponent } from './tab/tab.component';
import { TabNavComponent } from './tab-nav/tab-nav.component';
import { TabsetComponent } from './tabset.component';

@NgModule({
    declarations: [
        TabComponent,
        TabNavComponent,
        TabsetComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        TabComponent,
        TabNavComponent,
        TabsetComponent
    ],
    providers: [
        TabsService
    ]
})
export class TabsetModule { }
