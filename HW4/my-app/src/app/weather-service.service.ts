import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Humidity } from './humidity';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  apiURL = 'http://api.openweathermap.org/data/2.5/weather?q='
  apiURL2 = '&units=imperial&appid=dfb95da42784692600d9d0adb78a140e';

  constructor(private httpClient: HttpClient) { }

  public getHumidity() {
    console.log(this.apiURL + localStorage.getItem('city') + this.apiURL2)
    return this.httpClient.get(this.apiURL + localStorage.getItem('city') + this.apiURL2);
  }

}
