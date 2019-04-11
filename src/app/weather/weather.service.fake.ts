import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ICurrentWeather } from '../interfaces';
import { IWeatherService } from './weather.service';

export class WeatherServicesFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intesity drizzle',
  };

  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }
}
