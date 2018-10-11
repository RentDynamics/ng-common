import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'cc-conversation-composer-footer',
  templateUrl: './conversation-composer-footer.component.html',
  styleUrls: ['./conversation-composer-footer.component.scss']
})
export class ConversationComposerFooterComponent implements OnInit {
  @Input() value: { msg: string };
  @Output() valueChange = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.getForm();

    if (this.value) {
      this.form.setValue(this.value);
    }

    this.form.valueChanges.subscribe((newVal) => this.onFormValueChange(newVal));
  }

  getForm() {
    return this.fb.group({
      msg: []
    });
  }

  onFormValueChange(newVal) {
    this.valueChange.emit(newVal);
  }

}
