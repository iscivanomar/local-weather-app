import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather-app',
  templateUrl: './current-weather-app.component.html',
  styleUrls: ['./current-weather-app.component.css'],
})
export class CurrentWeatherAppComponent implements OnInit {
  current: ICurrentWeather;
  constructor(private weatherService: WeatherService) {
    this.current = {
      city: '',
      country: '',
      date: 0,
      image: '',
      temperature: 0,
      description: '',
    };
  }
  ngOnInit() {
    this.weatherService
      .getCurrentWeather('Bethesda', 'US')
      .subscribe(data => (this.current = data));
  }

  getOrdinal(date: number) {
    const n = new Date(date).getDate();
    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : '';
  }
}
