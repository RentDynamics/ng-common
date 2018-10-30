import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';

import * as moment from 'moment';

import { DATE_TYPE_ENUM } from '@rd/forms';

@Component({
  selector: 'rd-date-range-filter',
  templateUrl: './date-range-filter.component.html',
  styleUrls: ['./date-range-filter.component.less']
})
export class DateRangeFilterComponent implements OnInit, OnChanges {
  @Input()
  rangeStart: any = null;
  @Input()
  rangeEnd: any = null;
  @Output()
  update = new EventEmitter();

  DATE_TYPE_ENUM = DATE_TYPE_ENUM;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {}

  ngOnChanges(newVal: SimpleChanges) {
    let rangeStartChange: SimpleChange = newVal['rangeStart'];
    if (
      rangeStartChange &&
      rangeStartChange.currentValue &&
      rangeStartChange.currentValue != rangeStartChange.previousValue
    ) {
      this.rangeStart = moment(rangeStartChange.currentValue, 'MM/DD/YY');
    }

    let rangeEndChange = newVal['rangeEnd'];
    if (
      rangeEndChange &&
      rangeEndChange.currentValue &&
      rangeEndChange.currentValue != rangeEndChange.previousValue
    ) {
      this.rangeEnd = moment(rangeEndChange.currentValue, 'MM/DD/YY');
    }
  }

  clear() {
    this.rangeStart = null;
    this.rangeEnd = null;
    this.updateFilter(null);
    this.changeDetectorRef.detectChanges();
  }

  updateFilter(newVal) {
    let range = {};
    if (this.rangeStart) {
      range['gte'] = this.rangeStart.format('MM/DD/YY');
    }

    if (this.rangeEnd) {
      range['lt'] = this.rangeEnd.format('MM/DD/YY');
    }

    if (Object.keys(range).length === 0) range = null;

    console.log(range);
    this.update.emit(range);
  }
}
