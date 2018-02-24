import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IframeHtmlDirective } from './iframe-html.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        IframeHtmlDirective
    ],
    exports: [
        IframeHtmlDirective
    ],
    providers: []
})
export class IFrameModule { }