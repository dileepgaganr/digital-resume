import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent {
  stats = [
    { value: '13+', label: 'Years Experience' },
    { value: '4', label: 'Certifications' },
    { value: '5+', label: 'Industry Domains' },
    { value: '3', label: 'Cloud Platforms' }
  ];

  certifications = [
    { name: 'Azure Solutions Architect Expert', detail: 'Az-303 / Az-304', icon: 'fa-brands fa-microsoft' },
    { name: 'Azure Data Engineer Associate', detail: 'Microsoft Certified', icon: 'fa-brands fa-microsoft' },
    { name: 'Google Cloud AI Agents', detail: 'Google Cloud', icon: 'fa-brands fa-google' },
    { name: 'OpenHack: AI-Powered Knowledge Mining', detail: 'Microsoft', icon: 'fa-solid fa-brain' }
  ];
}
