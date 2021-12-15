import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './app/nav-bar/nav-bar.component';
import { WelcomeComponent } from './app/welcome/welcome.component';
import { HomeComponent } from './app/home/home.component';
const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'nav', component: NavBarComponent},
  {path:'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
