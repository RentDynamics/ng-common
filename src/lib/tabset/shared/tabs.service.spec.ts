/* tslint:disable:no-unused-variable */

import {
  async, inject
} from '@angular/core/testing';
import { TabsService } from './tabs.service';

let service = null;

describe('Tabs Service', () => {
  beforeEach(() => {
    service = new TabsService();
  });

  it('should ...', () => {
    expect(service).toBeTruthy();
  });
});
