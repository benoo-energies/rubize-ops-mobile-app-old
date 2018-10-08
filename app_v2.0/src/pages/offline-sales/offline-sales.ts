import { OfflineProductsPage } from './../offline-products/offline-products';
import { OfflineCartPage } from './../offline-cart/offline-cart';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OfflineSalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offline-sales',
  templateUrl: 'offline-sales.html',
})
export class OfflineSalesPage {
  menuData : any;
  offlineCart : any;
  offlineCartPage : any;
  offlineProductPage : any;

  constructor(public storage: Storage) {
    this.loadcategory();
    this.offlineCartPage = OfflineCartPage;
    this.offlineProductPage = OfflineProductsPage;
    this.storage.get('offlineCart').then((resp) => {
      if(resp !== null){
        this.offlineCart = resp;
        console.log(resp);
      }
    });    
  }

  loadcategory() {
    this.storage.get('entrepreneur_products').then((resp) => {
      if(resp !== null){
        this.menuData = resp;
        console.log(resp);
      }
    });
  }

  ionViewWillEnter() {
    this.loadcategory();
    this.storage.get('offlineCart').then((resp) => {
      if(resp !== null){
        this.offlineCart = resp;
        console.log(resp);
      }
    });    
  }

}
