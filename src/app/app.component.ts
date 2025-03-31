import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ServicesComponent } from "./components/services/services.component";
import { FeaturesComponent } from "./components/features/features.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { TeamMemberComponent } from "./components/team-member/team-member.component";


@Component({
     selector: 'app-root',
     imports: [
          RouterOutlet,
          HeroComponent,
          ContactUsComponent,
          FooterComponent,
          ServicesComponent,
          FeaturesComponent,
          NavbarComponent,
          AboutUsComponent,
          TeamMemberComponent
     ],

     templateUrl: './app.component.html',
     styleUrl: './app.component.scss'
})

export class AppComponent {
     title = 'collier_truss';
}
