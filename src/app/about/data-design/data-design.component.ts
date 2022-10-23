import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-design',
  templateUrl: './data-design.component.html',
  styleUrls: ['./data-design.component.css']
})
export class DataDesignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
