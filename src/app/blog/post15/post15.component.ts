import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post15',
  templateUrl: './post15.component.html',
  styleUrls: ['./post15.component.css']
})
export class Post15Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
