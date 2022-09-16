import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post12',
  templateUrl: './post12.component.html',
  styleUrls: ['./post12.component.css']
})
export class Post12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
