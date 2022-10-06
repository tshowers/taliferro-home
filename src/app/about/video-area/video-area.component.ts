import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-area',
  templateUrl: './video-area.component.html',
  styleUrls: ['./video-area.component.css']
})
export class VideoAreaComponent implements OnInit {

  public iVideo = 0;

  constructor() { }

  ngOnInit(): void {
    this.iVideo = Math.floor(Math.random() * 3);

    console.log("Which Video", this.iVideo)
  }

}
