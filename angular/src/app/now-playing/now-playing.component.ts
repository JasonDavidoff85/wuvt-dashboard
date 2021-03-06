import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataFetchService } from '../_services/data-fetch.service';
import {Subscription, timer, map, interval, Observable, mergeMap, switchMap, catchError, EMPTY} from 'rxjs';  

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {

  currentTrack!: {dj: string, title: string, artist: string, album: string, played: Date, albumArt: any}
  tempTrack!: any;
  isImageLoading: any = false;

  constructor(
    private dataFetch: DataFetchService
  ) {this.currentTrack = {dj: '', title: '', artist: '', album: '', played: new Date(), albumArt: ''}}

  exampleSong = {
    dj: "Wumbo",
    title: "In the Aeroplane over the Sea",
    artist: "Neutral Milk Hotel",
    albumArt: "./assets/img/album.jpeg"
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.currentTrack.albumArt = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
   }

  ngOnInit(): void {
    interval(2000)
    .pipe(switchMap(() => this.dataFetch.getNowPlaying()))
    .pipe(switchMap((data) => {
      this.tempTrack = data;
        if (this.currentTrack.played.getTime() != new Date(this.tempTrack.played).getTime()) {
          this.currentTrack.dj = this.tempTrack.dj.airname;
          this.currentTrack.title = this.tempTrack.track.title;
          this.currentTrack.artist = this.tempTrack.track.artist;
          this.currentTrack.album = this.tempTrack.track.album;
          this.currentTrack.played = new Date(this.tempTrack.played);
        }
        return this.dataFetch.getMBID(data.track.album, data.track.artist)
    }))
    .pipe(switchMap((album) => this.dataFetch.getAlbumArt(album)
    .pipe(catchError((error)=> {
      console.log("could not find album art")
      this.isImageLoading = true;
      return EMPTY
      }))))
    .subscribe(
      (albumArt) => {
        console.log("found image")
          this.isImageLoading = true;
          this.createImageFromBlob(albumArt);
          this.isImageLoading = false;
          this.currentTrack.albumArt = albumArt;
      }
    )
  }

  ngOnDestroy(): void { 
  } 

}
