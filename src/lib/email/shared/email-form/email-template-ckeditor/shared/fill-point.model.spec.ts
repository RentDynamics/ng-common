/* tslint:disable:no-unused-variable */

import { FillPoint } from './fill-point.model';

describe('FillPoint', () => {

  it('should generate fillPointValue', () => {
    // Arrange
    let fillPoint = {
        category: {
            dropDownLabel: 'Recipient Attributes',
            dataResource: 'Person',
            fillPointLabel: 'Recipient',
            id: 1,
            sortOrder: 1
        },
        dataResource: 'first_name',
        categoryId: 1,
        dropDownLabel: 'First Name',
        fillPointLabel: 'FirstName',
        formatTypeId: 1,
        id: 1,
        sortOrder: 1,
    };
    // Act
    let result = new FillPoint(fillPoint);
    // Assert
    expect(result.fillPointValue).toEqual('%[Recipient-FirstName]');
  });

});
