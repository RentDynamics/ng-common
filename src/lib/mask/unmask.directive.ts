import { Directive, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[rdUnmask]'
})
export class UnmaskDirective implements OnInit {
  @Input('rdUnmask') unmaskRegex?: RegExp;
  @Input() maskType?: string;

  constructor(private ngModel?: NgModel) {

  }

  ngOnInit() {
    if (this.ngModel)
      this.ngModel.valueChanges.subscribe(val => {
        if (val) {
          if (this.maskType === "phone") {
            this.ngModel.viewToModelUpdate(val.replace(/\D+/g, ''));
          } else if (this.maskType === "price") {
            this.ngModel.viewToModelUpdate(val.replace(/[$\,]/, ''));
          } else if (this.unmaskRegex) {
            this.ngModel.viewToModelUpdate(val.replace(this.unmaskRegex, ''));
          }
        }
      });
  }
}
