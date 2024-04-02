import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from './userComponent/user-signup/user-signup.component';
import { UserLoginComponent } from './userComponent/user-login/user-login.component';
import { SetupPageComponent } from './userComponent/setup-page/setup-page.component';

const routes: Routes = [
  {path:'', component: UserLoginComponent},
  {path:'signUp', component: UserSignupComponent},
  {path:'signUp2', component: SetupPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
