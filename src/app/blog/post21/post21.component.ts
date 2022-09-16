import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post21',
  templateUrl: './post21.component.html',
  styleUrls: ['./post21.component.css']
})
export class Post21Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
