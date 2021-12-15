import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './app/welcome/welcome.component';
import { NavBarComponent } from './app/nav-bar/nav-bar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './app/home/home.component';
import { SidebarComponent } from './app/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavBarComponent,
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
