import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct102022',
  templateUrl: './oct102022.component.html',
  styleUrls: ['./oct102022.component.css']
})
export class Oct102022Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
