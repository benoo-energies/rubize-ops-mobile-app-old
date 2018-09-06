import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the OfflineCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offline-cart',
  templateUrl: 'offline-cart.html',
})
export class OfflineCartPage {
  offlineCart : any;
  cartTotal : any;
  offlineSales : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public toastCtrl: ToastController, public loading: LoadingController, private alertCtrl: AlertController) {
    this.cartTotal = 0;
    this.getCart();
  }

  getCart() {
    this.storage.get('offlineCart').then((resp) => {
      if(resp !== null){
        this.offlineCart = resp;
        this.offlineCart.products.forEach(function (obj) {
          if( obj && obj.price && obj.qty) { this.cartTotal+= obj.price * obj.qty; }
        }, this);
      }
    });
  }
  
  ionViewWillEnter() {
    this.getCart();
  }


  emptyCart() {
    console.log("EMPTY");
    this.offlineCart = { products:[],totalProduct:0};
    this.storage.set('offlineCart', this.offlineCart);   
  }

  sendPayment() {

    let alert = this.alertCtrl.create({
      title: "Validation vente",
      message: 'Confirmez-vous le paiement de votre vente ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.storage.get('offlineSales').then((resp) => {
              console.log(resp);
              let tmpJson = [{
                date:Math.floor(Date.now() / 1000),
                detail : this.offlineCart
              }];              

              if(resp !== null){
                this.offlineSales = resp;
              } else {
                this.offlineSales = [];
              }
              this.offlineSales.push(tmpJson);
              this.storage.set('offlineSales', this.offlineSales);   
              loader.dismiss();
              this.emptyCart();
            });
    
            let loader = this.loading.create({
              content: 'Enregistrement de la vente...',
            });      
            loader.present();  
    
          }
        }
      ]
    });
    alert.present();
  }  
}
