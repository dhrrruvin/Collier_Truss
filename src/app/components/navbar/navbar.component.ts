import { NgClass } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
     selector: 'app-navbar',
     imports: [NgClass],
     templateUrl: './navbar.component.html',
     styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements AfterViewInit {

     isScrolled: boolean = false;

     ngAfterViewInit() {
          if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
               // Create an Intersection Observer
               const observer = new IntersectionObserver((entries) => {
                    let isHeroVisible = false;

                    entries.forEach(entry => {
                         if (entry.target.id === 'hero_section' && entry.isIntersecting) {
                              isHeroVisible = true; // Hero section is visible
                         }
                    });

                    // Set isScrolled based on visibility
                    this.isScrolled = !isHeroVisible; // Set to true if hero section is not visible
               });

               // Observe the hero section
               const heroSection = document.getElementById('hero_section');
               if (heroSection) {
                    observer.observe(heroSection);
               }

               // Observe other sections
               const sections = ['about_us_section', 'service_section', 'features_section', 'contactUs_section'];
               sections.forEach(sectionId => {
                    const section = document.getElementById(sectionId);
                    if (section) {
                         observer.observe(section);
                    }
               });
          }
     }



     @HostListener('window:scroll', [])
     onWindowScroll() {
          this.isScrolled = window.scrollY > 250;
     }

     scrollTo(sectionId: string) {
          const element = document.getElementById(sectionId);
          if (element) {
               element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
               });
          }
     }
}
