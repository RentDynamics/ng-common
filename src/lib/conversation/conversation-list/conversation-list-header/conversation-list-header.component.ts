import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'cc-conversation-list-header',
  templateUrl: './conversation-list-header.component.html',
  styleUrls: ['./conversation-list-header.component.scss']
})
export class ConversationListHeaderComponent implements OnInit {
  @Input() filter;
  @Input() listName: string;
  @Output() filterChange = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.getForm();

    if (this.filter) {
      this.form.setValue(this.filter);
    }

    this.form.valueChanges.subscribe((newVal) => this.onFormValueChange(newVal));
  }

  getForm() {
    return this.fb.group({
      openOrClosedFc: []
    });
  }

  onFormValueChange(newVal) {
    this.filterChange.emit(newVal);
  }

}
