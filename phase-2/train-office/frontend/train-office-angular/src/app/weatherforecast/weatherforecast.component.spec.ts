import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherforecastComponent } from './weatherforecast.component';
import { provideHttpClientTesting } from '@angular/common/http/testing'; // Updated import
import { ApiModule } from '../api/api-client';  // Adjust the path if necessary
import { of } from 'rxjs';

describe('WeatherforecastComponent', () => {
  let component: WeatherforecastComponent;
  let fixture: ComponentFixture<WeatherforecastComponent>;
  let apiClientMock: any;

  beforeEach(async () => {
    apiClientMock = jasmine.createSpyObj('ApiModule.Client', ['weatherForecast_GetWeatherForecast']);

    await TestBed.configureTestingModule({
      imports: [WeatherforecastComponent],  // Standalone component import
      providers: [
        provideHttpClientTesting(),  // New testing provider function
        { provide: ApiModule.Client, useValue: apiClientMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherforecastComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load weather forecasts on init', () => {
    const mockForecasts = {
      data: [
        { date: '2024-10-06', temperatureC: 21, summary: 'Cold', temperatureF: 69 },
        { date: '2024-10-07', temperatureC: -9, summary: 'Cold', temperatureF: 16 }
      ]
    };

    apiClientMock.weatherForecast_GetWeatherForecast.and.returnValue(of(mockForecasts));

    fixture.detectChanges(); // Calls ngOnInit
    expect(component.forecasts.length).toBe(2);
    expect(component.forecasts[0].temperatureC).toBe(21);
  });

  it('should display an error message if API call fails', () => {
    apiClientMock.weatherForecast_GetWeatherForecast.and.returnValue(of({ errors: ['Failed to load'] }));

    fixture.detectChanges(); // Calls ngOnInit
    expect(component.error).toBe('Failed to load weather forecast');
  });
});
