import { Component } from '@angular/core';

@Component({
  selector: 'appointment-app-root',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
})

export class BookingAppComponent {
  title = 'appointment-booking';
}
