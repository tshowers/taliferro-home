import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() background: any;

  constructor() { }

  ngOnInit(): void {
    if (!environment.production)
      console.log("background=", this.background);
  }

}
