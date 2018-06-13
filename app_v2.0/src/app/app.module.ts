import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';

import { MyApp } from './app.component';
import { LoginPage } from './../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ServicePage } from '../pages/service/service';
import { ProductServiceProvider } from '../providers/product-service/product-service';
import { CartPage } from '../pages/cart/cart';
import { HistoryPage } from './../pages/history/history';
import { ClientPage } from './../pages/client/client';
import { ClientPageModule } from './../pages/client/client.module';
import { SurveyPage } from '../pages/survey/survey';
import { GlobalSurveyPage } from '../pages/global-survey/global-survey';
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ServicePage,
    CartPage,
    HistoryPage,
    SurveyPage,
    GlobalSurveyPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ClientPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ServicePage,
    CartPage,
    HistoryPage,
    SurveyPage,
    GlobalSurveyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductServiceProvider,
    Geolocation,
    Network,
    CallNumber
  ]
})
export class AppModule {}
