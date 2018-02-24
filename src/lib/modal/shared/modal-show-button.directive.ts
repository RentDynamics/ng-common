import { Component, Directive, ElementRef, HostListener, Input } from '@angular/core';

import { Modal } from './modal';

@Directive({
    selector: '[rd-modal-show-button]'
})
export class ModalShowButton {
    @Input('rd-modal-show-button') modal: Modal;

    constructor() {

    }

    @HostListener('click') onClick() {
      if(this.modal)
        this.modal.show();
    }
}