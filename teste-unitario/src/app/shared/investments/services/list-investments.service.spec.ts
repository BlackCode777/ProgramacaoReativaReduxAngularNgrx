import { TestBed } from '@angular/core/testing';

import { ListInvestmentsService } from './list-investments.service';

describe('ListInvestmentsService', () => {
  let service: ListInvestmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListInvestmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
