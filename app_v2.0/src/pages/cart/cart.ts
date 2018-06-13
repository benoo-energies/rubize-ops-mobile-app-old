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
  entrepreneurAC  :any;
  entrepreneurRC  :any;
  entrepreneurBenooId  :any;
  merchantId      :any;
  clientTel       :any;
  pageClient      :any;
  checkClientRes  :any;
  clientLastname  :any;
  clientFirstname  :any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private modal:ModalController, public http: Http, public toastCtrl: ToastController, public loading: LoadingController) {
    this.cartTotal = 0;
    this.storage.get('cart').then((resp) => {
      console.log(resp);
      if(resp !== null){
        this.cartObj = resp;
        console.log("CART FOREACH", this.cartObj);
/*         this.cartObj.products.forEach(obj => {
          console.log("obj");
          console.log(obj);
          if(obj.price && obj.qty) { this.cartTotal+= obj.price * obj.qty; }
          console.log(this.cartTotal);
        });   */        
        this.cartObj.products.forEach(function (obj) {
          console.log(obj);
          if( obj && obj.price && obj.qty) { this.cartTotal+= obj.price * obj.qty; }
          console.log(this.cartTotal);
        }, this);        
      }
    });    
    this.pageClient = ClientPage;

    this.storage.get('entrepreneurTel').then((resp) => {
      if(resp !== null){ this.entrepreneurTel = resp; }
    });
    this.storage.get('entrepreneurPin').then((resp) => {
      if(resp !== null){ this.entrepreneurPin = resp; }
    });
    this.storage.get('entrepreneurAC').then((resp) => {
      if(resp !== null){ this.entrepreneurAC = resp; }
    });
    this.storage.get('entrepreneurRC').then((resp) => {
      if(resp !== null){ this.entrepreneurRC = resp; }
    });
    this.storage.get('merchantId').then((resp) => {
      if(resp !== null){ this.merchantId = resp; }
    });
    this.storage.get('entrepreneurBenooId').then((resp) => {
      if(resp !== null){ this.entrepreneurBenooId = resp; }
    });
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
    var url = 'https://benoo-v2-api.herokuapp.com/api/customer/'+this.entrepreneurBenooId+'/'+this.clientTel;
    //var url = 'http://benoo-api:8888/api/customer/'+this.entrepreneurBenooId+'/'+this.clientTel;
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
    var comission:number = this.cartTotal * 0.2;
    var description:string = "";
    var referenceId:string = "";
    
    let loader = this.loading.create({
      content: 'Enregistrement de la vente...',
    });      
    loader.present();  
    //https:///22806.tagpay.fr/api/tpdebit.php?merchantid=2631806354846560&password=ef9901d3ccfef8128f61cbc92ec1baf8&client=33660866178&PIN=1234&amount=3&currency=952&description=descbenooservice&referenceid=idtxbenoo

    //var url:any = "https:///22806.tagpay.fr/api/tpdebit.php?merchantid="+this.merchantId+"&password="+merchantPassword+"&client="+this.entrepreneurTel+"&pin="+this.entrepreneurPin+"&amount="+commission+"&currency="+this.entrepreneurRC+"&description="+description+"&referenceid="+referenceId;

    var link = 'https://benoo-v2-api.herokuapp.com/api/order/'+this.entrepreneurBenooId+'/create';
    //var link = 'http://benoo-api:8888/api/order/'+this.entrepreneurBenooId+'/create';

    var data = {
      merchantId : this.merchantId,
      entrepreneurTel : this.entrepreneurTel,
      entrepreneurPin : this.entrepreneurPin,
      entrepreneurRC : this.entrepreneurRC,
      entrepreneurId : this.entrepreneurBenooId,
      clientTel : this.clientTel,
      description : description,
      referenceId : referenceId,
      products : this.cartObj.products,
      total : this.cartTotal,
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
          this.storage.set('entrepreneurAC', this.entrepreneurAC-comission);

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
          message: 'Impossible d\'enregistrer la vente, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
          duration: 5000,
          position: 'bottom',
          cssClass:"danger"
        });           
        toast.present();
    }); 

  }


}
