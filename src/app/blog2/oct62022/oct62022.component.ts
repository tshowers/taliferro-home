import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct62022',
  templateUrl: './oct62022.component.html',
  styleUrls: ['./oct62022.component.css']
})
export class Oct62022Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
