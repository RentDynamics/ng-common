import { Component, Directive, ElementRef, HostListener, Input } from '@angular/core';

import { Modal } from './modal';

@Directive({
    selector: '[rd-modal-toggle-button]'
})
export class ModalToggleButton {
    @Input('rd-modal-toggle-button') modal: Modal;

    constructor() {

    }

    @HostListener('click') onClick() {
      if(this.modal)
        this.modal.toggle();
    }
}