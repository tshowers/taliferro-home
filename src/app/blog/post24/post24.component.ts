import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post24',
  templateUrl: './post24.component.html',
  styleUrls: ['./post24.component.css']
})
export class Post24Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
