import { Component, signal } from '@angular/core';
import { HomeBannerDumbComponent } from "./home-banner/home-banner.dumb.component";
import { SliderDumbComponent } from "./slider/slider.dumb.component";
import { HomepageFeatureCardListDumbComponent } from "./homepage-feature-card-list/homepage-feature-card-list.dumb.component";
import { AboutDumbComponent } from "./about/about.dumb.component";
import { TestimonialsDumbComponent } from "./testimonials/testimonials.dumb.component";
import { ContactDumbComponent } from "./contact/contact.dumb.component";

@Component({
  imports: [HomeBannerDumbComponent, SliderDumbComponent, HomepageFeatureCardListDumbComponent, AboutDumbComponent, TestimonialsDumbComponent, ContactDumbComponent],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss'
})
export class HomePageComponent {

  testimonialsList = signal([
    {
    icon: '💍',
    name: 'Frédérique, Dijon',
    comment : '« Très belles pièces, telles que décrites et légères à porter. Et arrivées vite. Elles font leur petit effet 😉 Je recommande cet article.»'
    },
    {
      icon: '💍',
      name: 'Sarah, Suisse',
      comment: `« Article de qualité, excellent rapport qualité prix, une vendeuse adorable et très rapide dans l'envoi du colis, je recommande !!»`  
    },
      {
        icon: '💍',
        name: 'Gabriela, London',
        comment: `« Gorgeous piece that I’ve been reaching for again and again. I haven’t seen anything like this anywhere else! Love love love»`
      },
    
  ])

  featureCardList = signal([
    {
      name: 'New Collection',
      image: '/images/slide.png',
      description: `✨ Nouvelles Collections Disponibles ! ✨

Je suis heureuse de vous dévoiler mes nouvelles collections de bijoux, disponibles dès maintenant dans la boutique MeiJiah ! 🛍️

Ces collections, inspirées par l'élégance et la beauté de la nature, comprennent des pièces qui sauront vous apporter une touche raffinée. 🌟 Découvrez les boucles d'oreilles Aléa, Neluma et Keria, ainsi que le collier Keria, dès maintenant !

Chaque bijou est fabriqué à la main avec soin, pour vous offrir des pièces uniques qui ne ressemblent à aucune autre. 💎

Boucles d'oreilles Aléa : https://meijiah.etsy.com/listing/1872417330

Boucles d'oreilles Neluma : https://meijiah.etsy.com/listing/1872426558

Boucles d'oreilles Keria : https://meijiah.etsy.com/listing/1886617963

Collier Keria : https://meijiah.etsy.com/listing/1872439596

✨ Rendez-vous sur la boutique Etsy MeiJiah pour découvrir ces nouveautés et bien d'autres encore !`,
    },
    {
      name: 'New Collection',
      image: '/images/slide2.png',
      description: `✨ Nouveauté dans la boutique ! ✨

🐉 Les stickers dragons sont là ! 🐉

Ajoute une touche magique à tes affaires avec ces autocollants brillants et holographiques ✨ Disponibles en plusieurs couleurs : rouge, gris, jaune, bleu et rainbow 🌈

✅ Imperméables & résistants aux UV – Parfaits pour les gourdes, cahiers, ordinateurs et plus encore !
🎁 Idée cadeau idéale pour les fans de fantasy et de dragons 🐲

💖Désigné et Fait main avec amour en France

📍 Dispo sur ma boutique Etsy : https://meijiah.etsy.com

📢 Tague un ami qui adore les dragons ! 🐲👇`,
    },
    {
      name: 'New Collection',
      image: '/images/slide3.png',
      description: `✨ VENTES FLASH - MeiJiah ✨
📅 Du 3 au 9 Février

Profitez de 25% de réduction sur tous les bijoux de la boutique ! 💍🌿
C’est le moment parfait pour craquer sur une nouvelle pièce inspirée par la nature 🌸

🔥 Offre limitée, ne la manquez pas ! 🔥

🛒 Shoppez dès maintenant sur ma boutique Etsy : https://meijiah.etsy.com

#bijouxfaitsmain #promobijoux #etsy #jewelrylover #venteflash #bijouxnature`,
    },
  ]);

  onBannerClicked() {
    console.log('Banner clicked');
  }
}
