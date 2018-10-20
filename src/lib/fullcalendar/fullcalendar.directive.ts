import {
  AfterViewInit, Directive, ElementRef, Input, Output, OnChanges, OnDestroy, EventEmitter, SimpleChange, SimpleChanges,
  NgZone
} from '@angular/core';
import * as moment from 'moment';

import { extend, equals } from '@rd/core';
import 'fullcalendar';

@Directive({
  selector: '[rdFullcalendar]',
  exportAs: 'rdFullCalendar'
})
export class FullcalendarDirective implements AfterViewInit, OnChanges, OnDestroy {
  @Input() options: any = {};
  @Output() dayClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventClick: EventEmitter<any> = new EventEmitter<any>();

  private elem: HTMLElement;
  public calendar: any;

  /* https://github.com/nazar-pc/PickMeUp */
  constructor(elementRef: ElementRef, private ngZone: NgZone) {
    this.elem = elementRef.nativeElement;
  }

  ngAfterViewInit() {
    /* if not run in ngZone, it won't be aware of our changes whereas we are
    invoking a jquery plugin outside of angular--we don't have to
    but we gain a significant performance advantage when we do run
    the plugin outside of angular--performance resulting from way less
    change detection loops. we might also abstract this ngZone logic out
    to a similar implementation but within the directive itself so that each
    invoker doesn't have to worry about it */
    //    this.ngZone.runOutsideAngular(this.initFullCalendar.bind(this));
    /* store calendar view model for later */
    //    this.calendar = $(this.elem).data('fullCalendar');
    //    console.log('this.calendar', this.calendar);
  }

  ngOnChanges(newVal: SimpleChanges) {
    let optionsChange: SimpleChange = newVal['options'];
    if (optionsChange && optionsChange.currentValue) {
      this.calendar = this.ngZone.runOutsideAngular(this.initFullCalendar.bind(this));
      console.log('this.calendar', this.calendar);
    }
  }

  initFullCalendar() {
    $(this.elem).fullCalendar('destroy');
    let self = this;
    $(this.elem).fullCalendar(extend({
      eventClick: function (e) { self.ngZone.run(() => { self.eventClick.emit(e); }); },
      dayClick: function (e) { self.ngZone.run(() => { self.dayClick.emit(e); }); }
    }, this.options));
    return $(this.elem).data('fullCalendar');
  }

  refetchEvents() {
    $(this.elem).fullCalendar('refetchEvents');
  }

  ngOnDestroy() {
    if (this.elem && window['jQuery'] && $(this.elem) && $(this.elem).fullCalendar) {
      try {
        $(this.elem).fullCalendar('destroy');
      } catch (err) {
        console.log(err);
      }
    }
  }
}
