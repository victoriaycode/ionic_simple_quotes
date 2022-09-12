import { TestBed } from '@angular/core/testing';

import { QuotesFromApiService } from './quotes-from-api.service';

describe('QuotesFromApiService', () => {
  let service: QuotesFromApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotesFromApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
