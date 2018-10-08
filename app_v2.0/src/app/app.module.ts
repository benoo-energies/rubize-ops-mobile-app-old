import { OfflineProductsPage } from './../pages/offline-products/offline-products';
import { OfflineCartPage } from './../pages/offline-cart/offline-cart';
import { OfflineSalesPage } from './../pages/offline-sales/offline-sales';
import { OfflineOrdersPage } from './../pages/offline-orders/offline-orders';
import { EntrepreneurCategoryPage } from './../pages/entrepreneur-category/entrepreneur-category';
import { EntrepreneurOrderPage } from './../pages/entrepreneur-order/entrepreneur-order';
import { EntrepreneurCartPage } from './../pages/entrepreneur-cart/entrepreneur-cart';
import { EntrepreneurProductPage } from './../pages/entrepreneur-product/entrepreneur-product';
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
import { ClientPageModule } from './../pages/client/client.module';
import { SurveyPage } from '../pages/survey/survey';
import { MenuPage } from '../pages/menu/menu';
import { GlobalSurveyPage } from '../pages/global-survey/global-survey';
import { Network } from '@ionic-native/network';
import { GlobalVars } from '../providers/globalVars';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ServicePage,
    CartPage,
    HistoryPage,
    SurveyPage,
    GlobalSurveyPage,
    EntrepreneurProductPage,
    EntrepreneurCartPage,
    EntrepreneurOrderPage,
    EntrepreneurCategoryPage,
    MenuPage,
    OfflineOrdersPage,
    OfflineSalesPage,
    OfflineCartPage,
    OfflineProductsPage
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
    GlobalSurveyPage,
    EntrepreneurProductPage,
    EntrepreneurCartPage,
    EntrepreneurOrderPage,
    EntrepreneurCategoryPage,
    MenuPage,
    OfflineOrdersPage,
    OfflineSalesPage,
    OfflineCartPage,
    OfflineProductsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductServiceProvider,
    Geolocation,
    Network,
    CallNumber,
    GlobalVars
  ]
})
export class AppModule {}
