import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { HomeComponent } from './_components/home/home.component';
import {RouterModule} from '@angular/router';
import { AlertComponent } from './_components/alert/alert.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {appRoutingModule} from './app.routing';
import {AuthService} from './_services/auth.service';
import {AlertService} from './_services/alert.service';
import { ClockComponent } from './_components/clock/clock.component';
import {EqualValidator} from './_directives/equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AlertComponent,
    ClockComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    appRoutingModule,
    FormsModule
  ],
  providers: [
    AlertService,
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
