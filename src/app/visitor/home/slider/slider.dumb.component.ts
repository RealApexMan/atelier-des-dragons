import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.dumb.component.html',
  styleUrl: './slider.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderDumbComponent implements AfterViewInit {
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;

  images = [
    '/images/slide.png',
    '/images/slide2.png',
    '/images/slide3.png'
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      const swiper = new Swiper(this.swiperContainer.nativeElement, {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,  // On affiche 1 image à la fois
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next', // Bouton suivant
          prevEl: '.swiper-button-prev'  // Bouton précédent
        },
        pagination: { clickable: true },
        autoplay: { delay: 3000 },
        loop: true,
      });

      console.log('Swiper initialisé avec', swiper.slides.length, 'slides');
    }, 0);  // On attend un cycle pour être sûr que le DOM est bien à jour
  }
}
