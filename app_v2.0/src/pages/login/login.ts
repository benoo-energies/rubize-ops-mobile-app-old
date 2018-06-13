import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { GlobalSurveyPage } from './../global-survey/global-survey'
import { Network } from '@ionic-native/network';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public xmlItems : any;
  entrepreneurTel :any;
  entrepreneurPin :any;
  entrepreneurAC  :any;
  merchantId  :any;
  offlineData:any;
  onlineStatus:any;

  // TODO : Ajouter les contrôles sur les champs saisis pour le login

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage,public http: Http,public toastCtrl: ToastController, public loading: LoadingController, private network: Network) {
    var item:any = { products:[],totalProduct:0};
    storage.set('cart', item);
    if(localStorage.getItem('offlineSurvey') === null) {
      this.offlineData = JSON.stringify({surveys:[]});
      localStorage.setItem('offlineSurvey', this.offlineData);
    } else {
      this.offlineData = JSON.parse(localStorage.getItem('offlineSurvey'));
    }        

    this.onlineStatus = window.navigator.onLine;
  }

  ionViewWillEnter() {

    if(localStorage.getItem('offlineSurvey') === null) {
      this.offlineData = JSON.stringify({surveys:[]});
      localStorage.setItem('offlineSurvey', this.offlineData);
    } else {
      this.offlineData = JSON.parse(localStorage.getItem('offlineSurvey'));
      // AFFICAHGE DE LA POPIN D'ALERTE
      if(this.offlineData.surveys.length >= 50) {
        let toast = this.toastCtrl.create({
          message: "Vous avez enregistré "+this.offlineData.surveys.length+" enquêtes hors-ligne, pensez à synchroniser vos enquêtes dès que possible.",
          duration: 5000,
          position: 'top',
          cssClass:"danger"
        });           
        toast.present();
      }
    }  
    this.onlineStatus = window.navigator.onLine;
  }

  ionViewDidEnter() {
    this.network.onConnect().subscribe(data => {
      this.onlineStatus = true;
    }, error => console.error(error));
  
    this.network.onDisconnect().subscribe(data => {
      this.onlineStatus = false;
    }, error => console.error(error));
  }

  ionViewDidLoad() {
    if(localStorage.getItem('offlineSurvey') === null) {
      this.offlineData = JSON.stringify({surveys:[]});
      localStorage.setItem('offlineSurvey', this.offlineData);
    } else {
      this.offlineData = JSON.parse(localStorage.getItem('offlineSurvey'));
    }  

    this.onlineStatus = window.navigator.onLine;
  }

  displaySurvey() {
    console.log("SURVEY");
    this.navCtrl.push(GlobalSurveyPage);
  }

  postOfflineSurvey() {
    let loader = this.loading.create({
      content: 'Synchronisation en cours...',
    });      
    loader.present();      
    var link = 'https://benoo-v2-api.herokuapp.com/api/survey-prospect/create';
    //var link = 'http://benoo-api:8888/api/survey-prospect/create';
    var errorSurvey  = [];

    for (let i = 0; i < this.offlineData.surveys.length; i++) {
      this.http.post(link, this.offlineData.surveys[i])
      .map(res => res.json())
      .subscribe((data)=>
      {
          if(data.status == true) {
          } else {
            errorSurvey.push(this.offlineData.surveys[i]);
          }
      }, error => {
        errorSurvey.push(this.offlineData.surveys[i]);
      });
      if(i+1 == this.offlineData.surveys.length) {
        loader.dismiss();
        // CHECK SI ERREUR
        if(errorSurvey.length == 0) {
          this.offlineData = JSON.stringify({surveys:[]});
          localStorage.setItem('offlineSurvey', this.offlineData);
          let toast = this.toastCtrl.create({
            message: "Enquête(s) synchronisée(s) avec succès !",
            duration: 5000,
            position: 'bottom',
            cssClass:"success"
          });           
          toast.present();        
          break;        
        } else {
          this.offlineData = JSON.stringify({surveys:errorSurvey});
          localStorage.setItem('offlineSurvey', this.offlineData);
          let toast = this.toastCtrl.create({
            message: "Toutes les enquêtes n'ont pas pu être synchronisées. Veuillez vérifier votre connexion et réessayer.",
            duration: 5000,
            position: 'bottom',
            cssClass:"danger"
          });           
          toast.present();        
          break;
        }

      }
    }    
  }

  parseXML(data) {
    return new Promise(resolve =>
    {
        var parser = new xml2js.Parser(
            {
              trim: true,
              explicitArray: false
            });

        parser.parseString(data, function (err, result)
        {
          var obj = result.tagpay;
          resolve(obj);
        });
      });
  }

  checkConnection() {
    var entrepreneurTel:number = this.entrepreneurTel;
    var entrepreneurPin:string = this.entrepreneurPin;

 
    let loader = this.loading.create({
      content: 'Connexion en cours...',
    });      
    loader.present();  
    
    var link = "https://benoo-v2-api.herokuapp.com/api/entrepreneur/login";    
    //var link = "http://benoo-api:8888/api/entrepreneur/login";    

    var data = {
      entrepreneurTel : this.entrepreneurTel,
      entrepreneurPin : this.entrepreneurPin
    }
    this.http.post(link, data)
    .map(res => res.json())
    .subscribe((data)=>
    {
        if(data.status == true) {
          loader.dismiss(); 
          this.storage.set('entrepreneurAC', data.data.balance[0]);
          this.storage.set('entrepreneurRC', data.data.currency);
          this.storage.set('entrepreneurTel', data.data.idClient);
          this.storage.set('merchantId', data.data.merchantId);
          this.storage.set('entrepreneurId', data.data.idClient);          
          this.storage.set('entrepreneurBenooId', data.data.entrepreneurBenooId);
          this.storage.set('entrepreneurPin', this.entrepreneurPin);
          this.navCtrl.push(HomePage);
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
        loader.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Une erreur s\'est produite lors de la connexion. Si le problème persiste contactez votre support Benoo Energies.',
          duration: 5000,
          position: 'bottom',
          cssClass:"danger"
        });           
        toast.present();
    });    
   
  }
}
