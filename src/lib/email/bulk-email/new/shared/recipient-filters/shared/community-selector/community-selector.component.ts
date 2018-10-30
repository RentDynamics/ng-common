import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import { CoreApiService, equals } from '@rd/core';

@Component({
  selector: 'rd-community-selector',
  templateUrl: './community-selector.component.html',
  styleUrls: ['./community-selector.component.less']
})
export class CommunitySelectorComponent implements OnInit, AfterViewInit {
  @Input()
  communityParentType: string;
  @Input()
  communityParentId: number = null;
  @Input()
  multiple: boolean;
  @Input()
  value: any = null;
  @Output()
  update: any = new EventEmitter();

  communitySelectorItems: any;
  disabled: boolean = true;

  constructor(private coreApiSvc: CoreApiService) {}

  ngOnInit() {
    if (!this.value) {
      if (this.multiple) this.value = [-1];
      else this.value = -1;
    }

    if (this.communityParentType && this.communityParentId) {
      this.coreApiSvc
        .get(
          '/' +
            this.communityParentType +
            's/' +
            this.communityParentId +
            '?include=communities'
        )
        .subscribe(result => {
          this.communitySelectorItems = result.communities;
          if (this.communitySelectorItems && this.communitySelectorItems.length)
            this.disabled = this.communitySelectorItems.length < 2;

          let comparison = this.value;

          if (Array.isArray(this.value)) {
            comparison = this.value[0];
          }

          if (comparison && comparison === -1) {
            if (this.multiple) {
              this.value = [];
              for (let i = 0; i < this.communitySelectorItems.length; i++) {
                this.value.push(this.communitySelectorItems[i].id);
              }
            } else {
              this.value = this.communitySelectorItems[0].id;
            }
          }
          this.update.emit(this.value);
        });
    }
  }

  ngAfterViewInit() {
    this.update.emit(this.value);
  }

  getDefaultTitle() {
    if (this.multiple) {
      return 'Select Communities';
    }
    return 'Select Community';
  }

  onChange($event) {
    if (this.multiple) {
      if (this.value.length < 1) {
        this.value = [this.communitySelectorItems[0].id];
      }
    }

    this.update.emit(this.value);
  }
}
