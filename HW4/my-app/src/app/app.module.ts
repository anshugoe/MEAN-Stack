import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule }    from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { CookieService } from 'ngx-cookie-service';
import { NameComponent } from './name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ProfileComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
