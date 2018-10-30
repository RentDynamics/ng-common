import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdamlService } from './rdaml.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    RdamlService
  ]
})
export class RdamlModule { }
