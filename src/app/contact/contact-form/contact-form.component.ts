import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
