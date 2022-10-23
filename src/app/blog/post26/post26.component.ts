import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post26',
  templateUrl: './post26.component.html',
  styleUrls: ['./post26.component.css']
})
export class Post26Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
