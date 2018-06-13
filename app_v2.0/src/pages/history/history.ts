import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
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

  entrepreneurAC:any;
  entrepreneurBenooId  :any;
  dataHistory : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public http: Http, public toastCtrl: ToastController) {
    this.storage.get('entrepreneurBenooId').then((resp) => {
      if(resp !== null){ 
        this.entrepreneurBenooId = resp; 
        this.loadHistory(resp);
      }
    });
    this.storage.get('entrepreneurAC').then((resp) => {
      if(resp !== null){ this.entrepreneurAC = resp; }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  loadHistory(entrepreneurBenooId) {
    var url = 'https://benoo-v2-api.herokuapp.com/api/entrepreneur/history/'+entrepreneurBenooId;
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
