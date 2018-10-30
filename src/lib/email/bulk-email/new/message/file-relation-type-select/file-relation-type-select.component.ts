import { Component, EventEmitter, Input, Inject, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rd-file-relation-type-select',
  templateUrl: './file-relation-type-select.component.html',
  styleUrls: ['./file-relation-type-select.component.less']
})
export class FileRelationTypeSelectComponent implements OnInit {
  @Input() fileRelationType: any;
  @Input() client: any;
  @Input() communityGroup: any;
  @Input() communities: any[];
  @Output() change = new EventEmitter<any>();

  constructor( @Inject('SessionService') public sessionSvc: any) { }

  ngOnInit() {
    this.client = this.sessionSvc.getSelectedClient();
  }

  setNgModel(fileRelationType: any) {
    this.change.emit(fileRelationType);
  }

}
