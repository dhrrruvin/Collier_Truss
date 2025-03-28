import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
     selector: 'app-services',
     imports: [NgFor],
     templateUrl: './services.component.html',
     styleUrls: ['./services.component.scss']
})
  
export class ServicesComponent {

     services = [
          {
               name: 'Service 1',
               image: '../../../assets/images/Projects/2422 21st SW, Naples, FL 34117/Photo-1.jpg',
               title: 'Modern Family Home',
               description: '4 Beds | 3 Baths | 2-Car Garage<br>Wheelchair accessible property',
               status: 'New / For Sale'
          },
          {
               name: 'Service 2',
               image: '../../../assets/images/Projects/566 2nd Street SE, Naples, FL 34117/DSC_0630_1_2_3_4.jpg',
               title: 'Loft Style Apartment',
               description: '1 Bed | 1 Bath1 Parking Slot',
               status: 'New / For Rent'
          },
          {
               name: 'Service 3',
               image: '../../../assets/images/Projects/941 13th St SW, Naples, FL 34117/Photo-1.jpg',
               title: 'Three-Storey Townhouse',
               description: '5 Beds | 3 Baths | 2-Car Garage<br>Wheelchair accessible property',
               status: 'Renovated / For Sale'
          }
     ];

}
