import { TestBed } from '@angular/core/testing';

import { MetalService } from './metal.service';

describe('MetalService', () => {
  let service: MetalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
