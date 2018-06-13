import { ProductServiceProvider } from './../../providers/product-service/product-service';
import { ServicePage } from './../service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CartPage } from './../cart/cart';
import { HistoryPage } from './../history/history';
import { SurveyPage } from './../survey/survey';
/* import { Http } from '@angular/http'; */
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pageService : any;
  cartObj :any;
  pageCart:any;
  entrepreneurAC:any;
  menuData = [];
  historyPage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductServiceProvider, public storage:Storage, private callNumber: CallNumber) {
    this.getMenuCategories();
    this.pageCart = CartPage;
    this.pageService = ServicePage;
    this.historyPage = HistoryPage;
    this.storage.get('cart').then((resp) => {
      if(resp !== null){
        this.cartObj = resp;
      }
    });
    this.storage.get('entrepreneurBenooId').then((resp) => {
      if(resp !== null){
        this.cartObj = resp;
      }
      console.log(resp);
    }); 
  }

  navGoTo (page) {
    console.log(page);
    if(page == "history") {
      console.log("history");   
      this.navCtrl.push(HistoryPage);  
    } else if(page == "solde") {
      console.log("solde");   
    } 
  }

  ionViewWillEnter() {
    this.storage.get('cart').then((resp) => {
      if(resp !== null){
        this.cartObj = resp;
      }
    });
  }

  getMenuCategories() {
    this.productService.getCategories().subscribe((data)=>{
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

}
