import { EntrepreneurCategoryPage } from './../entrepreneur-category/entrepreneur-category';
import { EntrepreneurOrderPage } from './../entrepreneur-order/entrepreneur-order';
import { EntrepreneurProductPage } from './../entrepreneur-product/entrepreneur-product';
import { ProductServiceProvider } from './../../providers/product-service/product-service';
import { ServicePage } from './../service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CartPage } from './../cart/cart';
import { HistoryPage } from './../history/history';
import { SurveyPage } from './../survey/survey';
import { LoginPage } from './../login/login';
import { Http } from '@angular/http';

import { CallNumber } from '@ionic-native/call-number';
import { GlobalVars } from "../../providers/globalVars";
import { MenuPage } from '../menu/menu';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pageService : any;
  cartObj :any;
  pageCart:any;
  menuData = [];
  historyPage:any;
  orderPage:any;
  entrepreneurBenooId:any;
  entrepreneurTel:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private productService: ProductServiceProvider, public storage:Storage, private callNumber: CallNumber, private global: GlobalVars) {
    this.pageCart = CartPage;
    this.pageService = ServicePage;
    this.historyPage = HistoryPage;
    this.orderPage = EntrepreneurOrderPage;
    this.storage.get('cart').then((resp) => {
      if(resp !== null){
        this.cartObj = resp;
      }
    });
    this.entrepreneurBenooId = this.global.getId();
    this.entrepreneurTel = this.global.getTel();
    this.getMenuCategories(this.global.getId(),this.global.getTel());
  }

  navGoTo (page) {
    console.log(page);
    if(page == "history") {
      this.navCtrl.push(HistoryPage);
    } else if(page == "menu") {
      this.navCtrl.setRoot(MenuPage);
    } else if(page == "entrepreneur-product") {
      //this.navCtrl.push(EntrepreneurProductPage);  
      this.navCtrl.push(EntrepreneurCategoryPage);
    } else if(page == "entrepreneur-order") {
      this.navCtrl.push(EntrepreneurOrderPage);  
    } 
  }
  ionViewDidLoad() {
  }
  ionViewWillEnter() {
    /* if(this.entrepreneurBenooId != null && this.entrepreneurTel != null) {
    } */
    this.storage.get('cart').then((resp) => {
      if(resp !== null){
        this.cartObj = resp;
      }
    });

  }

  getMenuCategories(entrepreneurId, entrepreneurTel) {
    this.productService.getCategories(entrepreneurId, entrepreneurTel).subscribe((data)=>{
      this.menuData = data.data;
    });
  }  

  displaySurvey() {
    console.log("SURVEY");
    this.navCtrl.push(SurveyPage);
  }

  callMaintenance() {
    console.log("CALL");
    this.callNumber.callNumber("+22892693718", true)
    .catch(() => console.log('Error launching dialer'));
  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
  }




}
