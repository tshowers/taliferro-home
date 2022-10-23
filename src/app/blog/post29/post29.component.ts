import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post29',
  templateUrl: './post29.component.html',
  styleUrls: ['./post29.component.css']
})
export class Post29Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
