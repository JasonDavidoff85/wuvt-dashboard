import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../_models/Message';
import { map, observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataFetchService {
  constructor(private http: HttpClient) { }

  getNowPlaying() {
      return this.http.get<any>(`https://trackman-fm.apps.wuvt.vt.edu/api/now_playing`);
  }

  getLastPlayed() {
    return this.http.get<any>(`https://trackman-fm.apps.wuvt.vt.edu/api/playlists/last15`);
  }

  getMBID(albumName: string, artistName: string) {
    const albumEncoded = encodeURIComponent(albumName)
    const artistEncoded = encodeURIComponent(artistName)
    return this.http.get<any>(`https://musicbrainz.org/ws/2/release/?query=release:${albumEncoded}&primarytype:album&fmt=json`)
  }
  
  getAlbumArt(mbid: any) {
    // console.log(mbid.releases[0].id)
    console.log(mbid)
    return this.http.get(`https://coverartarchive.org/release/${mbid.releases[0].id}/front`, { responseType: 'blob' })
  }





}