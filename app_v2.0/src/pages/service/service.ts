import { CartPage } from './../cart/cart';
import { ProductServiceProvider } from './../../providers/product-service/product-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GlobalVars } from "../../providers/globalVars";
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
  entrepreneurBenooId:any;
  entrepreneurTel:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public productService: ProductServiceProvider, public storage:Storage, private global: GlobalVars) {
    this.pageCart = CartPage;
    this.serviceName = this.navParams.data.typeName;
    
    this.storage.get('cart').then((resp) => {
      if(resp !== null){ this.cartObj = resp; }
    });   

    this.entrepreneurBenooId = this.global.getId();
    this.entrepreneurTel = this.global.getTel();
    this.getProducts(this.navParams.data.typeId, this.global.getId(),this.global.getTel());
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }

  ionViewWillEnter() {
    this.storage.get('cart').then((resp) => {
      if(resp !== null){
        this.cartObj = resp;
      }
    });
  }

  getProducts(id, entrepreneurId, entrepreneurTel) {
    this.productService.getProductByType(id, entrepreneurId, entrepreneurTel).subscribe((data)=>{
      this.servicesData = data.data;
    });
  }

  addItemToCart(cartObj, productId, productTitle, productPrice, productPicture, productDecimal) {
    var item:any = cartObj;
    console.log(productId);

    if(item.products[productId]) {
      var newVal:number;
      if(productDecimal == 0) { 
        newVal = item.products[productId].qty + 1;
        item.totalProduct = item.totalProduct + 1;
      } else {
        newVal = +(item.products[productId].qty + 0.1).toFixed(1);
      }      
      item.products[productId] = {id:productId, title:productTitle, price:productPrice, picture:productPicture, qty:newVal};
    } else {
      if(productDecimal == 0) { newVal = 1;  } else { newVal = 1; }
      item.products[productId] = {id:productId, title:productTitle, price:productPrice, picture:productPicture, qty:newVal};
      item.totalProduct = item.totalProduct + 1;
    }

    this.storage.set('cart', item).then((data) => {
      this.cartObj = data;
      console.log(data);
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

      item.totalProduct = item.totalProduct - 1;
    } else {
      newVal = +(item.products[productId].qty - 0.1).toFixed(1);
      if(newVal > 0) {
        item.products[productId] = {id:productId, title:productTitle, price:productPrice, picture:productPicture, qty:newVal};
      } else {
        item.products[productId] = null;
        item.totalProduct = item.totalProduct - 1;
      }
    }    
    this.storage.set('cart', item).then((data) => {
      this.cartObj = data;
    });    
  }


}
