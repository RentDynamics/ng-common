import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import * as moment from 'moment';

import { DATE_TYPE_ENUM } from '@rd/forms';

@Component({
  selector: 'rd-contact-range-filter',
  templateUrl: './contact-range-filter.component.html',
  styleUrls: ['./contact-range-filter.component.less']
})
export class ContactRangeFilterComponent implements OnInit, AfterViewInit {
  @Output()
  update = new EventEmitter();
  @Input()
  value: any;

  numDaysPrevious: number = 30;
  currentDate: moment.Moment;
  daysPreviousDate: string;

  constructor() {}

  ngOnInit() {
    if (this.value) {
      let valueMoment = moment(this.value, 'MM/DD/YY');
      this.currentDate = moment();

      this.numDaysPrevious = this.currentDate.diff(valueMoment, 'days');
    }
  }

  ngAfterViewInit() {
    this.daysPreviousChange(this.numDaysPrevious);
  }

  daysPreviousChange($event) {
    let newVal = $event;
    if ($event && $event.target) {
      newVal = $event.target.value;
    }
    this.numDaysPrevious = newVal;
    this.currentDate = moment();
    this.currentDate = this.currentDate.subtract(newVal, 'days');
    this.daysPreviousDate = this.currentDate.format('MM/DD/YY');

    this.update.emit(this.daysPreviousDate);
  }
}
