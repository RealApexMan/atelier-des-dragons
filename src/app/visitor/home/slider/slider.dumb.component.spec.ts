import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDumbComponent } from './slider.dumb.component';

describe('SliderDumbComponent', () => {
  let component: SliderDumbComponent;
  let fixture: ComponentFixture<SliderDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderDumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
