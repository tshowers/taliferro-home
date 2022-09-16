import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post4',
  templateUrl: './post4.component.html',
  styleUrls: ['./post4.component.css']
})
export class Post4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
