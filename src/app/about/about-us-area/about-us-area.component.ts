import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

export interface EmailAddress {
  emailAddress: string;
  emailAddressType: string;
}

export interface Note {
  name?: string;
  text: string;
}

export interface Contact {
  firstName: string;
  lastName: string;
  emails: Array<EmailAddress>;
  notes: Array<Note>;
  companyId: string;
  requestType: string;
  companyName: string;
  website: string;
};

@Component({
  selector: 'app-about-us-area',
  templateUrl: './about-us-area.component.html',
  styleUrls: ['./about-us-area.component.css']
})
export class AboutUsAreaComponent implements OnInit {
  @Input() header = 'About Us';
  @Input() subtitle = '';
  @Input() description = '';

  @Input() title1 = '';
  @Input() description1 = '';

  @Input() title2 = '';
  @Input() description2 = '';

  @Input() title3 = '';
  @Input() description3 = '';

  @Input() formTitle= '';

  public message?: any;
  public captcha = '';

  public contact = <Contact> {
    firstName: '',
    lastName: '',
    emails: [],
    notes: [],
    companyId: 'Taliferro',
    companyName: '',
    requestType: '',
    website: ''
  }

  public email = <EmailAddress> {
    emailAddress: '',
    emailAddressType: 'Business',
  }

  public note = <Note> {
    name: 'Message',
    text: ''
  }


  constructor(private _router:Router, private _dataService: DataService) { }

  ngOnInit(): void {
    this.contact.emails.push(this.email);
    this.contact.notes.push(this.note);

  }

  onSubmit(): void {
    this._dataService.add(environment.CONTACTS, this.contact);
    this.message="Thank You! Some one will get back to you shortly.";

    this._router.navigate(['thank-you']);
  }

  resolved(captchaResponse: string) : void {
    this.captcha = captchaResponse;
    if (!environment.production)
      console.log(this.captcha)
  }


}
