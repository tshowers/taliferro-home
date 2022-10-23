import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-optimization',
  templateUrl: './website-optimization.component.html',
  styleUrls: ['./website-optimization.component.css']
})
export class WebsiteOptimizationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
