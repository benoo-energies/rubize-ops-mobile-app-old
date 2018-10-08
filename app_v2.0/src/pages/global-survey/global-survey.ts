import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import { Network } from '@ionic-native/network';

import { GlobalVars } from "../../providers/globalVars";
/**
 * Generated class for the GlobalSurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-global-survey',
  templateUrl: 'global-survey.html',
})
export class GlobalSurveyPage {
  
  idProspect : any;
  benooEnqueteurs : any;
  enqueteurId : any;
  village : any;
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
  onlineStatus:any;
  benooVillages:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,public toastCtrl: ToastController, public loading: LoadingController,private geolocation: Geolocation, private alertCtrl: AlertController, private network: Network, private global: GlobalVars) {
    this.loadVillages();
    this.loadEnqueteurs();
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.onlineStatus = window.navigator.onLine;
      console.log(this.longitude, this.latitude);
     }).catch((error) => {
      this.latitude = 0;
      this.longitude = 0;
      console.log('Error getting location', error);
     });          
     console.log(Math.floor(Date.now() / 1000));
    }
    
  ionViewDidLoad() {

    console.log('ionViewDidLoad GlobalSurveyPage');
  }
  
  loadVillages() {
    this.benooVillages = JSON.parse(localStorage.getItem('benoo_villages'));
    console.log(this.benooVillages);
  }
  
  loadEnqueteurs() {
    this.benooEnqueteurs = JSON.parse(localStorage.getItem('benoo_enqueteurs'));
    console.log(this.benooEnqueteurs);
  }


  saveSurvey() {
    console.log('SAVE SURVEY');
    this.onlineStatus = window.navigator.onLine;
    console.log(this.onlineStatus);    
    var link = this.global.getApiUrl()+'survey-prospect/create';

    let loader = this.loading.create({
      content: 'Enregistrement de l\'enquête...',
    });      
    loader.present(); 

    var data = {
  
      //idProspect : this.idProspect,
      enqueteurId : this.enqueteurId,
      village : this.village,
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
      date:Math.floor(Date.now() / 1000)
    };
    if(this.onlineStatus) {
      console.log('ONLINE');

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
      
    } else {
      console.log('OFFLINE');
      var dataKwh = {
        lampe_petrole : 70,
        torche_electrique : 5,
        bougies : 5,
        ampoules : 15,
        ventilateur : 60,
        telephone : 5,
        climatisation : 1100,
        radio : 10,
        machine_laver : 1500,
        frigo : 150,
        congelateur : 200,
        tv : 35,
        dvd : 15,
        tondeuse_electrique : 80,
        machine_broder : 250,
        machine_pleinte : 250,
        machine_coudre : 250,
        scie_circulaire : 1600,
        scie_sauteuse : 600,
        toupie : 3000,
        raboteuse : 1800,
        fraise_electrique : 2000,
        moulin_electrique : 750,
        arc_souder : 2450,
        ponceuse : 350
      };
      var checkData = function(data) {
        if(data == "" || data == " " || data == null) {return 0;} else {return data;}
      }      

      var dispoKwh = 0;
      dispoKwh += dataKwh.lampe_petrole * parseInt(checkData(data.dispo_lampe));
      dispoKwh += dataKwh.torche_electrique * parseInt(checkData(data.dispo_torche));
      dispoKwh += dataKwh.bougies * parseInt(checkData(data.dispo_bougie));
      dispoKwh += dataKwh.ampoules * parseInt(checkData(data.dispo_ampoule));
      dispoKwh += dataKwh.ventilateur * parseInt(checkData(data.dispo_ventilateur));
      dispoKwh += dataKwh.telephone * parseInt(checkData(data.dispo_tel));
      dispoKwh += dataKwh.climatisation * parseInt(checkData(data.dispo_clim));
      dispoKwh += dataKwh.radio * parseInt(checkData(data.dispo_radio));
      dispoKwh += dataKwh.machine_laver * parseInt(checkData(data.dispo_machine_laver));
      dispoKwh += dataKwh.frigo * parseInt(checkData(data.dispo_frigo));
      dispoKwh += dataKwh.congelateur * parseInt(checkData(data.dispo_congelateur));
      dispoKwh += dataKwh.tv * parseInt(checkData(data.dispo_tv));
      dispoKwh += dataKwh.dvd * parseInt(checkData(data.dispo_dvd));
      dispoKwh += dataKwh.tondeuse_electrique * parseInt(checkData(data.dispo_tondeuse));
      dispoKwh += dataKwh.machine_broder * parseInt(checkData(data.dispo_machine_broder));
      dispoKwh += dataKwh.machine_pleinte * parseInt(checkData(data.dispo_machine_pleinte));
      dispoKwh += dataKwh.machine_coudre * parseInt(checkData(data.dispo_machine_coudre));
      dispoKwh += dataKwh.scie_circulaire * parseInt(checkData(data.dispo_scie_circulaire));
      dispoKwh += dataKwh.scie_sauteuse * parseInt(checkData(data.dispo_scie_sauteuse));
      dispoKwh += dataKwh.toupie * parseInt(checkData(data.dispo_toupie));
      dispoKwh += dataKwh.raboteuse * parseInt(checkData(data.dispo_raboteuse));
      dispoKwh += dataKwh.fraise_electrique * parseInt(checkData(data.dispo_fraise));
      dispoKwh += dataKwh.moulin_electrique * parseInt(checkData(data.dispo_moulin));
      dispoKwh += dataKwh.arc_souder * parseInt(checkData(data.dispo_arc_souder));
      dispoKwh += dataKwh.ponceuse * parseInt(checkData(data.dispo_ponceuse));

      var wishKwh = 0;
      wishKwh += dataKwh.ampoules * parseInt(checkData(data.wish_ampoule));
      wishKwh += dataKwh.ventilateur * parseInt(checkData(data.wish_ventilateur));
      wishKwh += dataKwh.telephone * parseInt(checkData(data.wish_tel));
      wishKwh += dataKwh.climatisation * parseInt(checkData(data.wish_clim));
      wishKwh += dataKwh.radio * parseInt(checkData(data.wish_radio));
      wishKwh += dataKwh.machine_laver * parseInt(checkData(data.wish_machine_laver));
      wishKwh += dataKwh.frigo * parseInt(checkData(data.wish_frigo));
      wishKwh += dataKwh.congelateur * parseInt(checkData(data.wish_congelateur));
      wishKwh += dataKwh.tv * parseInt(checkData(data.wish_tv));
      wishKwh += dataKwh.dvd * parseInt(checkData(data.wish_dvd));
      wishKwh += dataKwh.tondeuse_electrique * parseInt(checkData(data.wish_tondeuse));
      wishKwh += dataKwh.machine_broder * parseInt(checkData(data.wish_machine_broder));
      wishKwh += dataKwh.machine_pleinte * parseInt(checkData(data.wish_machine_pleinte));
      wishKwh += dataKwh.machine_coudre * parseInt(checkData(data.wish_machine_coudre));
      wishKwh += dataKwh.scie_circulaire * parseInt(checkData(data.wish_scie_circulaire));
      wishKwh += dataKwh.scie_sauteuse * parseInt(checkData(data.wish_scie_sauteuse));
      wishKwh += dataKwh.toupie * parseInt(checkData(data.wish_toupie));
      wishKwh += dataKwh.raboteuse * parseInt(checkData(data.wish_raboteuse));
      wishKwh += dataKwh.fraise_electrique * parseInt(checkData(data.wish_fraise));
      wishKwh += dataKwh.moulin_electrique * parseInt(checkData(data.wish_moulin));
      wishKwh += dataKwh.arc_souder * parseInt(checkData(data.wish_arc_souder));
      wishKwh += dataKwh.ponceuse * parseInt(checkData(data.wish_ponceuse));

      var offlineSurvey = JSON.parse(localStorage.getItem('offlineSurvey'));
      offlineSurvey['surveys'].push(data);
      localStorage.setItem('offlineSurvey', JSON.stringify(offlineSurvey));

      loader.dismiss();
      this.navCtrl.pop();          
      let alert = this.alertCtrl.create({
        title: 'Résultats de l\'enquête',
        message: 'Actuellement vous consommez <b>'+dispoKwh+' Wh/jour</b>.<br><br>Il faudra <b>'+wishKwh+' Wh/jour de plus</b> pour couvrir les besoins en énergie des équipements souhaités.',
        buttons: ['OK']
      });
      alert.present();
  
    }
  
  }



}
