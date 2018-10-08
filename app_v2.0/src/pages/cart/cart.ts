import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ClientPage } from './../client/client';
import { HomePage } from './../home/home';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';
import { GlobalVars } from "../../providers/globalVars";
import { AlertController } from 'ionic-angular';
import { MenuPage } from './../menu/menu';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  xmlItems         :any;
  cartObj         :any;
  cartTotal       :any;
  entrepreneurTel :any;
  entrepreneurPin :any;
  entrepreneurBenooId  :any;
  clientTel       :any;
  pageClient      :any;
  checkClientRes  :any;
  clientLastname  :any;
  clientFirstname  :any;
  paymentType  :any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private modal:ModalController, public http: Http, public toastCtrl: ToastController, public loading: LoadingController, private global: GlobalVars, private alertCtrl: AlertController) {
    this.cartTotal = 0;
    this.storage.get('cart').then((resp) => {
      console.log(resp);
      if(resp !== null){
        this.cartObj = resp;
/*         this.cartObj.products.forEach(obj => {
          console.log("obj");
          console.log(obj);
          if(obj.price && obj.qty) { this.cartTotal+= obj.price * obj.qty; }
          console.log(this.cartTotal);
        });   */        
        this.cartObj.products.forEach(function (obj) {
          if( obj && obj.price && obj.qty) { this.cartTotal+= obj.price * obj.qty; }
        }, this);        
      }
    });    
    this.pageClient = ClientPage;

    this.entrepreneurBenooId = this.global.getId();
    this.entrepreneurTel = this.global.getTel();
    this.checkClientRes = "KO";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  ionViewWillEnter() {
    this.storage.get('cart').then((resp) => {
      if(resp !== null){
        this.cartObj = resp;
      }
    });
  }

  emptyCart() {
    console.log("EMPTY");
    this.cartObj = { products:[],totalProduct:0};
    this.storage.set('cart', this.cartObj);   
  }

  validateSale() {
    console.log('VALIDATION');
    const clientModal = this.modal.create("ClientPage");
    clientModal.present();
  }

  checkClient() {
    var url = this.global.getApiUrl()+'customer/'+this.entrepreneurBenooId+'/'+this.clientTel+"?entrepreneurTel="+this.entrepreneurTel;
    console.log(this.clientTel);
    console.log(this.entrepreneurBenooId);
    // Requete pour checker si le client existe
    this.http.get(url)
    .map(res => res.json())
    .subscribe((data)=>
    {
        console.log(data);
        console.log(data.status);
        if(data.status) {
          // Si le client existe 
          this.checkClientRes = "OK";
          //ajout du nom + prénom
          this.clientLastname = data.data.lastname;
          this.clientFirstname = data.data.firstname;
          // Ajout du bouton pour finaliser la vente
          
        } else {
            this.checkClientRes = "KO";
            console.log('Client inexistant...');
          // Si pas de client
            // Affichage du formulaire client
            let paramObj = { clientTel: this.clientTel };
            this.navCtrl.push(ClientPage, paramObj);  
            // Ouverture du formulaire pour la fiche client
            
        }

    });
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

  sendPayment() {
    console.log('PAIEMENT');

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


            var comission:number = this.cartTotal * 0.2;
    
            let loader = this.loading.create({
              content: 'Enregistrement de la vente...',
            });      
            loader.present();  
        
            var link = this.global.getApiUrl()+'order/'+this.entrepreneurBenooId+'/create';
        
            var data = {
              entrepreneurTel : this.entrepreneurTel,
              entrepreneurPin : this.entrepreneurPin,
              entrepreneurId : this.entrepreneurBenooId,
              clientTel : this.clientTel,
              products : this.cartObj.products,
              total : this.cartTotal,
              paymentType : this.paymentType,
              comission : comission
            }    
        
            this.http.post(link, data)
            .map(res => res.json())
            .subscribe((data)=>
            {
                console.log(data);
                if(data.status == true) {          
                  loader.dismiss();
                  let toast = this.toastCtrl.create({
                    message: "Votre vente a bien été enregistrée.",
                    duration: 5000,
                    position: 'bottom',
                    cssClass:"success"
                  });           
                  toast.present();
                  this.cartObj = { products:[],totalProduct:0};
                  this.storage.set('cart', this.cartObj);   

                  this.navCtrl.setRoot(MenuPage).then(()=>{
                    this.navCtrl.push(HomePage);
                  });
        
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
                console.log("Impossible d'enregistrer la vente !");
                loader.dismiss();
                let toast = this.toastCtrl.create({
                  message: 'Impossible d\'enregistrer la vente, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
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
