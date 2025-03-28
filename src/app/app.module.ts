import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { FeaturesComponent } from './components/features/features.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
     imports: [
          BrowserModule,
          NavbarComponent,
          HeroComponent,
          ServicesComponent,
          FeaturesComponent,
          ContactUsComponent,
          FooterComponent
     ],
     providers: [],
})
export class AppModule { }
