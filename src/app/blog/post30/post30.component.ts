import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post30',
  templateUrl: './post30.component.html',
  styleUrls: ['./post30.component.css']
})
export class Post30Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
