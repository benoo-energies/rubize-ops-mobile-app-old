import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Storage } from '@ionic/storage';

import { GlobalVars } from "../globalVars";
/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {
  cartObj :any;
  entrepreneurBenooId :any;
  entrepreneurTel :any;
  orders :any;
  constructor(public http: Http, public storage:Storage, private global: GlobalVars) {
    console.log('Hello ProductServiceProvider Provider');
    this.storage.get('cart').then((resp) => {
      if(resp !== null){ this.cartObj = resp; }
    });      
  }

  getCategories(entrepreneurId, entrepreneurTel) {
    var url = this.global.getApiUrl()+'services/types/' + entrepreneurId +"?entrepreneurTel="+ entrepreneurTel;
    var response = this.http.get(url)
    .do((res : any ) => console.log(res.json()))
    .map((res : any ) => res.json());
    /* .map((res : Response ) => res.json())
    .catch(error => console.log(error)); */

    return response;
  }

  getProductByType(typeId, entrepreneurId, entrepreneurTel) {
    var url:string = this.global.getApiUrl()+'services/'+typeId+ "/"+ entrepreneurId+"?entrepreneurTel="+entrepreneurTel;
    var response:any = this.http.get(url)
    .do((res : any ) => console.log(res.json()))
    .map((res : any ) => res.json());
    /* .map((res : Response ) => res.json())
    .catch(error => console.log(error)); */

    return response;    
  }


  loadOfflineOrders() {
    this.storage.get('entrepreneur_orders').then((resp) => {
      console.log(resp);
      if(resp !== null){
        return resp;
      }    
    });
  }

}
