import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatInputModule,
  MatToolbarModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginBarComponent } from './loginBar/loginBar.component';
import { UserComponent} from './auth/user/user.component';
import { ChangeUserComponent } from './auth/changeUser/changeUser.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginBarComponent,
    UserComponent,
    ChangeUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
