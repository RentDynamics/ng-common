import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'rd-email-preview-inline',
  templateUrl: './email-preview-inline.component.html',
  styleUrls: ['./email-preview-inline.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmailPreviewInlineComponent implements OnInit {
  @Input() displayHtml: any;
  @Output() hidden: EventEmitter<any> = new EventEmitter<any>();

  public get html(): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(this.displayHtml);
  }
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
}
