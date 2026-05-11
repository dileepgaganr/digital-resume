import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent {
  typewriterStrings = [
    'Azure Solutions Architect',
    'Full-Stack Engineer',
    'AI & Agent Tools Builder',
    'Cloud Native Developer'
  ];

  scrollToOverview(event: Event): void {
    event.preventDefault();
    const el = document.getElementById('overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
