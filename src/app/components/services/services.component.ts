import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
     selector: 'app-services',
     imports: [NgIf, NgFor, NgClass, NgbCarouselModule],
     templateUrl: './services.component.html',
     styleUrls: ['./services.component.scss'],
     standalone: true,
})

export class ServicesComponent {

     showCarousel: boolean = false;
     selectedService: any = null;

     openCarousel(service: any) {
          this.selectedService = service;
          this.showCarousel = true;
     }

     closeCarousel() {
          this.showCarousel = false;
          document.body.style.overflow = 'auto';
     }

     services = [
          {
               name: 'Service 1',
               image: '../../../assets/images/Projects/566 2nd Street SE, Naples, FL 34117/DSC_0630_1_2_3_4.jpg',
               images: [
                    '../../../assets/images/Projects/566 2nd Street SE, Naples, FL 34117/DSC_0630_1_2_3_4.jpg',
                    '../../../assets/images/Projects/566 2nd Street SE, Naples, FL 34117/DSC_0640_1_2_3_4.jpg',
                    '../../../assets/images/Projects/566 2nd Street SE, Naples, FL 34117/DSC_0645_6_7_8_9.jpg',
                    '../../../assets/images/Projects/566 2nd Street SE, Naples, FL 34117/DSC_0650_1_2_3_4.jpg',
                    '../../../assets/images/Projects/566 2nd Street SE, Naples, FL 34117/DSC_0655_6_7_8_9.jpg',

               ],
               title: 'Loft Style Apartment',
               description: '1 Bed | 1 Bath1 Parking Slot',
               status: 'New / For Rent'
          },
          {
               name: 'Service 2',
               image: '../../../assets/images/Projects/941 13th St SW, Naples, FL 34117/Photo-1.jpg',
               images: [
                    '../../../assets/images/Projects/941 13th St SW, Naples, FL 34117/Photo-1.jpg',
                    '../../../assets/images/Projects/941 13th St SW, Naples, FL 34117/Photo-2.jpg',
                    '../../../assets/images/Projects/941 13th St SW, Naples, FL 34117/Photo-3.jpg',
                    '../../../assets/images/Projects/941 13th St SW, Naples, FL 34117/Photo-4.jpg',
                    '../../../assets/images/Projects/941 13th St SW, Naples, FL 34117/Photo-5.jpg',
               ],
               title: 'Three-Storey Townhouse',
               description: '5 Beds | 3 Baths | 2-Car Garage<br>Wheelchair accessible property',
               status: 'Renovated / For Sale'
          },
          {
               name: 'Service 3',
               image: '../../../assets/images/Projects/2422 21st SW, Naples, FL 34117/Photo-1.jpg',
               images: [
                    '../../../assets/images/Projects/2422 21st SW, Naples, FL 34117/Photo-1.jpg',
                    '../../../assets/images/Projects/2422 21st SW, Naples, FL 34117/Photo-2.jpg',
                    '../../../assets/images/Projects/2422 21st SW, Naples, FL 34117/Photo-3.jpg',
                    '../../../assets/images/Projects/2422 21st SW, Naples, FL 34117/Photo-4.jpg',
                    '../../../assets/images/Projects/2422 21st SW, Naples, FL 34117/Photo-5.jpg',
               ],
               title: 'Modern Family Home',
               description: '4 Beds | 3 Baths | 2-Car Garage<br>Wheelchair accessible property',
               status: 'New / For Sale'
          },
          {
               name: 'Service 4',
               image: '../../../assets/images/Projects/4472 17th Ct SW, Naples, FL 34116/Photo-1.jpg',
               images: [
                    '../../../assets/images/Projects/4472 17th Ct SW, Naples, FL 34116/Photo-1.jpg',
                    '../../../assets/images/Projects/4472 17th Ct SW, Naples, FL 34116/Photo-2.jpg',
                    '../../../assets/images/Projects/4472 17th Ct SW, Naples, FL 34116/Photo-3.jpg',
                    '../../../assets/images/Projects/4472 17th Ct SW, Naples, FL 34116/Photo-4.jpg',
                    '../../../assets/images/Projects/4472 17th Ct SW, Naples, FL 34116/Photo-5.jpg',
               ],
               title: 'Modern Family Home',
               description: '4 Beds | 3 Baths | 2-Car Garage<br>Wheelchair accessible property',
               status: 'New / For Sale'
          },


     ];

}
