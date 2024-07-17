import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilledwinComponent } from './filledwin.component';

describe('FilledwinComponent', () => {
  let component: FilledwinComponent;
  let fixture: ComponentFixture<FilledwinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilledwinComponent]
    });
    fixture = TestBed.createComponent(FilledwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
