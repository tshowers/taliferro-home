import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud-architecture',
  templateUrl: './cloud-architecture.component.html',
  styleUrls: ['./cloud-architecture.component.css']
})
export class CloudArchitectureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
