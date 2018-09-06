import { EntrepreneurProductPage } from './../entrepreneur-product/entrepreneur-product';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EntrepreneurCartPage } from './../entrepreneur-cart/entrepreneur-cart';
import { GlobalVars } from "../../providers/globalVars";

import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ProductServiceProvider } from './../../providers/product-service/product-service';
/**
 * Generated class for the EntrepreneurCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrepreneur-category',
  templateUrl: 'entrepreneur-category.html',
})
export class EntrepreneurCategoryPage {

  pageProduct : any;
  entCartObj :any;
  menuData = [];
  entrepreneurBenooId:any;
  entrepreneurTel:any;
  entCartPage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductServiceProvider, private global: GlobalVars, public storage:Storage) {
    this.entrepreneurBenooId = this.global.getId();
    this.entrepreneurTel = this.global.getTel();
    this.pageProduct = EntrepreneurProductPage;
    this.entCartPage = EntrepreneurCartPage;

    this.storage.get('entCart').then((resp) => {
      if(resp !== null){ this.entCartObj = resp; } 
      else {
        this.entCartObj = { products:[],totalProduct:0};
      }
    });     
    this.getMenuCategories(this.global.getId(),this.global.getTel());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrepreneurCategoryPage');
  }

  getMenuCategories(entrepreneurId, entrepreneurTel) {
    this.productService.getCategories(entrepreneurId, entrepreneurTel).subscribe((data)=>{
      this.menuData = data.data;
    });
  }  

  ionViewWillEnter() {
    this.storage.get('entCart').then((resp) => {
      if(resp !== null){
        this.entCartObj = resp;
      }
    });
  }
    
}
