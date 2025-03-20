import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsDumbComponent } from './testimonials.dumb.component';

describe('TestimonialsDumbComponent', () => {
  let component: TestimonialsDumbComponent;
  let fixture: ComponentFixture<TestimonialsDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsDumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
