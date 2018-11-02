import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipient, RecipientResult } from '../recipient';

@Component({
    selector: 'rd-recipients-pick-list',
    templateUrl: './recipients-pick-list.component.html',
    styleUrls: ['./recipients-pick-list.component.less']
})
export class RecipientsPickListComponent implements OnInit {
    @Input() isLoading: boolean;
    @Input() recipients: Recipient[] = [];
    @Input() selectedRecipients?: Recipient[] = [];
    @Output() orderByChange = new EventEmitter<string>();
    @Output() onSelectedRecipientsChange = new EventEmitter<Recipient[]>();

    orderByField: string = 'unit_number';

    constructor() { }

    ngOnInit() {
        // this.onSelectedRecipientsChange(this.recipients.map());
        // invoke here to reset recipient count globally
        this.bindInitialValue();
    }

    bindInitialValue() {
        if (!this.selectedRecipients || !this.selectedRecipients.length)
            return this.onSelectedPickListChange([]);
        return this.onSelectedPickListChange(this.selectedRecipients);
    }

    orderBy(fieldName) {
        this.orderByField = fieldName;
        this.orderByChange.emit(fieldName);
    }

    onSelectedPickListChange(selectedItems: Recipient[]) {
        this.selectedRecipients = selectedItems;
        this.onSelectedRecipientsChange.emit(selectedItems);
    }

    trackByPersonId(index, item) {
        return item ? item.personId : undefined;
    }
}
