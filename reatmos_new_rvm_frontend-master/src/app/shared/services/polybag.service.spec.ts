import { TestBed } from '@angular/core/testing';

import { PolybagService } from './polybag.service';

describe('PolybagService', () => {
  let service: PolybagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolybagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
