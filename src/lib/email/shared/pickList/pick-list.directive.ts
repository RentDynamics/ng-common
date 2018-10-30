import { ContentChildren, Directive, Input, Output, EventEmitter, QueryList } from '@angular/core';

import { PickListItemDirective } from './pick-list-item.directive';

/* responsibility: aggregate all pick list items values and emit them every time any pick list item notifies us that it has changed */

@Directive({
  selector: '[rdPickList]',
  exportAs: 'rdPickList'
})
export class PickListDirective {
  @Input() selected: any[] = [];
  @Output() onSelectedChange = new EventEmitter();
  @ContentChildren(PickListItemDirective) pickList: QueryList<PickListItemDirective>;

  isAllChecked: boolean;

  constructor() { }

  ngAfterContentInit() {
    this.pickList.changes.subscribe((pickListItems: PickListItemDirective[]) => {
      pickListItems.forEach((pickListItem: PickListItemDirective) => {
        pickListItem.checked = this.selected.find((item, val) => item[pickListItem.itemKey] === pickListItem.itemValue[pickListItem.itemKey]);
        pickListItem.onItemPicked.subscribe(() => {
          let selectedItems = this.getSelectedItems();
          this.isAllChecked = selectedItems.length == this.pickList.length;
          this.onSelectedChange.emit(selectedItems);
        });
      });
    })
  }

  checkAll(event: any) {
    if (this.pickList && event && event.target && event.target.checked)
      this.pickList.forEach(item => item.checked = true);
    else
      this.pickList.forEach(item => item.checked = false);

    let selectedItems = this.getSelectedItems();
    this.onSelectedChange.emit(selectedItems);
  }

  getSelectedItems() {
    // return this.pickList.filter(pickListItem => this.selected.indexOf(pickListItem.itemValue[pickListItem.itemKey]) > -1)
    //   .map(item => item.itemValue);
    return this.pickList.filter(pickListItem => pickListItem.checked).map(item => item.itemValue);
  }
}
