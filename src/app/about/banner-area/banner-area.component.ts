import { Component, OnInit } from '@angular/core';
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
  selector: 'app-banner-area',
  templateUrl: './banner-area.component.html',
  styleUrls: ['./banner-area.component.css']
})
export class BannerAreaComponent implements OnInit {

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


  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.contact.emails.push(this.email);
    this.contact.notes.push(this.note);

  }

  onSubmit(): void {
    this._dataService.add(environment.CONTACTS, this.contact);
    this.message="Thank You! Some one will get back to you shortly.";
  }

  resolved(captchaResponse: string) : void {
    this.captcha = captchaResponse;
    if (!environment.production)
      console.log(this.captcha)
  }

}
