import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './signin/signin.component';
import { SignOutComponent } from './sign-out/sign-out.component';



const routes: Routes = [
  {path: 'signup', component: SignUpComponent},
  {path: '', component: SigninComponent},
  {path: 'signout', component:SignOutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
