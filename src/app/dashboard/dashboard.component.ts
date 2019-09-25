import { Component, OnInit } from '@angular/core';
import { WEATHERDATA, WEATHER_DATA } from '../core/services/weatherdata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  weatherData: WEATHER_DATA[] = WEATHERDATA;
  boardFeed: any[];
  constructor() { }

  ngOnInit() {
    this.boardFeed = [["typescript"],["angular2"],["weather", this.weatherData]]
  }

}
