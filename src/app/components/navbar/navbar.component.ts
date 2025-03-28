import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
     selector: 'app-navbar',
     imports: [NgClass],
     templateUrl: './navbar.component.html',
     styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

     isScrolled: boolean = false;

     @HostListener('window:scroll', [])
     onWindowScroll() {
          this.isScrolled = window.scrollY > 200;
     }

     toggleMenu() {

     }

}
