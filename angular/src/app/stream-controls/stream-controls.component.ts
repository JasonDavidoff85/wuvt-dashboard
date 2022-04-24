import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream-controls',
  templateUrl: './stream-controls.component.html',
  styleUrls: ['./stream-controls.component.css']
})
export class StreamControlsComponent implements OnInit {

  constructor() { }

  options = ["play_arrow", "stop"]
  status = this.options[0]
  playing = false;


  ngOnInit(): void {
  }

}
