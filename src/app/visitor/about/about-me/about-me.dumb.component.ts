import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.dumb.component.html',
  styleUrl: './about-me.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeDumbComponent {

}
