import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct42022',
  templateUrl: './oct42022.component.html',
  styleUrls: ['./oct42022.component.css']
})
export class Oct42022Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
