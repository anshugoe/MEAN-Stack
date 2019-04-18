import { Component, OnInit } from '@angular/core';
import {WeatherServiceService} from '../weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherServiceService) { }
  humidity = localStorage.getItem('humidity');

  ngOnInit() {
  }


  onSelect(): void {
    this.weatherService.getHumidity().subscribe(data => {
        console.log(data['main'])
        this.humidity = (data['main'].humidity);
        localStorage.setItem("humidity", this.humidity)
    });
  }

}

