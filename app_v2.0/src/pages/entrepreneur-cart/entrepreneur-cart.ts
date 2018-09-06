import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVars } from "../../providers/globalVars";
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { EntrepreneurOrderPage } from './../entrepreneur-order/entrepreneur-order';

/**
 * Generated class for the EntrepreneurCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrepreneur-cart',
  templateUrl: 'entrepreneur-cart.html',
})
export class EntrepreneurCartPage {
  entCartObj         :any;
  entCartTotal       :any;
  entrepreneurTel :any;
  entrepreneurBenooId  :any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private global: GlobalVars, private alertCtrl: AlertController, public loading: LoadingController, public http: Http, public toastCtrl: ToastController) {
    this.entCartTotal = 0;
    this.entCartTotal = 0;
    this.storage.get('entCart').then((resp) => {
      console.log(resp);
      if(resp !== null){
        this.entCartObj = resp;    
        this.entCartObj.products.forEach(function (obj) {
          console.log(obj);
          if( obj && obj.price && obj.qty) { this.entCartTotal+= obj.price * obj.qty; }
          console.log(this.entCartTotal);
        }, this);        
      }
    });  
    this.entrepreneurBenooId = this.global.getId();
    this.entrepreneurTel = this.global.getTel();    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrepreneurCartPage');
  }

  ionViewWillEnter() {
    this.storage.get('entCart').then((resp) => {
      if(resp !== null){
        this.entCartObj = resp;
      }
    });
  }

  emptyCart() {
    console.log("EMPTY");
    this.entCartObj = { products:[],totalProduct:0};
    this.storage.set('entCart', this.entCartObj);   
  }

  validateOrder() {
    let alert = this.alertCtrl.create({
      title: "Validation commande",
      message: 'Confirmez-vous votre commande ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Commander',
          handler: () => {
            let loader = this.loading.create({
              content: 'Envoi de la commande...',
            });      
            loader.present();  
        
            var link = this.global.getApiUrl()+'entrepreneurs/orders/'+this.entrepreneurBenooId+'/create';
        
            var data = {
              entrepreneurTel : this.entrepreneurTel,
              entrepreneurId : this.entrepreneurBenooId,
              products : this.entCartObj.products,
              total : this.entCartTotal
            }    
        
            this.http.post(link, data)
            .map(res => res.json())
            .subscribe((data)=>
            {
                console.log(data);
                if(data.status == true) {          
                  loader.dismiss();
                  let toast = this.toastCtrl.create({
                    message: "Votre commande a bien été enregistrée.",
                    duration: 5000,
                    position: 'bottom',
                    cssClass:"success"
                  });           
                  toast.present();
                  this.entCartObj = { products:[],totalProduct:0};
                  this.storage.set('entCart', this.entCartObj);   
                  
                  this.navCtrl.push(EntrepreneurOrderPage);
        
                } else {
                  loader.dismiss();
                  let toast = this.toastCtrl.create({
                    message: data.error,
                    duration: 5000,
                    position: 'bottom',
                    cssClass:"danger"
                  });           
                  toast.present();
                }
            }, error => {
              console.log(error);
                console.log("Impossible d'envoyer la commande !");
                loader.dismiss();
                let toast = this.toastCtrl.create({
                  message: 'Impossible d\'enregistrer la commande, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
                  duration: 5000,
                  position: 'bottom',
                  cssClass:"danger"
                });           
                toast.present();
            }); 
          }
        }
      ]
    });
    alert.present();
  }
}
