import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';

export const routes: Routes = [
     {
          path: 'home',
          component: HeroComponent
     },
     {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
     } // Default Route 
];
