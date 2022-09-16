import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post8',
  templateUrl: './post8.component.html',
  styleUrls: ['./post8.component.css']
})
export class Post8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
