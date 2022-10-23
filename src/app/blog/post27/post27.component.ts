import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post27',
  templateUrl: './post27.component.html',
  styleUrls: ['./post27.component.css']
})
export class Post27Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
