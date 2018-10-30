import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit
} from '@angular/core';

@Component({
  selector: 'rd-static-filter',
  templateUrl: './static-filter.component.html',
  styleUrls: ['./static-filter.component.less']
})
export class StaticFilterComponent implements OnInit, AfterViewInit {
  @Input()
  value: string;
  @Output()
  update = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.update.emit(this.value);
  }
}
