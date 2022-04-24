import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-last-played',
  templateUrl: './last-played.component.html',
  styleUrls: ['./last-played.component.css']
})
export class LastPlayedComponent implements OnInit {

  songs: {artist: string, track: string, album: string, dj: string}[] = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(`https://trackman-fm.apps.wuvt.vt.edu/api/playlists/last15`)
    .subscribe(
      data => {
        for (let i = 0 ; i < 5 ; i++) {
          console.log(data.tracks[i].track.artist)
          this.songs[i] = {
            artist: data.tracks[i].track.artist,
            track: data.tracks[i].track.title,
            album: data.tracks[i].track.album,
            dj: data.tracks[i].dj.airname
          }
        }
      }
    )

  }

}
