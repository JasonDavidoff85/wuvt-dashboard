import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data: any = []

  ngOnInit(): void {
    this.http.get<any>('https://api.weather.gov/gridpoints/TOP/57,65/forecast')
    .subscribe(
      data => {
        for (let i = 0 ; i < 3 ; i++) {
          console.log(data.properties.periods[i]);
          this.data[i] = data.properties.periods[i]
        }
      }
    )
  }

}
