import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct72022',
  templateUrl: './oct72022.component.html',
  styleUrls: ['./oct72022.component.css']
})
export class Oct72022Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
