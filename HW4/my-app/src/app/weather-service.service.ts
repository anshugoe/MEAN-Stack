import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Humidity } from './humidity';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  api1 = 'http://api.openweathermap.org/data/2.5/weather?q='
  api2 = '&units=imperial&appid=';

  constructor(private httpClient: HttpClient) { }

  public getHumidity() {
    return this.httpClient.get(this.api1 + localStorage.getItem('city') + this.api2);
  }

}
