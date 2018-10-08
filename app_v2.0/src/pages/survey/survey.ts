import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

import { GlobalVars } from "../../providers/globalVars";
/**
 * Generated class for the SurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {
  entrepreneurTel : any;
  entrepreneurBenooId  :any;
  clientLastname : any;
  clientFirstname : any;
  clientSituation : any;
  clientTel : any;
  clientJob : any;
  clientJob2 : any;
  clientFoyer : any;
  dispo_lampe : any;
  dispo_torche : any;
  dispo_bougie : any;
  dispo_ampoule : any;
  dispo_ventilateur : any;
  dispo_tel : any;
  dispo_clim : any;
  dispo_radio : any;
  dispo_machine_laver : any;
  dispo_frigo : any;
  dispo_congelateur : any;
  dispo_tv : any;
  dispo_dvd : any;
  dispo_tondeuse : any;
  dispo_machine_broder : any;
  dispo_machine_pleinte : any;
  dispo_machine_coudre : any;
  dispo_scie_circulaire : any;
  dispo_scie_sauteuse : any;
  dispo_toupie : any;
  dispo_raboteuse : any;
  dispo_fraise : any;
  dispo_moulin : any;
  dispo_arc_souder : any;
  dispo_ponceuse : any;
  wish_ampoule : any;
  wish_ventilateur : any;
  wish_tel : any;
  wish_clim : any;
  wish_radio : any;
  wish_machine_laver : any;
  wish_frigo : any;
  wish_congelateur : any;
  wish_tv : any;
  wish_dvd : any;
  wish_tondeuse : any;
  wish_machine_broder : any;
  wish_machine_pleinte:any;
  wish_machine_coudre : any;
  wish_scie_circulaire : any;
  wish_scie_sauteuse : any;
  wish_toupie : any;
  wish_raboteuse : any;
  wish_fraise : any;
  wish_moulin : any;
  wish_arc_souder : any;
  wish_ponceuse : any;
  clientKit : any;
  clientKitP : any;
  clientCeet : any;
  clientCeetTranche : any;
  clientGE : any;
  clientGEP : any;
  clientReseau : any;
  clientReseauP : any;
  telephoneOperator : any;
  telephoneOperator2 : any;
  telephoneCost : any;
  latitude : any;
  longitude : any;

  constructor(public navCtrl: NavController, public storage: Storage, public http: Http, public navParams: NavParams, public toastCtrl: ToastController, public loading: LoadingController, private alertCtrl: AlertController, private global: GlobalVars) {
    this.entrepreneurBenooId = this.global.getId();
    this.entrepreneurTel = this.global.getTel();           
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyPage');
  }

  saveSurvey() {
    console.log('SAVE SURVEY');
    var link = this.global.getApiUrl()+'survey/'+this.entrepreneurBenooId+'/create';

    let loader = this.loading.create({
      content: 'Enregistrement de l\'enquête...',
    });      
    loader.present(); 

    var data = {
      entrepreneurTel : this.entrepreneurTel,
      clientLastname : this.clientLastname,
      clientFirstname : this.clientFirstname,
      clientSituation : this.clientSituation,
      clientTel : this.clientTel,
      clientJob : this.clientJob,
      clientJob2 : this.clientJob2,
      clientFoyer : this.clientFoyer,
      dispo_lampe : this.dispo_lampe,
      dispo_torche : this.dispo_torche,
      dispo_bougie : this.dispo_bougie,
      dispo_ampoule : this.dispo_ampoule,
      dispo_ventilateur : this.dispo_ventilateur,
      dispo_tel : this.dispo_tel,
      dispo_clim : this.dispo_clim,
      dispo_radio : this.dispo_radio,
      dispo_machine_laver : this.dispo_machine_laver,
      dispo_frigo : this.dispo_frigo,
      dispo_congelateur : this.dispo_congelateur,
      dispo_tv : this.dispo_tv,
      dispo_dvd : this.dispo_dvd,
      dispo_tondeuse : this.dispo_tondeuse,
      dispo_machine_broder : this.dispo_machine_broder,
      dispo_machine_pleinte : this.dispo_machine_pleinte,
      dispo_machine_coudre : this.dispo_machine_coudre,
      dispo_scie_circulaire : this.dispo_scie_circulaire,
      dispo_scie_sauteuse : this.dispo_scie_sauteuse,
      dispo_toupie : this.dispo_toupie,
      dispo_raboteuse : this.dispo_raboteuse,
      dispo_fraise : this.dispo_fraise,
      dispo_moulin : this.dispo_moulin,
      dispo_arc_souder : this.dispo_arc_souder,
      dispo_ponceuse : this.dispo_ponceuse,
      wish_ampoule : this.wish_ampoule,
      wish_ventilateur : this.wish_ventilateur,
      wish_tel : this.wish_tel,
      wish_clim : this.wish_clim,
      wish_radio : this.wish_radio,
      wish_machine_laver : this.wish_machine_laver,
      wish_frigo : this.wish_frigo,
      wish_congelateur : this.wish_congelateur,
      wish_tv : this.wish_tv,
      wish_dvd : this.wish_dvd,
      wish_tondeuse : this.wish_tondeuse,
      wish_machine_broder : this.wish_machine_broder,
      wish_machine_pleinte : this.wish_machine_pleinte,
      wish_machine_coudre : this.wish_machine_coudre,
      wish_scie_circulaire : this.wish_scie_circulaire,
      wish_scie_sauteuse : this.wish_scie_sauteuse,
      wish_toupie : this.wish_toupie,
      wish_raboteuse : this.wish_raboteuse,
      wish_fraise : this.wish_fraise,
      wish_moulin : this.wish_moulin,
      wish_arc_souder : this.wish_arc_souder,
      wish_ponceuse : this.wish_ponceuse,
      clientKit : this.clientKit,
      clientKitP : this.clientKitP,
      clientCeet : this.clientCeet,
      clientCeetTranche : this.clientCeetTranche,
      clientGE : this.clientGE,
      clientGEP : this.clientGEP,
      clientReseau : this.clientReseau,
      clientReseauP : this.clientReseauP,
      telephoneOperator : this.telephoneOperator,
      telephoneOperator2 : this.telephoneOperator2,
      telephoneCost : this.telephoneCost,
      longitude:this.longitude,
      latitude:this.latitude,
    };

    this.http.post(link, data)
    .map(res => res.json())
    .subscribe((data)=>
    {
        console.log(data);
        if(data.status == true) {
          loader.dismiss();
          this.navCtrl.pop();          
          let alert = this.alertCtrl.create({
            title: 'Résultats de l\'enquête',
            message: 'Actuellement vous consommez <b>'+data.data.dispoKwh+' Wh/jour</b>.<br><br>Il faudra <b>'+data.data.wishKwh+' Wh/jour de plus</b> pour couvrir les besoins en énergie des équipements souhaités.',
            buttons: ['OK']
          });
          alert.present();

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
        console.log("Impossible d'envoyer l'enquête !");
        loader.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Impossible d\'enregistrer l\'enquête, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
          duration: 5000,
          position: 'bottom',
          cssClass:"danger"
        });           
        toast.present();
    });  
  }
}
