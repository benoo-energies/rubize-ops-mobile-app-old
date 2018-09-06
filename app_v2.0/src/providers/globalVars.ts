import { Injectable } from '@angular/core';


/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalVars {
  entrepreneurId :any;
  entrepreneurTel :any;
  constructor() {
    this.entrepreneurId = "";
    this.entrepreneurTel = "";
  }

  setId(value) {
    this.entrepreneurId = value;
  }

  getId() {
    return this.entrepreneurId;
  }

  setTel(value) {
    this.entrepreneurTel = value;
  }

  getTel() {
    return this.entrepreneurTel;
  }

  getApiUrl() {
    return "http://benoo-api:8888/api/";
    //return "https://benoo-v2-api.herokuapp.com/api/";
  }

}
