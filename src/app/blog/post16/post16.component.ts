import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post16',
  templateUrl: './post16.component.html',
  styleUrls: ['./post16.component.css']
})
export class Post16Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
