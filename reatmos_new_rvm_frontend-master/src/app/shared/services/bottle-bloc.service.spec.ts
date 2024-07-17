import { TestBed } from '@angular/core/testing';

import { BottleBlocService } from './bottle-bloc.service';

describe('BottleBlocService', () => {
  let service: BottleBlocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BottleBlocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
