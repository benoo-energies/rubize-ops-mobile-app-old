import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryPage } from './../history/history';
import { HomePage } from './../home/home';
import { EntrepreneurCategoryPage } from './../entrepreneur-category/entrepreneur-category';
import { EntrepreneurOrderPage } from './../entrepreneur-order/entrepreneur-order';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { Http } from '@angular/http';

import { CallNumber } from '@ionic-native/call-number';
import { GlobalVars } from "../../providers/globalVars";
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  entrepreneurBenooId:any;
  entrepreneurTel:any;
  offlineSales:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber, public http: Http, private global: GlobalVars, public storage: Storage,public toastCtrl: ToastController, public loading: LoadingController) {
    this.entrepreneurBenooId = this.global.getId();
    this.entrepreneurTel = this.global.getTel();
    this.storeEntrepreneurData(this.entrepreneurBenooId,this.entrepreneurTel);
    this.storage.get('offlineSales').then((resp) => {
      if(resp !== null){
        this.offlineSales = resp;
        console.log(resp);
 
      }
    });     
  }

  ionViewWillEnter() {
    this.storeEntrepreneurData(this.entrepreneurBenooId,this.entrepreneurTel);
    this.storage.get('offlineSales').then((resp) => {
      if(resp !== null){
        this.offlineSales = resp;
        console.log(resp);
 
      }
    });     

    if(this.offlineSales != null) {
      // AFFICAHGE DE LA POPIN D'ALERTE
      if(this.offlineSales.length >= 50) {
        let toast = this.toastCtrl.create({
          message: "Vous avez enregistré "+this.offlineSales.length+" ventes hors-ligne, pensez à synchroniser vos ventes dès que possible.",
          duration: 5000,
          position: 'top',
          cssClass:"danger"
        });           
        toast.present();
      }
    }  
  }

  navGoTo (page) {
    console.log(page);
    if(page == "history") {
      console.log("history");   
      this.navCtrl.push(HistoryPage);  
    } else if(page == "home") {
      this.navCtrl.push(HomePage);  
    } else if(page == "entrepreneur-product") {
      //this.navCtrl.push(EntrepreneurProductPage);  
      this.navCtrl.push(EntrepreneurCategoryPage);  
    } else if(page == "entrepreneur-order") {
      this.navCtrl.push(EntrepreneurOrderPage);  
    } 
  }

  callMaintenance() {
    console.log("CALL");
    this.callNumber.callNumber("+22892693718", true)
    .catch(() => console.log('Error launching dialer'));
  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
    this.storage.set('benoo_entrepreneur_id', null);
    this.storage.set('benoo_entrepreneur_tel', null);
    this.global.setId(null);
    this.global.setTel(null);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  storeEntrepreneurData(entrepreneurId, entrepreneurTel) {
    console.log('STORE');
    // Stockage des produits de l'entrepreneur
    var link = this.global.getApiUrl()+'entrepreneur/data/products/' + entrepreneurId + "?entrepreneurTel=" + entrepreneurTel;
    this.http.get(link)
    .map(res => res.json())
    .subscribe((data)=> {
      console.log(data);
      if(data && data.status) {
        let products = data.data;
        this.storage.set('entrepreneur_products', products);
        console.log(products);
      }
    }, error => {
      console.log(error);
    });

    // Stockage des commandes de l'entrepreneur
    var link = this.global.getApiUrl()+'entrepreneurs/orders/' + entrepreneurId + "/history?entrepreneurTel=" + entrepreneurTel;
    this.http.get(link)
    .map(res => res.json())
    .subscribe((data)=> {
      console.log(data);
      if(data && data.status) {
        let orders = data;
        this.storage.set('entrepreneur_orders', orders);
        console.log(orders);
      }
    }, error => {
      console.log(error);
    });
  }


  postOfflineSales() {
    let loader = this.loading.create({
      content: 'Synchronisation en cours...',
    });      
    loader.present();      
    var link = this.global.getApiUrl()+'order/'+this.entrepreneurBenooId+'/offline/create?entrepreneurTel='+this.entrepreneurTel;
    console.log(link);
    var offlineData = {
      carts : this.offlineSales,
      entrepreneurTel : this.entrepreneurTel
    }
      this.http.post(link, offlineData)
      .map(res => res.json())
      .subscribe((data)=>
      {
        
          if(data.status == true) {
              loader.dismiss();
              // CHECK SI ERREUR
                this.offlineSales = null;
                this.storage.set('offlineSales',null);             
                let toast = this.toastCtrl.create({
                  message: "Vente(s) synchronisée(s) avec succès !",
                  duration: 5000,
                  position: 'bottom',
                  cssClass:"success"
                });           
                toast.present();
          } else {
              loader.dismiss();
              this.offlineSales = data.offlineSales;
    
              this.storage.set('offlineSales', data.offlineSales);
              
              let toast = this.toastCtrl.create({
                message: "Toutes les ventes n'ont pas pu être synchronisées. Veuillez vérifier votre connexion et réessayer.",
                duration: 5000,
                position: 'bottom',
                cssClass:"danger"
              });           
              toast.present();        
          }
         

      }, error => {
          loader.dismiss();
          let toast = this.toastCtrl.create({
            message: "Toutes les ventes n'ont pas pu être synchronisées. Veuillez vérifier votre connexion et réessayer.",
            duration: 5000,
            position: 'bottom',
            cssClass:"danger"
          });           
          toast.present();             
      });
      
  }

}
