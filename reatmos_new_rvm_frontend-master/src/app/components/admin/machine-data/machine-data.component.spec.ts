import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineDataComponent } from './machine-data.component';

describe('MachineDataComponent', () => {
  let component: MachineDataComponent;
  let fixture: ComponentFixture<MachineDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachineDataComponent]
    });
    fixture = TestBed.createComponent(MachineDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
