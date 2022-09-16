import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post22',
  templateUrl: './post22.component.html',
  styleUrls: ['./post22.component.css']
})
export class Post22Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
