import { Component } from '@angular/core';
import { User } from '../web-components/model';
import '../web-components/corp-user'; // web component

@Component({
  selector: 'corp-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent{
// user: User = {
  //   id: 2,
  //   fullName: 'Luis',
  //   role: 'Software Engineer',
  //   avatar: 'https://luixaviles.com/images/avatar@2x.png',
  // };

  users: User[] = [
    {
      id: 0,
      fullName: 'Luis Aviles',
      role: 'Software Engineer',
      avatar: 'https://luixaviles.com/images/avatar@2x.png',
    },
    {
      id: 1,
      fullName: 'Roperto Perez',
      role: 'UX Designer',
    },
    { id: 2, fullName: 'Maria Gomez', role: 'Data Scientist' },
  ];

  onEditUser(event: Event) {
    console.log('editUser');
  }
}
