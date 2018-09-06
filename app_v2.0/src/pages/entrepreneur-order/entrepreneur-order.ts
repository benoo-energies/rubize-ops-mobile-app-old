import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { GlobalVars } from "../../providers/globalVars";
/**
 * Generated class for the EntrepreneurOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrepreneur-order',
  templateUrl: 'entrepreneur-order.html',
})
export class EntrepreneurOrderPage {

  entrepreneurBenooId  :any;
  entrepreneurTel  :any;
  orders : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private global: GlobalVars, public http: Http, public toastCtrl: ToastController, private alertCtrl: AlertController, public loading: LoadingController) {
    this.entrepreneurBenooId = this.global.getId();
    this.entrepreneurTel = this.global.getTel();
    this.loadOrders(this.global.getId(), this.global.getTel());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrepreneurOrderPage');
  }

  loadOrders(entrepreneurBenooId, entrepreneurTel) {
    var url = this.global.getApiUrl()+'entrepreneurs/orders/'+entrepreneurBenooId+"/history?entrepreneurTel="+entrepreneurTel;
    
    this.http.get(url)
    .map(res => res.json())
    .subscribe((data)=>
    {
        if(data.status) {
          this.orders = data.data;          
        } else {
            // Si erreur 
            console.log("History KO");
            let toast = this.toastCtrl.create({
              message: 'Impossible de récupérer l\'historique des commandes, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
              duration: 5000,
              position: 'bottom',
              cssClass:"danger"
            });           
            toast.present();
        }

    });
  }

  confirmOrder(orderId) {
    console.log("CONFIRM");
    let alert = this.alertCtrl.create({
      title: "Validation réception",
      message: 'Confirmez-vous la réception de votre commande ?',
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
            let loader = this.loading.create({
              content: 'Enregistrement...',
            });      
            loader.present();  
        
            var link = this.global.getApiUrl()+'entrepreneurs/orders/'+this.entrepreneurBenooId+'/'+orderId+'/status';
        
            var data = {
              entrepreneurTel : this.entrepreneurTel,
              entrepreneurId : this.entrepreneurBenooId
            }    
        
            this.http.post(link, data)
            .map(res => res.json())
            .subscribe((data)=>
            {
                console.log(data);
                if(data.status == true) {          
                  loader.dismiss();
                  let toast = this.toastCtrl.create({
                    message: "La réception de votre commande a bien été enregistrée.",
                    duration: 5000,
                    position: 'bottom',
                    cssClass:"success"
                  });           
                  toast.present();
                  this.loadOrders(this.global.getId(), this.global.getTel());

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
                loader.dismiss();
                let toast = this.toastCtrl.create({
                  message: 'Impossible d\'enregistrer la réception de votre commande, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
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
