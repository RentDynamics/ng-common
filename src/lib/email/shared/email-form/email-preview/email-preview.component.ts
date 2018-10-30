import {Input, Component, OnInit, Inject, SimpleChange, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'rd-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.less']
})
export class EmailPreviewComponent implements OnInit {
  @Input()
  modal: boolean = false;
  @Input()
  inline: boolean = false;
  @Input()
  emailTemplateId: number;
  @Input()
  displayHtml: string;
  @Input()
  disabled: boolean = false;
  @Input()
  showEmailPreview: boolean = false;
  @Input()
  previewButtonVisible: boolean = true;
  @Output()
  hidden: EventEmitter<boolean> = new EventEmitter<boolean>();

  // previewButtonVisible: boolean = true;
  // showEmailPreview: boolean = false;

  constructor(@Inject('EmailTemplateService') public emailTemplateSvc: any) {}

  ngOnInit() {
    if (this.emailTemplateId) {
      this.fetchTemplate();
    }
  }

  ngOnChanges(newVal: SimpleChanges) {
    let templateChange: SimpleChange = newVal['emailTemplateId'];

    if (
      templateChange &&
      templateChange.currentValue != templateChange.previousValue
    ) {
      this.fetchTemplate();
    }
  }

  preview() {
    this.showEmailPreview = true;
  }

  onHidden() {
    this.showEmailPreview = false;
    this.hidden.emit(true);
  }

  fetchTemplate() {
    this.emailTemplateSvc
      .renderEmailTemplateToString(this.emailTemplateId, null)
      .then(result => {
        this.displayHtml = result;
      });
  }
}
