import { Input, Component, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'rd-email-preview-modal',
  templateUrl: './email-preview-modal.component.html',
  styleUrls: ['./email-preview-modal.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmailPreviewModalComponent implements OnInit {
  @Input() displayHtml: any;
  public get html(): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(this.displayHtml);
  }
  @Output() hidden: EventEmitter<boolean> = new EventEmitter<boolean>();

  private modalOptions: ModalOptions = {
    show: true
  };
  
  constructor(private _sanitizer: DomSanitizer) { }
  
  ngOnInit() {
  }

  onHidden($event){
    this.hidden.emit(true);
  }
}
