import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FirestorageService } from 'src/app/services/firestorage.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone: false
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  private fs: FirestorageService = inject(FirestorageService);

  contactInfo = [
    { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'Irving, Texas' },
    { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', value: 'linkedin.com/in/dileepgaganr', link: 'https://in.linkedin.com/in/dileepgaganr' },
    { icon: 'fa-brands fa-medium', label: 'Blog', value: 'medium.com/@dilip.gagan.r', link: 'https://medium.com/@dilip.gagan.r' }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      contactEmail: new FormControl('', [Validators.required, Validators.email]),
      contactMessage: new FormControl('', [Validators.required]),
    });
  }

  submitForm(): void {
    if (!this.contactForm.valid) return;
    this.loading = true;
    this.fs.updateContact(this.contactForm.value).subscribe({
      next: () => {
        this.submitted = true;
        this.loading = false;
      },
      error: () => {
        this.submitted = true;
        this.loading = false;
      }
    });
  }
}
