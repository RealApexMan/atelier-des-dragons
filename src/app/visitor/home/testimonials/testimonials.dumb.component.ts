import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TestimonialsList } from './testimonials.interface';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.dumb.component.html',
  styleUrl: './testimonials.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsDumbComponent {

  readonly testimonialsList = input.required<TestimonialsList>();

}
