import { AfterViewInit, Component, EventEmitter, OnInit, Input, Output, ViewChild } from '@angular/core';

import { Modal } from '../shared';
import { ModalComponent } from '../modal.component';

@Component({
  selector: 'rd-bootstrap-modal',
  templateUrl: './bootstrap-modal.component.html',
  styleUrls: ['./bootstrap-modal.component.less'],
})
export class BootstrapModalComponent implements OnInit, Modal {
  @Input() options: any = {};
  @Output() shown: EventEmitter<any> = new EventEmitter<any>();
  @Output() hidden: EventEmitter<any> = new EventEmitter<any>();
  @Output() loaded: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor() { }

  ngOnInit() {

  }

  show() {
    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }

  toggle() {
    this.modal.toggle();
  }

  onShown($event) {
    this.shown.emit($event);
  }
  onHidden($event) {
    this.hidden.emit($event);
  }
  onLoaded($event) {
    this.loaded.emit($event);
  }

}
