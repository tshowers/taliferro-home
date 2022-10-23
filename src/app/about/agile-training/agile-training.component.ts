import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agile-training',
  templateUrl: './agile-training.component.html',
  styleUrls: ['./agile-training.component.css']
})
export class AgileTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
