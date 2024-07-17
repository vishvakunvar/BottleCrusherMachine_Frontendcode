import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottleComponent } from './bottle.component';

describe('BottleComponent', () => {
  let component: BottleComponent;
  let fixture: ComponentFixture<BottleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottleComponent]
    });
    fixture = TestBed.createComponent(BottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
