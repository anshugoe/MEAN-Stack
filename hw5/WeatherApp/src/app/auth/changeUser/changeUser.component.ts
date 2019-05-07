import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './changeUser.component.html',
  styleUrls: ['./changeUser.component.css']
})

export class ChangeUserComponent implements OnInit, OnDestroy {
  user = null;
  private userSub: Subscription;
  private authStatusSub: Subscription;
  userIsAuthenticated = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.getUser();
    this.userSub = this.authService.getUserUpdateListener()
      .subscribe((user) => {
          this.user = user;
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      }
    );
  }

  onEditUser(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value.city);
    this.authService.editUser(form.value.city);
  }



  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }

}
