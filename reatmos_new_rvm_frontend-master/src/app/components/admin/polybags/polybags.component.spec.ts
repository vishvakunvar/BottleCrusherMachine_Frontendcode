import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolybagsComponent } from './polybags.component';

describe('PolybagsComponent', () => {
  let component: PolybagsComponent;
  let fixture: ComponentFixture<PolybagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolybagsComponent]
    });
    fixture = TestBed.createComponent(PolybagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
