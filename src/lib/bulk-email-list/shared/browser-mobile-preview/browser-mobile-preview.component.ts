import { Observable, Observer, Subject, Subscription } from 'rxjs';
import {
  ChangeDetectorRef, Component, ComponentRef, OnInit, Output, EventEmitter,
  Inject, Input, RenderComponentType, Renderer, RootRenderer, ViewContainerRef, ViewChild,
  OnChanges, SimpleChange, SimpleChanges
} from '@angular/core';


import {RdamlService} from '../rdaml/rdaml.service';
import { PLATFORM } from '../browser-mobile-preview/platform.enum';

@Component({
  selector: 'rd-browser-mobile-preview',
  templateUrl: './browser-mobile-preview.component.html',
  styleUrls: ['./browser-mobile-preview.component.less']
})
export class BrowserMobilePreviewComponent implements OnInit, OnChanges {
  @Input() html: string;
  @Input() subject: number;
  @Input() communityId?: number;
  @Input() communityGroupId?: number;
  @Input() senderId?: number;
  @Input() personId?: number;
  @Input() parseRdmlOnLoad: boolean = true;

  displayPlatform: number = PLATFORM.MOBILE;
  PLATFORM = PLATFORM;
  previewHtml: string;

  constructor(private rdamlSvc: RdamlService) {
  }

  ngOnInit() {
    this.displayPlatform = PLATFORM.MOBILE;
    this.previewHtml = this.html;
  }

  ngOnChanges(newVal: SimpleChanges) {
    let htmlChange: SimpleChange = newVal['html'];
    if (htmlChange && htmlChange.currentValue && htmlChange.currentValue !== htmlChange.previousValue) {
      if (this.parseRdmlOnLoad)
        return this.parseRdml();
      return this.previewHtml = htmlChange.currentValue;
    }
  }

  preventDefault(event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  onToggleRdml(event) {
    if (!event || !event.target.checked)
      return this.previewHtml = this.html;

    this.parseRdml();
  }

  parseRdml() {
    this.rdamlSvc.parse({
      communityId: this.communityId,
      communityGroupId: this.communityGroupId,
      senderId: this.senderId,
      personId: this.personId
    }, this.html)
      .subscribe(result => {
        this.previewHtml = result.parsed_html;
      }, (err) => {
        console.error(err);
        this.previewHtml = this.html;
      });
  }

  resizeIFrame(event: Event) {
    let iframe = <HTMLFrameElement>event.srcElement;
    iframe.height = iframe.contentWindow.document.body.scrollHeight;
  }

  ngOnDestroy() {

  }
}
