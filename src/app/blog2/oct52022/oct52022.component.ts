import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct52022',
  templateUrl: './oct52022.component.html',
  styleUrls: ['./oct52022.component.css']
})
export class Oct52022Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
