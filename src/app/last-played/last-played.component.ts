import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-played',
  templateUrl: './last-played.component.html',
  styleUrls: ['./last-played.component.css']
})
export class LastPlayedComponent implements OnInit {

  songs = ["song\tartist\ttime played","song\tartist\ttime played","song\tartist\ttime played","song\tartist\ttime played","song\tartist\ttime played",]
  constructor() { }

  ngOnInit(): void {
  }

}
