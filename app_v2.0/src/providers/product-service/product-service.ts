import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Storage } from '@ionic/storage';

/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductServiceProvider {
  cartObj :any;
  constructor(public http: Http, public storage:Storage) {
    console.log('Hello ProductServiceProvider Provider');
    this.storage.get('cart').then((resp) => {
      if(resp !== null){ this.cartObj = resp; }
    });    
  }
  getCategories() {
    var url = 'https://benoo-v2-api.herokuapp.com/api/services/types';
    //var url = 'http://benoo-api:8888/api/services/types';
    var response = this.http.get(url)
    .do((res : any ) => console.log(res.json()))
    .map((res : any ) => res.json());
    /* .map((res : Response ) => res.json())
    .catch(error => console.log(error)); */

    return response;
  }

  getProductByType(typeId) {
    var url:string = 'https://benoo-v2-api.herokuapp.com/api/services/'+typeId;
    //var url:string = 'http://benoo-api:8888/api/services/'+typeId;
    var response:any = this.http.get(url)
    .do((res : any ) => console.log(res.json()))
    .map((res : any ) => res.json());
    /* .map((res : Response ) => res.json())
    .catch(error => console.log(error)); */

    return response;    
  }
}
