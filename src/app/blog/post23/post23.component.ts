import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post23',
  templateUrl: './post23.component.html',
  styleUrls: ['./post23.component.css']
})
export class Post23Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
