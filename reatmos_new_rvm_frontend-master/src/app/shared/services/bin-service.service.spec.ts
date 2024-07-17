import { TestBed } from '@angular/core/testing';

import { BinServiceService } from './bin-service.service';

describe('BinServiceService', () => {
  let service: BinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
