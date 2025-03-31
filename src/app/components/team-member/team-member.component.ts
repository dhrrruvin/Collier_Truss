import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
     selector: 'app-team-member',
     imports: [NgFor],
     templateUrl: './team-member.component.html',
     styleUrl: './team-member.component.scss'
})
export class TeamMemberComponent {

     members = [
          {
               name: 'Henry Cherrelus',
               position: 'CEO',
               image: '../../../assets/images/teamMember/team1.jpg',
          },
          {
               name: 'Salmont Orange',
               position: 'Head Engineer',
               image: '../../../assets/images/teamMember/team2.jpg',
          },
          {
               name: 'Some One',
               position: 'position',
               image: '../../../assets/images/teamMember/team3.jpg',
          },
          {
               name: 'John Cherrelus',
               position: 'Technical Design Lead',
               image: '../../../assets/images/teamMember/team4.jpg',
          }
     ];

}
