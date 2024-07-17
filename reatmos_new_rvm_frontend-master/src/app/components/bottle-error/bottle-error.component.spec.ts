import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottleErrorComponent } from './bottle-error.component';

describe('BottleErrorComponent', () => {
  let component: BottleErrorComponent;
  let fixture: ComponentFixture<BottleErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottleErrorComponent]
    });
    fixture = TestBed.createComponent(BottleErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
