import { CartPage } from './../cart/cart';
import { ProductServiceProvider } from './../../providers/product-service/product-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {

  servicesData = [];
  serviceName:string;
  cartObj:any;
  pageCart:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public productService: ProductServiceProvider, public storage:Storage) {
    this.pageCart = CartPage;
    this.serviceName = this.navParams.data.typeName;
    this.getProducts(this.navParams.data.typeId);
    this.storage.get('cart').then((resp) => {
      if(resp !== null){ this.cartObj = resp; }
    });   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }

  ionViewWillEnter() {
    console.log("back");
    this.storage.get('cart').then((resp) => {
      if(resp !== null){
        this.cartObj = resp;
      }
    });
  }

  getProducts(id) {
    this.productService.getProductByType(id).subscribe((data)=>{
      this.servicesData = data.data;
    });
  }

  addItemToCart(cartObj, productId, productTitle, productPrice, productPicture) {
    var item:any = cartObj;

    if(item.products[productId]) {
      var newVal:number = item.products[productId].qty + 1;
      item.products[productId] = {id:productId, title:productTitle, price:productPrice, picture:productPicture, qty:newVal};
    } else {
      item.products[productId] = {id:productId, title:productTitle, price:productPrice, picture:productPicture, qty:1};
    }

    item.totalProduct = item.totalProduct + 1;
    this.storage.set('cart', item).then((data) => {
      this.cartObj = data;
      console.log(data);
    });
  }
  
  removeItemToCart(cartObj, productId, productTitle, productPrice, productPicture ) {
    var item:any = cartObj;
    var newVal:number = item.products[productId].qty - 1;
    if(newVal > 0) {
      item.products[productId] = {id:productId, title:productTitle, price:productPrice, picture:productPicture, qty:newVal};
    } else {
      item.products.splice(productId, 1);
    }
    item.totalProduct = item.totalProduct - 1;
    this.storage.set('cart', item).then((data) => {
      this.cartObj = data;
    });    
  }


}
