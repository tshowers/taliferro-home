import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post11',
  templateUrl: './post11.component.html',
  styleUrls: ['./post11.component.css']
})
export class Post11Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }

}
