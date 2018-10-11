
import {map, throttleTime, scan} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

@Injectable()
export class InfiniteScrollService {
  startPage: number = 1;
  page$: BehaviorSubject<number>;
  pageSize: number = 10;
  currentPage$: Observable<number>;
  disableNext$: Observable<boolean>;
  disablePrevious$: Observable<boolean>;
  throttleTime: number = 250;
  totalCount: number = 1000;

  get maxPage(): number {
    return (this.totalCount / this.pageSize)
  };

  constructor() {
    this.page$ = new BehaviorSubject(this.startPage);
    this.currentPage$ = this.page$.pipe(throttleTime(this.throttleTime),scan((currentPage, increment) => {
      if (!increment)
        return 1;
      return currentPage + increment
    }, 0),);
    this.disableNext$ = this.currentPage$.pipe(map(page => page >= this.maxPage));
    this.disablePrevious$ = this.currentPage$.pipe(map(page => page === 1));
  }

  nextPage() {
    this.page$.next(1);
  }

  previousPage() {
    this.page$.next(-1);
  }

  reset() {
    this.page$.next(null);
  }

}
