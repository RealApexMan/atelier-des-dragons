import { Routes } from '@angular/router';
import { HomePageComponent } from './visitor/home/home.page.component';
import { AboutPageComponent } from './visitor/about/about.page.component';
import { PortfolioPageComponent } from './visitor/portfolio/portfolio.page.component';
import { BlogPageComponent } from './visitor/blog/blog.page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        title:'L\'atelier des Dragons 🐲'
    },
    {
        path: 'home',
        component: HomePageComponent,
        title:'L\'atelier des Dragons 🐲'
    },
    {
        path: 'about',
        component: AboutPageComponent,
        title:'L\'atelier des Dragons - A propos 🐲'
    },
    {
        path: 'portfolio',
        component: PortfolioPageComponent,
        title:'L\'atelier des Dragons - Portfolio 🐲'
    },
    {
        path: 'blog',
        component: BlogPageComponent,
        title:'L\'atelier des Dragons - Blog 🐲'
    },
];
