import {
  Component,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  @Output() notify = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      references: this.fb.array([this.fb.control('')]),
    });
  }

  onSubmit(): void {
    // console.log(this.contactForm);
    console.log(this.references);
    if (this.contactForm.valid) {
      this.notify.emit({
        firstName: this.contactForm.get('firstName')?.value,
        lastName: this.contactForm.get('lastName')?.value,
        email: this.contactForm.get('email')?.value,
        phoneNumber: this.contactForm.get('phoneNumber')?.value,
      });
    }
  }

  get references(): FormArray {
    return this.contactForm?.get('references') as FormArray;
  }
}

export interface ContactFormEventArgs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
