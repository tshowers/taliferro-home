import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-area2',
  templateUrl: './banner-area2.component.html',
  styleUrls: ['./banner-area2.component.css']
})
export class BannerArea2Component implements OnInit {
  @Input() header = '';
  @Input() description = '';
  @Input() image = '';

  constructor() { }

  ngOnInit(): void {
  }

}
