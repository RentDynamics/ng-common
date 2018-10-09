import { OrderByPipe } from '@rd/core';
import { HeaderChunkPipe } from './header-chunk.pipe';

describe('HeaderChunkPipe', () => {
  var pipe: HeaderChunkPipe = null;
  var orderByPipe: OrderByPipe = null;

  beforeEach(() => {
    pipe = new HeaderChunkPipe();
    orderByPipe = new OrderByPipe();
  })

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform array of two into array of one when headerName is the same', () => {
    const mockAry = [{ communityId: 1, headerName: 'Wasatch' }, { communityId: 2, headerName: 'Wasatch' }];
    const results = pipe.transform(mockAry, function (p1, p2) { return (p1.headerName == p2.headerName); }, function (p) { return p.headerName; });
    expect(results).toBeTruthy();
    expect(results.length).toBe(1);
    expect(results[0].id).toBe('Wasatch');
    expect(results[0].items.length).toBe(2);
    expect(results[0].items[0]).toEqual({ communityId: 1, headerName: 'Wasatch' });
    expect(results[0].items[1]).toEqual({ communityId: 2, headerName: 'Wasatch' });
  });

  it('should transform array of three into array of two when headerName is not all the same', () => {
    const mockAry = [{ communityId: 1, headerName: 'Wasatch' }, { communityId: 2, headerName: 'Wasatch' }, { communityId: 456, headerName: 'Bridge' }];
    const results = pipe.transform(mockAry, function (p1, p2) { return (p1.headerName == p2.headerName); }, function (p) { return p.headerName; }, ['+headerName']);
    expect(results).toBeTruthy();
    expect(results.length).toBe(2);

    expect(results[0].id).toBe('Bridge');
    expect(results[0].items.length).toBe(1);
    expect(results[0].items[0]).toEqual({ communityId: 456, headerName: 'Bridge' });

    expect(results[1].id).toBe('Wasatch');
    expect(results[1].items.length).toBe(2);
    expect(results[1].items[0]).toEqual({ communityId: 1, headerName: 'Wasatch' });
    expect(results[1].items[1]).toEqual({ communityId: 2, headerName: 'Wasatch' });
  });

  describe('real world tests', () => {
    var mockAry = [];

    beforeEach(() => {
      mockAry = [
        {
          "actual": 2,
          "clientId": 12,
          "callCap": null,
          "communityId": -1,
          "month": -1,
          "communityName": "1020 Post",
          "clientName": "RentSFNow"
        },
        {
          "actual": 4,
          "clientId": 12,
          "callCap": null,
          "communityId": -3,
          "month": -1,
          "communityName": "1025 Post 20 Cedar",
          "clientName": "RentSFNow"
        },
        {
          "actual": 1,
          "clientId": 12,
          "callCap": null,
          "communityId": -2,
          "month": -1,
          "communityName": "1025 Sutter",
          "clientName": "RentSFNow"
        },
        {
          "actual": 2,
          "clientId": 13,
          "callCap": null,
          "communityId": -1,
          "month": -1,
          "communityName": "1025 Sutter",
          "clientName": "Greentree"
        }
      ];
    });

    afterAll(() => {
      mockAry = [];
    })

    it('should transform array of 506 items correctly with no duplicates when passed orderByFields as the last argument', () => {
      const results = pipe.transform(mockAry, (p1, p2) => { return p1.clientId === p2.clientId; }, (p) => { return p.clientName; }, ['+clientId']);
      expect(results).toBeTruthy();
      expect(results.length).toBe(2);
      expect(results.filter(r => r.id === 'RentSFNow').length).toBe(1);
      expect(results.filter(r => r.id === 'RentSFNow')[0].items.length).toBe(3);
    });

    it('should transform array of 506 items correctly with no duplicates when mockAry ordered manually before invocation', () => {
      mockAry = orderByPipe.transform(mockAry, ['+clientId']);
      const results = pipe.transform(mockAry, (p1, p2) => { return p1.clientId === p2.clientId; }, (p) => { return p.clientName; });
      expect(results).toBeTruthy();
      expect(results.length).toBe(2);
      expect(results.filter(r => r.id === 'RentSFNow').length).toBe(1);
      expect(results.filter(r => r.id === 'RentSFNow')[0].items.length).toBe(3);
    });
  });
});
