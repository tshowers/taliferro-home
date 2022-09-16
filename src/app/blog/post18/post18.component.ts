import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post18',
  templateUrl: './post18.component.html',
  styleUrls: ['./post18.component.css']
})
export class Post18Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
