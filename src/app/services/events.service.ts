import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  urlServer = "http://190.131.209.106";
  constructor() { }

  getEvents() {
    return fetch(`${this.urlServer}/events`).then(
      response => response.json()
    );
  }

}
