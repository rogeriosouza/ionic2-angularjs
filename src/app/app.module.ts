import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ListaProdutoPage} from "../pages/lista-produto/lista-produto";
import { AngularFireDatabaseProvider} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthProvider} from "angularfire2/auth";
import {EditarProdutoPage} from "../pages/editar-produto/editar-produto";
import {FormsModule} from "@angular/forms";




export const  firebaseConfig= {
  apiKey: "AIzaSyDnhx-pw-3IHxPkWI7vJPx-kbGCs6KpDvA",
  authDomain: "listadeprodutos-83d68.firebaseapp.com",
  databaseURL: "https://listadeprodutos-83d68.firebaseio.com",
  projectId: "listadeprodutos-83d68",
  storageBucket: "listadeprodutos-83d68.appspot.com",
  messagingSenderId: "184108260215"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaProdutoPage,
    EditarProdutoPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaProdutoPage,
    EditarProdutoPage

  ],
  //add angularfiredbprov e authprovider
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabaseProvider,
    AngularFireAuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}
