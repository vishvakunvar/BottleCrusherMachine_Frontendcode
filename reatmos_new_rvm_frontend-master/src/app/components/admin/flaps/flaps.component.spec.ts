import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlapsComponent } from './flaps.component';

describe('FlapsComponent', () => {
  let component: FlapsComponent;
  let fixture: ComponentFixture<FlapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlapsComponent]
    });
    fixture = TestBed.createComponent(FlapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
