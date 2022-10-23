import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct12022',
  templateUrl: './oct12022.component.html',
  styleUrls: ['./oct12022.component.css']
})
export class Oct12022Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
