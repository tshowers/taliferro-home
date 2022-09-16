import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post13',
  templateUrl: './post13.component.html',
  styleUrls: ['./post13.component.css']
})
export class Post13Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
