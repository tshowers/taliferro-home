import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct92022',
  templateUrl: './oct92022.component.html',
  styleUrls: ['./oct92022.component.css']
})
export class Oct92022Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
