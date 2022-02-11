import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-intro',
  templateUrl: './contact-intro.component.html',
  styleUrls: ['./contact-intro.component.scss'],
})
export class ContactIntroComponent {
  contactline1 = 'Review Your Application';
  contactline2 = 'Confirm your contact details';
  contactline4 =
    "We'll use details if we need to get in touch about your coverage.";
}
