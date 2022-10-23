import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct32022',
  templateUrl: './oct32022.component.html',
  styleUrls: ['./oct32022.component.css']
})
export class Oct32022Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
