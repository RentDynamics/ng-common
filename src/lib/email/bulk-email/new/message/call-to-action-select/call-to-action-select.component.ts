import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Observable } from 'rxjs';

import { CoreApiService } from '@rd/core';
import { OptionDirective } from '@rd/forms';

import { CallToActionService } from './shared/call-to-action.service';

@Component({
  selector: 'rd-call-to-action-select',
  templateUrl: './call-to-action-select.component.html',
  styleUrls: ['./call-to-action-select.component.less']
})
export class CallToActionSelectComponent implements OnInit {
  @Input() communityGroupId: number;
  @Input() communityId: number;
  @Input() open: boolean = false;
  @Input() value: { title: string; value: string } = null;
  @Output() change = new EventEmitter<{ title: string; value: string }>();
  @Output() communityIdChange = new EventEmitter<number>();

  communityGroup: any;

  constructor(private callToActionSvc: CallToActionService, private coreApiSvc: CoreApiService) {}

  ngOnInit() {
    if (this.communityGroupId) {
      this.callToActionSvc.getCommunityGroup(this.communityGroupId).subscribe((result: any) => {
          this.communityGroup = result;
          /* set initial community in communityGroup as selected if no communityId exists */
          if (!this.communityId && this.communityGroup && this.communityGroup.communities && this.communityGroup.communities.length ) {
            this.onCommunityIdChange(this.communityGroup.communities[0].id.toString());
          }
        });
      }
  }

  onCallToActionChange(event) {
    this.value = event;
    this.change.emit(event);
  }

  onCommunityIdChange(newVal: string) {
    this.communityId = +newVal;
    this.communityIdChange.emit(+newVal);
  }

  toggleOpen() {
    this.open = !this.open;
  }
}
