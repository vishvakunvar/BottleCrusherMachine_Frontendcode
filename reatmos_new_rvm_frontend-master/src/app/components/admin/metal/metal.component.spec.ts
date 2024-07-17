import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalComponent } from './metal.component';

describe('MetalComponent', () => {
  let component: MetalComponent;
  let fixture: ComponentFixture<MetalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetalComponent]
    });
    fixture = TestBed.createComponent(MetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
