import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct142022',
  templateUrl: './oct142022.component.html',
  styleUrls: ['./oct142022.component.css']
})
export class Oct142022Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
