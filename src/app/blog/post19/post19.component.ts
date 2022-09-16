import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post19',
  templateUrl: './post19.component.html',
  styleUrls: ['./post19.component.css']
})
export class Post19Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
