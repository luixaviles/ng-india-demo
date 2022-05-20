import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Speaker } from '../web-components/model';
import { speakersData } from './speakers-data';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {

  constructor() { }

  getSpeakers(): Observable<Speaker[]> {
    return of(speakersData);
  }
}
