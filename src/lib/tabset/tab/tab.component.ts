import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  OnInit,
  OnDestroy,
  Optional,
  Output,
  Query,
  QueryList,
  ContentChildren,
  AfterContentInit,
  Input
} from '@angular/core';

import { TabsetComponent } from '../tabset.component';

@Component({
  selector: 'rd-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less'],
})
export class TabComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Output() init = new EventEmitter();
  @Output() destroy = new EventEmitter();

  public active: boolean = false;

  constructor(private tabsetComponent: TabsetComponent) {

  }

  ngOnInit() {
    this.tabsetComponent.addTab(this);
  }

  activate(){
    this.active = true;
    this.init.emit(this);
  }

  deactivate(){
    this.active = false;
    this.destroy.emit(this);
  }

  isActive(){
    return this.active;
  }

  ngOnDestroy(){

  }
}
