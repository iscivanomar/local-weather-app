import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from '../weather/weather.service';
import { WeatherServicesFake } from '../weather/weather.service.fake';
import { CurrentWeatherAppComponent } from './current-weather-app.component';

describe('CurrentWeatherAppComponent', () => {
  let component: CurrentWeatherAppComponent;
  let fixture: ComponentFixture<CurrentWeatherAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherAppComponent],
      providers: [
        {
          provide: WeatherService,
          useClass: WeatherServicesFake,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
