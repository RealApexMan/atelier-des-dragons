import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  input,
  OnDestroy,
  output,
} from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-home-banner',
  imports: [],
  templateUrl: './home-banner.dumb.component.html',
  styleUrl: './home-banner.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'text-white d-flex flex-column justify-content-center align-items-center text-center',
  },
})
export class HomeBannerDumbComponent implements AfterViewInit, OnDestroy {

  typed: Typed | undefined; // Instance de Typed.js


  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly button = input.required<string>();
  readonly clicked = output<void>();

  ngAfterViewInit(): void {
    const options = {
      strings: ['Découvrez nos créations', '100% unique', 'Création de haute qualité'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    };

    this.typed = new Typed('#typed', options);
  }

  ngOnDestroy(): void {
    // Détruire l'instance de Typed.js pour éviter les fuites de mémoire
    if (this.typed) {
      this.typed.destroy();
    }
  }
}