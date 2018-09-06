import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';

import { GlobalVars } from "../../providers/globalVars";
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  entrepreneurBenooId  :any;
  entrepreneurTel  :any;
  dataHistory : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public http: Http, public toastCtrl: ToastController, private global: GlobalVars) {
    this.entrepreneurBenooId = this.global.getId();
    this.entrepreneurTel = this.global.getTel();           
    this.loadHistory(this.global.getId(), this.global.getTel());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  loadHistory(entrepreneurBenooId, entrepreneurTel) {
    var url = this.global.getApiUrl()+'entrepreneur/history/'+entrepreneurBenooId+"?entrepreneurTel="+entrepreneurTel;
    console.log(entrepreneurBenooId);
    this.http.get(url)
    .map(res => res.json())
    .subscribe((data)=>
    {
        console.log(data);
        console.log(data.status);
        if(data.status) {
          this.dataHistory = data.data;          
        } else {
            // Si erreur 
            console.log("History KO");
            let toast = this.toastCtrl.create({
              message: 'Impossible de récupérer l\'historique des transactions, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
              duration: 5000,
              position: 'bottom',
              cssClass:"danger"
            });           
            toast.present();
        }

    });
  }
}
