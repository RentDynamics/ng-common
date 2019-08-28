import { NgModule } from '@angular/core';
import { ExpandingListViewModule } from './expanding-list-view/expanding-list-view.module';
import { TabsetModule } from './tabset/tabset.module';
import { LoadingIndicatorModule } from './loading-indicator/loading-indicator.module';
import { SimpleSortModule } from './simple-sort/simple-sort.module';
import { IFrameModule } from './iframe/iframe.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
    declarations: [
    ],
    imports: [
    ],
    exports: [
        SimpleSortModule,
        IFrameModule,
        LoadingIndicatorModule,
        TabsetModule,
        ExpandingListViewModule,
        PipesModule,
    ],
    providers: [
    ]
})
export class RdAngularCommonModule { }