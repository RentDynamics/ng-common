import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdAngularFormsModule } from '@rd/forms';
import { RdAngularCompilerModule } from '@rd/compiler';

import { BrowserMobilePreviewComponent } from './browser-mobile-preview.component';
import { RdamlModule } from '../../shared/rdaml';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    RdAngularFormsModule,
    RdAngularCompilerModule,
    RdamlModule,
  ],
  declarations: [
    BrowserMobilePreviewComponent,
  ],
  exports: [
    BrowserMobilePreviewComponent,
    RdAngularFormsModule,
    RdAngularCompilerModule,
    RdamlModule,
  ]
})
export class BrowserMobilePreviewModule { }
