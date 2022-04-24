import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {

  constructor() { }

  exampleSong = {
    dj: "Wumbo",
    title: "In the Aeroplane over the Sea",
    artist: "Neutral Milk Hotel",
    albumArt: "./assets/img/album.jpeg"
  }

  ngOnInit(): void {

  }

}
