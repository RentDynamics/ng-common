import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  OnChanges,
  SimpleChanges,
  HostListener
} from '@angular/core';

@Component({
  selector: 'rd-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent implements OnChanges {
  @Input() title: string;
  @Output() close: EventEmitter<any> = new EventEmitter;
  @Input() modalOpen: boolean;
  @HostListener('window:keyup', ['$event']) onInputKeyup(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  }

  constructor(private renderer: Renderer2) { }

  ngOnChanges(newVal: SimpleChanges) {
    // This adds a class to body to prevent scrolling in the background while the modal is open
    if (newVal['modalOpen'] && newVal['modalOpen'].currentValue === true) {
      this.renderer.addClass(document.body, 'modalOpen');
    }
  }

  closeModal() {
    this.modalOpen = false;
    this.close.emit(true);

    // This removes the scroll-preventing class from the body
    this.renderer.removeClass(document.body, 'modalOpen');
  }
}
