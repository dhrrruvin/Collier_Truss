import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ServicesComponent } from "./components/services/services.component";
import { FeaturesComponent } from "./components/features/features.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.scss'],
     imports: [
          NavbarComponent,
          HeroComponent,
          AboutUsComponent,
          ServicesComponent,
          FeaturesComponent,
          ContactUsComponent,
          FooterComponent,
     ],
})

export class AppComponent {
     title = 'collier_truss';
}
