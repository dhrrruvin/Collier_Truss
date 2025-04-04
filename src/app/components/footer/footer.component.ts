import { Component, OnInit } from '@angular/core';

@Component({
     selector: 'app-footer',
     imports: [],
     templateUrl: './footer.component.html',
     styleUrl: './footer.component.scss'
})

export class FooterComponent implements OnInit {

     currentYear!: number

     constructor() { }

     ngOnInit(): void {
          this.currentYear = new Date().getFullYear();
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
