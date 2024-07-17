import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveyorCrusherComponent } from './conveyor-crusher.component';

describe('ConveyorCrusherComponent', () => {
  let component: ConveyorCrusherComponent;
  let fixture: ComponentFixture<ConveyorCrusherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConveyorCrusherComponent]
    });
    fixture = TestBed.createComponent(ConveyorCrusherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
