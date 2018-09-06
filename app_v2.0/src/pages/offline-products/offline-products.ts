import { OfflineCartPage } from './../offline-cart/offline-cart';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OfflineProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offline-products',
  templateUrl: 'offline-products.html',
})
export class OfflineProductsPage {
  servicesData = [];
  serviceName:string;
  offlineCart : any;
  offlineCartPage : any;
  offlineProductPage : any;

  constructor(public storage: Storage, public navParams: NavParams) {
    this.loadProducts(this.navParams.data.typeId);
    this.serviceName = this.navParams.data.serviceNamme;
    this.offlineCartPage = OfflineCartPage;
    this.storage.get('offlineCart').then((resp) => {
      if(resp !== null){
        this.offlineCart = resp;
      }
    });    
  }

  loadProducts(ind) {
    this.storage.get('entrepreneur_products').then((resp) => {
      if(resp !== null){
        this.servicesData = resp[ind].products;
      }
    });
  }

  ionViewWillEnter() {
    this.loadProducts(this.navParams.data.typeId);
    this.storage.get('offlineCart').then((resp) => {
      if(resp !== null){
        this.offlineCart = resp;
      }
    });    
  }


  addItemToCart(cartObj, productId, productTitle, productPrice, productPicture, productDecimal) {
    var item:any = cartObj;

    if(item.products[productId]) {
      var newVal:number;
      if(productDecimal == 0) { 
        newVal = item.products[productId].qty + 1;
      } else {
        newVal = +(item.products[productId].qty + 0.1).toFixed(1);
      }      
      item.products[productId] = {id:productId, title:productTitle, price:productPrice, picture:productPicture, qty:newVal};
    } else {
      if(productDecimal == 0) { newVal = 1;  } else { newVal = 0.1; }
      item.products[productId] = {id:productId, title:productTitle, price:productPrice, picture:productPicture, qty:newVal};
    }

    item.totalProduct = item.totalProduct + 1;
    this.storage.set('offlineCart', item).then((data) => {
      this.offlineCart = data;
    });
  }
  
  removeItemToCart(cartObj, productId, productTitle, productPrice, productPicture, productDecimal ) {
    console.log(productId);
    var item:any = cartObj;
    var newVal:number;
    if(productDecimal == 0) { 
      newVal = item.products[productId].qty - 1;
      if(newVal > 0) {
        item.products[productId] = {id:productId, title:productTitle, price:productPrice, picture:productPicture, qty:newVal};
      } else {
        item.products[productId] = null;
      }
    } else {
      newVal = +(item.products[productId].qty - 0.1).toFixed(1);
      if(newVal > 0) {
        item.products[productId] = {id:productId, title:productTitle, price:productPrice, picture:productPicture, qty:newVal};
      } else {
        item.products[productId] = null;
      }
    }    
    item.totalProduct = item.totalProduct - 1;
    this.storage.set('offlineCart', item).then((data) => {
      this.offlineCart = data;
    });    
  }

}
