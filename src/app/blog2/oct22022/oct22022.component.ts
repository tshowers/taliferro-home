import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct22022',
  templateUrl: './oct22022.component.html',
  styleUrls: ['./oct22022.component.css']
})
export class Oct22022Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
