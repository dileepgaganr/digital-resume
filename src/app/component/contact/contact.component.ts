import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FirestorageService } from 'src/app/services/firestorage.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted:boolean;
  private fs: FirestorageService = inject(FirestorageService);
  constructor(public fb: FormBuilder) { 
        this.initForm();
  }

  ngOnInit() {

  }

  initForm() {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      contactMessage: new FormControl('', [Validators.required]),
      contactEmail: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submitForm() {
    // this.fs.updateContact(this.contactForm.value);
    this.submitted=true;
  }

}
