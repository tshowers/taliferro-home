import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-design',
  templateUrl: './api-design.component.html',
  styleUrls: ['./api-design.component.css']
})
export class ApiDesignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
