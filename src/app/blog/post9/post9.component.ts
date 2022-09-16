import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post9',
  templateUrl: './post9.component.html',
  styleUrls: ['./post9.component.css']
})
export class Post9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
