import { TestBed } from '@angular/core/testing';

import { ConveyorCrusherMaintainanceService } from './conveyor-crusher-maintainance.service';

describe('ConveyorCrusherMaintainanceService', () => {
  let service: ConveyorCrusherMaintainanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConveyorCrusherMaintainanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
