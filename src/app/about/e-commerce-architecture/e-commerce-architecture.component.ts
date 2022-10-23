import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-commerce-architecture',
  templateUrl: './e-commerce-architecture.component.html',
  styleUrls: ['./e-commerce-architecture.component.css']
})
export class ECommerceArchitectureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
