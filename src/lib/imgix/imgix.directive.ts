import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[rdImgix]',
  exportAs: 'rdImgix'
})
export class ImgixDirective {
  @Input() height: number;
  @Input() width: number;

  constructor() { }

  get url(){
    return ''
  }

}
