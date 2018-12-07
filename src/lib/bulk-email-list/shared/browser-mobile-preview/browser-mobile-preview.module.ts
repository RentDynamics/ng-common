import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RdAngularFormsModule } from '@rd/forms';

import { IFrameModule } from '../../../iframe/iframe.module';

import { BrowserMobilePreviewComponent } from './browser-mobile-preview.component';
import { RdamlModule } from '../rdaml/rdaml.module';

@NgModule({
  imports: [
    CommonModule,
    RdamlModule,
    FormsModule,
    IFrameModule,
    RdAngularFormsModule
  ],
  declarations: [
    BrowserMobilePreviewComponent,
  ],
  exports: [
    BrowserMobilePreviewComponent,
  ]
})
export class BrowserMobilePreviewModule { }
