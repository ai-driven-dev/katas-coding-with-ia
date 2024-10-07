import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '../api/api-client'; // Adjust the path as necessary

@Component({
  selector: 'app-weatherforecast',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule for basic Angular directives like ngIf, ngFor
  templateUrl: './weatherforecast.component.html',
  styleUrls: ['./weatherforecast.component.scss']
})
export class WeatherforecastComponent implements OnInit {
  forecasts: any[] = [];
  error: string | null = null;

  constructor(private apiClient: ApiModule.Client) {}

  ngOnInit(): void {
    this.getWeatherForecasts();
  }

  getWeatherForecasts() {
    this.apiClient.weatherForecast_GetWeatherForecast().subscribe({
      next: (response) => {
        if (response.errors && response.errors.length > 0) {
          this.error = 'Failed to load weather forecast';
        } else {
          console.log(response);
          this.forecasts = response.data || [];
          this.error = null; // Reset error if the response is successful
        }
      },
      error: (err) => {
        this.error = 'Failed to load weather forecast';
        console.error(err);
      }
    });
  }

}
