import { TestBed } from '@angular/core/testing';

import { FlapsService } from './flaps.service';

describe('FlapsService', () => {
  let service: FlapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
