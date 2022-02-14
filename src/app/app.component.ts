import { Component } from '@angular/core';
import { ContactFormEventArgs } from './contact/contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements ContactFormEventArgs {
  submitted: boolean = false;
  firstName!: string;
  lastName!: string;
  email!: string;
  phoneNumber!: string;
  title = 'chubb-sample';

  onFormSubmit(e: ContactFormEventArgs) {
    this.submitted = true;
    this.firstName = e.firstName;
    this.lastName = e.lastName;
    this.email = e.email;
    this.phoneNumber = e.phoneNumber;
  }
}
