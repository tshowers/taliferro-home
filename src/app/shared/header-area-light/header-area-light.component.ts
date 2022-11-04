import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-area-light',
  templateUrl: './header-area-light.component.html',
  styleUrls: ['./header-area-light.component.css']
})
export class HeaderAreaLightComponent implements OnInit {

  @Input() title = 'Blog';
  @Input() titleLink = '/blog';

  constructor() { }

  ngOnInit(): void {
  }

}
