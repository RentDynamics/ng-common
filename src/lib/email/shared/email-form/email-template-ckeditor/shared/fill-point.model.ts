
export class FillPoint {
    category: {
      dropDownLabel: string,
      fillPointLabel: string,
      id: number,
      sortOrder: number
    };
    categoryId: number;
    dataResource: string;
    dropDownLabel: string;
    fillPointLabel: string;
    formatTypeId: number;
    id: number;
    sortOrder: number;

    get fillPointValue() {
        return '%[' + this.category.fillPointLabel + '-' + this.fillPointLabel + ']';
    }

    constructor(fillPoint) {
        for (let prop in fillPoint) {
            this[prop] = fillPoint[prop];
        }
    }

}

// %[Recipient-FirstName]
