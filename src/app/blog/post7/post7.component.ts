import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post7',
  templateUrl: './post7.component.html',
  styleUrls: ['./post7.component.css']
})
export class Post7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
