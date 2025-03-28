import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
     selector: 'app-featurs',
     imports: [NgFor, NgIf],
     templateUrl: './features.component.html',
     styleUrl: './features.component.scss'
})

export class FeaturesComponent {

     features = [
          {
               feature_items: [
                    {
                         feature_icon: 'bi bi-award-fill',
                         feature_title: 'Proven Expertise',
                         feature_description: 'Our team comprises seasoned professionals with a track record of success in diverse projects.',
                         feature_link: '',
                    },
                    {
                         feature_icon: 'bi bi-person-fill-check',
                         feature_title: 'Customer-Centric Approach',
                         feature_description: 'We prioritize your needs and collaborate closely to bring your vision to life.',
                         feature_link: ''
                    }
               ],
               feature_image: '../../../assets/images/Henry -- Factory and Event Shoot -- Final/Photo-11.jpg'

          },
          {
               feature_items: [
                    {
                         feature_icon: 'bi bi-bookmark-star-fill',
                         feature_title: 'Unmatched Quality',
                         feature_description: 'We uphold the highest standards in every aspect of our work, ensuring lasting value.',
                         feature_link: ''
                    },
                    {
                         feature_icon: 'bi bi-hand-thumbs-up-fill',
                         feature_title: 'Trusted by Professionals',
                         feature_description: 'Our clients consistently return, trusting us to deliver excellence.',
                         feature_link: ''
                    }
               ],
               feature_image: '../../../assets/images/Henry -- Factory and Event Shoot -- Final/Photo-10.jpg'

          }

     ]

}
