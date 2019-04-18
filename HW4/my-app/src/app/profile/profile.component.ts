import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
//import {WeatherServiceService} from '../weather-service.service';
//import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  //cookieExists: boolean = this.cookieService.check('Test');
  
  person: Person = {
    city: "boston",
    name: "Ashu"
  };
    
  constructor() { }

  ngOnInit(): void {
      this.person.name = localStorage.getItem("name");
      this.person.city = localStorage.getItem("city");
  }
  
  onClick(): void {
      localStorage.setItem("name", this.person.name);
      localStorage.setItem("city", this.person.city)
  }
}
