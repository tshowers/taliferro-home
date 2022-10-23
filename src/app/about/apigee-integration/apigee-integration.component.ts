import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apigee-integration',
  templateUrl: './apigee-integration.component.html',
  styleUrls: ['./apigee-integration.component.css']
})
export class ApigeeIntegrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
