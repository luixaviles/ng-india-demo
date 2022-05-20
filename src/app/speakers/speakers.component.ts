import { Component, OnInit } from '@angular/core';
import { Speaker } from '../web-components/model';
import '../web-components/corp-card'; // web component
import { Observable } from 'rxjs';
import { SpeakersService } from './speakers.service';

@Component({
  selector: 'corp-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit{
  speakers$?: Observable<Speaker[]>;

  constructor(private readonly speakersService: SpeakersService) {
  }

  ngOnInit(): void {
    this.speakers$ = this.speakersService.getSpeakers();
  }

  onEditSpeaker(event: Event) {
    const speaker = (event as CustomEvent<Speaker>).detail;
    console.log('edit speaker', speaker);
  }
}
