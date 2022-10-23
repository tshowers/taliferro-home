import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct122022',
  templateUrl: './oct122022.component.html',
  styleUrls: ['./oct122022.component.css']
})
export class Oct122022Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
