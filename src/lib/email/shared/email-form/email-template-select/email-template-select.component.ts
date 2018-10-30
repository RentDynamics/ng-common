import { Component, Input, Output, OnInit, Inject, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';

import { CoreApiService } from '@rd/core';

@Component({
  selector: 'rd-email-template-select',
  templateUrl: './email-template-select.component.html',
  styleUrls: ['./email-template-select.component.less']
})
export class EmailTemplateSelectComponent implements OnInit {
  @Input() communityId: number;
  @Input() templateId: number;
  @Input() disabled: boolean = false;

  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  templates: any[] = [];
  defaultTitle: string = 'None';
  selectedTemplate: any;
  constructor(public coreApiSvc: CoreApiService, @Inject('SessionService') public sessionSvc: any) { }

  ngOnInit() {
    if(!this.communityId){
      this.communityId = this.sessionSvc.getSelectedCommunityID();
    }
    this.fetchTemplates();
  }

  ngOnChanges(newVal: SimpleChanges){
    let communityChange: SimpleChange = newVal['communityId'];
    if(communityChange && communityChange.currentValue != communityChange.previousValue){
      this.fetchTemplates();
    }
  }

  fetchTemplates(){
    this.coreApiSvc.get(`/communities/${this.communityId}/emailTemplates`).subscribe(result => {
      let sortedResults = result.sort(this.compare);
      if (sortedResults.length > 0) {
        this.templates = [];
        this.templates.push({id: null, name: 'None'});
        this.templates = this.templates.concat(sortedResults);
      } else {
	    this.disabled = true;
	  }

      this.setTitle();
	  });
  }

  onTemplateChange(event){
    this.change.emit(event);
    if (event == null) {
      this.defaultTitle = 'None';
    }
  }

  setTitle() {
    if (this.templateId) {
      let templates = this.templates.filter(t => t.id == this.templateId);
      if (templates && templates.length > 0) {
        this.defaultTitle = templates[0].name;
      }
    }
  }

  compare(a, b) {
      if (a.name < b.name)
          return -1;
      if (a.name > b.name)
          return 1;
      return 0;
  }
}
