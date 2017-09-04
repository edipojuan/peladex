import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: 'AIzaSyC4gD7LYoKwgJppKD3aCf0VnnKtJ_bu_vM',
  authDomain: 'perna-de-pau.firebaseapp.com',
  databaseURL: 'https://perna-de-pau.firebaseio.com',
  storageBucket: 'perna-de-pau.appspot.com',
  messagingSenderId: '557286403009'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
