import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bread-crumb-light',
  templateUrl: './bread-crumb-light.component.html',
  styleUrls: ['./bread-crumb-light.component.css']
})
export class BreadCrumbLightComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
