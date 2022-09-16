import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post6',
  templateUrl: './post6.component.html',
  styleUrls: ['./post6.component.css']
})
export class Post6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
