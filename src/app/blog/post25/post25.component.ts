import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post25',
  templateUrl: './post25.component.html',
  styleUrls: ['./post25.component.css']
})
export class Post25Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
