import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [FormsModule],
  templateUrl: './footer.smart.component.html',
  styleUrl: './footer.smart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterSmartComponent {
  readonly email = signal('');
  onSubmit() {
    console.log('Form submitted');
  }
}
