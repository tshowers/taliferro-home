import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post17',
  templateUrl: './post17.component.html',
  styleUrls: ['./post17.component.css']
})
export class Post17Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
