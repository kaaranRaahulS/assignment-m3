import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
let config = {
    apiKey: "AIzaSyDtTBFY-XFkwqDzBttR91Fq1rO-M3Mknic",
    authDomain: "blogie-8fa47.firebaseapp.com",
    databaseURL: "https://blogie-8fa47.firebaseio.com",
    projectId: "blogie-8fa47",
    storageBucket: "blogie-8fa47.appspot.com",
    messagingSenderId: "707723086983"
  };
  firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
