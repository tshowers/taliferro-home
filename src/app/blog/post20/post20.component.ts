import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post20',
  templateUrl: './post20.component.html',
  styleUrls: ['./post20.component.css']
})
export class Post20Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
