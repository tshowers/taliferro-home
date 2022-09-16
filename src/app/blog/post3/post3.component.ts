import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post3',
  templateUrl: './post3.component.html',
  styleUrls: ['./post3.component.css']
})
export class Post3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
