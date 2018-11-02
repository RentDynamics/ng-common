import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  OnInit,
  Input,
  Inject,
  Output,
  EventEmitter,
  NgZone,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { CompiledResultModel, TemplateCompiler } from '@rd/compiler';

import { Recipient } from '../recipients/shared/recipient';
import { Message } from '../message/shared/message';

@Component({
  selector: 'rd-bulk-email-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.less']
})
export class ReviewComponent implements OnInit {
  @Input() sampleRecipient: Recipient;
  @Input() recipientCount: number;
  @Input() message: Message;
  @Output() onInit = new EventEmitter<string>();
  @Output() onCompile = new EventEmitter<string>();
  @ViewChild('dynamicContentPlaceholder', { read: ViewContainerRef })
  dynamicContentPlaceholder: ViewContainerRef;
  @ViewChild('iframe', { read: ViewContainerRef })
  iframeViewContainer: ViewContainerRef;

  compiledHtml: string;

  get communityId(): number {
    return this.sampleRecipient.communityId;
  }

  get personId(): number {
    return this.sampleRecipient.personId;
  }

  get senderId(): number {
    return this.sessionSvc.getSelectedAgentID();
  }

  constructor(
    private applicationRef: ApplicationRef,
    private changeDetectorRef: ChangeDetectorRef,
    private ngZone: NgZone,
    @Inject('SessionService') private sessionSvc: any,
    private templateCompiler: TemplateCompiler
  ) {}

  ngOnInit() {
    console.log('this.message', this.message);

    this.onInit.emit(null);

    this.templateCompiler.compile('assets/templates/bulk-logo-inline.html', this.message, this.dynamicContentPlaceholder,
        ['SharedModule']).subscribe((compiledResult: CompiledResultModel) => {
          console.log([compiledResult, $(compiledResult.outerHTML)]);
          this.compiledHtml = compiledResult.styles + compiledResult.outerHTML;
          // $(compiledResult.outerHTML).find('head').append(compiledResult.styles).html();
          this.onCompile.emit(compiledResult.styles + compiledResult.outerHTML);
        },
        err => {
          console.error(err);
        }
      );
  }
}
