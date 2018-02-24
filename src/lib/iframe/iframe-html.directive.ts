import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnInit, OnDestroy, SecurityContext, SimpleChange, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Directive({
  selector: 'iframe[rdHtml]'
})
export class IframeHtmlDirective implements OnChanges, OnDestroy {
  @Input('rdHtml') html: string;

  private iframe: HTMLIFrameElement;

  constructor(private domSanitizer: DomSanitizer, elementRef: ElementRef) {
    this.iframe = elementRef.nativeElement;
  }

  ngAfterContentInit() {
    if (this.html)
      this.writeHtml(this.html);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['html'] && !changes['html'].isFirstChange() && changes['html'].currentValue && changes['html'].currentValue != changes['html'].previousValue)
      this.writeHtml(changes['html'].currentValue);
  } 

  writeHtml(newVal: string) {
    try {
      let doc = this.iframe.contentWindow.document;
      doc.open();
      doc.write(newVal);
      //doc.write(this.domSanitizer.sanitize(SecurityContext.HTML, newVal));
      doc.close();
    } catch (ex) {
      console.warn(ex);
    }
  }

  ngOnDestroy() {

  }
}
