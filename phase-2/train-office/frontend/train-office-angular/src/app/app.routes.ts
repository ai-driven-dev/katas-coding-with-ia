import { Routes } from '@angular/router';
import { WeatherforecastComponent } from './weatherforecast/weatherforecast.component'; // Adjust path as needed

export const routes: Routes = [
    { path: 'weatherforecast', component: WeatherforecastComponent },
    { path: '', redirectTo: '/weatherforecast', pathMatch: 'full' },
    { path: '**', redirectTo: '/weatherforecast' }
];
