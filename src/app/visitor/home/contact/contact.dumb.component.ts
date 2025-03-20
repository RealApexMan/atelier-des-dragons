import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.dumb.component.html',
  styleUrl: './contact.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDumbComponent {
  readonly firstname = signal('');
   readonly email = signal('');
   readonly lastname = signal('');
   readonly message = signal('');
 
   onSubmit() {
     console.log('Form submitted');
   }
}
