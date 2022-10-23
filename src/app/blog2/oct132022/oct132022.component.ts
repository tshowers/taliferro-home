import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct132022',
  templateUrl: './oct132022.component.html',
  styleUrls: ['./oct132022.component.css']
})
export class Oct132022Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
