import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'weather', component: WeatherComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
