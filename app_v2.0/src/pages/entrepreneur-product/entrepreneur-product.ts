import { EntrepreneurCartPage } from './../entrepreneur-cart/entrepreneur-cart';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GlobalVars } from "../../providers/globalVars";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/**
 * Generated class for the EntrepreneurProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrepreneur-product',
  templateUrl: 'entrepreneur-product.html',
})
export class EntrepreneurProductPage {

  entrepreneurBenooId:any;
  entrepreneurTel:any;
  products:any;
  entCartObj:any;
  entCartPage:any;
  catName:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, private global: GlobalVars,public http: Http) {
    this.entrepreneurBenooId = this.global.getId();
    this.entrepreneurTel = this.global.getTel();

    this.catName = this.navParams.data.typeName;
    this.entCartPage = EntrepreneurCartPage;
    this.storage.get('entCart').then((resp) => {
      if(resp !== null){ this.entCartObj = resp; } 
      else {
        this.entCartObj = { products:[],totalProduct:0};
      }
    });   

    this.loadProducts();    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrepreneurProductPage');
  }

  ionViewWillEnter() {
    this.storage.get('entCart').then((resp) => {
      if(resp !== null){
        this.entCartObj = resp;
      }
    });
  }
  
  loadProducts() {

    // SI CONNEXION Récupération de la liste des villages
    var link = this.global.getApiUrl()+'entrepreneurs/products/'+this.navParams.data.typeId+'?entrepreneurTel='+this.entrepreneurTel;
    this.http.get(link)
    .map(res => res.json())
    .subscribe((data)=> {
      console.log(data);
      if(data && data.status) {
        this.products = data.data;
        console.log(data.data);
      }
    }, error => {
      console.log(error);
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
    this.storage.set('entCart', item).then((data) => {
      this.entCartObj = data;
    });
  }
  
  removeItemToCart(cartObj, productId, productTitle, productPrice, productPicture, productDecimal ) {
    var item:any = cartObj;
    if(productDecimal == 0) { 
      var newVal:number = +(item.products[productId].qty - 1).toFixed(1);
      if(newVal > 0) {
        item.products[productId] = {id:productId, title:productTitle, price:productPrice, picture:productPicture, qty:newVal};
      } else {
        item.products[productId] = null;
      }
    } else {
      var newVal:number = +(item.products[productId].qty - 0.1).toFixed(1);
      if(newVal > 0) {
        item.products[productId] = {id:productId, title:productTitle, price:productPrice, picture:productPicture, qty:newVal};
      } else {        
        item.products[productId] = null;
      }
    }      
    item.totalProduct = item.totalProduct - 1;
    this.storage.set('entCart', item).then((data) => {
      this.entCartObj = data;
    });    
  }  
}
