import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct112022',
  templateUrl: './oct112022.component.html',
  styleUrls: ['./oct112022.component.css']
})
export class Oct112022Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
