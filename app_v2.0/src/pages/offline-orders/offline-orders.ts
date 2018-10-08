import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the OfflineOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offline-orders',
  templateUrl: 'offline-orders.html',
})
export class OfflineOrdersPage {
  orders : any;

  constructor(public storage: Storage) {
    this.loadOrders();
  }

  loadOrders() {
    this.storage.get('entrepreneur_orders').then((resp) => {
      if(resp !== null){
        this.orders = resp.data;
        console.log(resp);
      }
    });
  }

  ionViewWillEnter() {
    this.loadOrders();
  }
}
