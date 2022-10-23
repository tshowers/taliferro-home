import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-design-process-area',
  templateUrl: './design-process-area.component.html',
  styleUrls: ['./design-process-area.component.css']
})
export class DesignProcessAreaComponent implements OnInit {
  @Input() subtitle = '';
  @Input() header = '';
  @Input() description = '';
  @Input() image1 = '';
  @Input() subtitle1 = '';
  @Input() title1 = '';
  @Input() description1 = '';

  @Input() image2 = '';
  @Input() subtitle2 = '';
  @Input() title2 = '';
  @Input() description2 = '';

  @Input() image3 = '';
  @Input() subtitle3 = '';
  @Input() title3 = '';
  @Input() description3 = '';

  @Input() image4 = '';
  @Input() subtitle4 = '';
  @Input() title4 = '';
  @Input() description4 = '';

  constructor() { }

  ngOnInit(): void {
  }

}
