import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgixService } from './imgix.service';
import { ImgixDirective } from './imgix.directive';
import { ImageUrlUtilityService } from './image-url-utility.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImgixDirective
  ],
  exports: [
    ImgixDirective
  ],
  providers: [
    ImgixService,
    ImageUrlUtilityService
  ]
})
export class ImgixModule {}
