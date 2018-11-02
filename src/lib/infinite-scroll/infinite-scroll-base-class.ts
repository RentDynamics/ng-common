import { map, throttleTime, scan } from 'rxjs/operators';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

export class InfiniteScrollBaseClass {
  startPage: number = 1;
  page$: BehaviorSubject<number>;
  pageSize: number = 10;
  currentPage$: Observable<number>;
  disableNext$: Observable<boolean>;
  disablePrevious$: Observable<boolean>;
  throttleTime: number = 250;
  totalCount: number = null;

  get maxPage(): number {
    return this.totalCount / this.pageSize;
  }

  constructor() {
    this.page$ = new BehaviorSubject(this.startPage);
    this.currentPage$ = this.page$.pipe(throttleTime(this.throttleTime), scan((currentPage, increment) => {
        if (!increment) {
          return 1;
        } else {
          return currentPage + increment;
        }
      }, 0)
    );
    this.disableNext$ = this.currentPage$.pipe(
      map(page => page >= this.maxPage)
    );
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
