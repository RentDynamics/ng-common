import { Component, Directive, ElementRef, HostListener, Input } from '@angular/core';

import { Modal } from './modal';

@Directive({
    selector: '[rd-modal-hide-button]'
})
export class ModalHideButton {
    @Input('rd-modal-hide-button') modal: Modal;

    constructor() {

    }

    @HostListener('click') onClick() {
      if(this.modal)
        this.modal.hide();
    }
}