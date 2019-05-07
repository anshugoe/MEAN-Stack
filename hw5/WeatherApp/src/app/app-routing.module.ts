import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './auth/user/user.component';
import { ChangeUserComponent } from './auth/changeUser/changeUser.component';

const routes: Routes = [
  { path: '', component: UserComponent},
  { path: 'editProfile', component: ChangeUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
