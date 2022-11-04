import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tyrone-showers-bio',
  templateUrl: './tyrone-showers-bio.component.html',
  styleUrls: ['./tyrone-showers-bio.component.css']
})
export class TyroneShowersBioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
