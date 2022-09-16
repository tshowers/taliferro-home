import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post10',
  templateUrl: './post10.component.html',
  styleUrls: ['./post10.component.css']
})
export class Post10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
