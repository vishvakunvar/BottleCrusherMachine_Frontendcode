import { TestBed } from '@angular/core/testing';

import { MachineDataService } from './machine-data.service';

describe('MachineDataService', () => {
  let service: MachineDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
