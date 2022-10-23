import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post28',
  templateUrl: './post28.component.html',
  styleUrls: ['./post28.component.css']
})
export class Post28Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
