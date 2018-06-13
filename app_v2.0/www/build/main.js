webpackJsonp([7],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductServiceProvider = (function () {
    function ProductServiceProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        console.log('Hello ProductServiceProvider Provider');
        this.storage.get('cart').then(function (resp) {
            if (resp !== null) {
                _this.cartObj = resp;
            }
        });
    }
    ProductServiceProvider.prototype.getCategories = function () {
        var url = 'https://benoo-v2-api.herokuapp.com/api/services/types';
        //var url = 'http://benoo-api:8888/api/services/types';
        var response = this.http.get(url)
            .do(function (res) { return console.log(res.json()); })
            .map(function (res) { return res.json(); });
        /* .map((res : Response ) => res.json())
        .catch(error => console.log(error)); */
        return response;
    };
    ProductServiceProvider.prototype.getProductByType = function (typeId) {
        var url = 'https://benoo-v2-api.herokuapp.com/api/services/' + typeId;
        //var url:string = 'http://benoo-api:8888/api/services/'+typeId;
        var response = this.http.get(url)
            .do(function (res) { return console.log(res.json()); })
            .map(function (res) { return res.json(); });
        /* .map((res : Response ) => res.json())
        .catch(error => console.log(error)); */
        return response;
    };
    ProductServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ProductServiceProvider);
    return ProductServiceProvider;
}());

//# sourceMappingURL=product-service.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalSurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the GlobalSurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GlobalSurveyPage = (function () {
    function GlobalSurveyPage(navCtrl, navParams, http, toastCtrl, loading, geolocation, alertCtrl, network) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            _this.onlineStatus = window.navigator.onLine;
            console.log(_this.longitude, _this.latitude);
        }).catch(function (error) {
            _this.latitude = 0;
            _this.longitude = 0;
            console.log('Error getting location', error);
        });
        console.log(Math.floor(Date.now() / 1000));
    }
    GlobalSurveyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GlobalSurveyPage');
    };
    GlobalSurveyPage.prototype.saveSurvey = function () {
        var _this = this;
        console.log('SAVE SURVEY');
        this.onlineStatus = window.navigator.onLine;
        console.log(this.onlineStatus);
        var link = 'https://benoo-v2-api.herokuapp.com/api/survey-prospect/create';
        //var link = 'http://benoo-api:8888/api/survey-prospect/create';
        var loader = this.loading.create({
            content: 'Enregistrement de l\'enquête...',
        });
        loader.present();
        var data = {
            idProspect: this.idProspect,
            village: this.village,
            clientLastname: this.clientLastname,
            clientFirstname: this.clientFirstname,
            clientSituation: this.clientSituation,
            clientTel: this.clientTel,
            clientJob: this.clientJob,
            clientJob2: this.clientJob2,
            clientFoyer: this.clientFoyer,
            dispo_lampe: this.dispo_lampe,
            dispo_torche: this.dispo_torche,
            dispo_bougie: this.dispo_bougie,
            dispo_ampoule: this.dispo_ampoule,
            dispo_ventilateur: this.dispo_ventilateur,
            dispo_tel: this.dispo_tel,
            dispo_clim: this.dispo_clim,
            dispo_radio: this.dispo_radio,
            dispo_machine_laver: this.dispo_machine_laver,
            dispo_frigo: this.dispo_frigo,
            dispo_congelateur: this.dispo_congelateur,
            dispo_tv: this.dispo_tv,
            dispo_dvd: this.dispo_dvd,
            dispo_tondeuse: this.dispo_tondeuse,
            dispo_machine_broder: this.dispo_machine_broder,
            dispo_machine_pleinte: this.dispo_machine_pleinte,
            dispo_machine_coudre: this.dispo_machine_coudre,
            dispo_scie_circulaire: this.dispo_scie_circulaire,
            dispo_scie_sauteuse: this.dispo_scie_sauteuse,
            dispo_toupie: this.dispo_toupie,
            dispo_raboteuse: this.dispo_raboteuse,
            dispo_fraise: this.dispo_fraise,
            dispo_moulin: this.dispo_moulin,
            dispo_arc_souder: this.dispo_arc_souder,
            dispo_ponceuse: this.dispo_ponceuse,
            wish_ampoule: this.wish_ampoule,
            wish_ventilateur: this.wish_ventilateur,
            wish_tel: this.wish_tel,
            wish_clim: this.wish_clim,
            wish_radio: this.wish_radio,
            wish_machine_laver: this.wish_machine_laver,
            wish_frigo: this.wish_frigo,
            wish_congelateur: this.wish_congelateur,
            wish_tv: this.wish_tv,
            wish_dvd: this.wish_dvd,
            wish_tondeuse: this.wish_tondeuse,
            wish_machine_broder: this.wish_machine_broder,
            wish_machine_pleinte: this.wish_machine_pleinte,
            wish_machine_coudre: this.wish_machine_coudre,
            wish_scie_circulaire: this.wish_scie_circulaire,
            wish_scie_sauteuse: this.wish_scie_sauteuse,
            wish_toupie: this.wish_toupie,
            wish_raboteuse: this.wish_raboteuse,
            wish_fraise: this.wish_fraise,
            wish_moulin: this.wish_moulin,
            wish_arc_souder: this.wish_arc_souder,
            wish_ponceuse: this.wish_ponceuse,
            clientKit: this.clientKit,
            clientKitP: this.clientKitP,
            clientCeet: this.clientCeet,
            clientCeetTranche: this.clientCeetTranche,
            clientGE: this.clientGE,
            clientGEP: this.clientGEP,
            clientReseau: this.clientReseau,
            clientReseauP: this.clientReseauP,
            telephoneOperator: this.telephoneOperator,
            telephoneOperator2: this.telephoneOperator2,
            telephoneCost: this.telephoneCost,
            longitude: this.longitude,
            latitude: this.latitude,
            date: Math.floor(Date.now() / 1000)
        };
        if (this.onlineStatus) {
            console.log('ONLINE');
            this.http.post(link, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.status == true) {
                    loader.dismiss();
                    _this.navCtrl.pop();
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Résultats de l\'enquête',
                        message: 'Actuellement vous consommez <b>' + data.data.dispoKwh + ' Wh/jour</b>.<br><br>Il faudra <b>' + data.data.wishKwh + ' Wh/jour de plus</b> pour couvrir les besoins en énergie des équipements souhaités.',
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
                else {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: data.error,
                        duration: 5000,
                        position: 'bottom',
                        cssClass: "danger"
                    });
                    toast.present();
                }
            }, function (error) {
                console.log(error);
                console.log("Impossible d'envoyer l'enquête !");
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Impossible d\'enregistrer l\'enquête, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
                    duration: 5000,
                    position: 'bottom',
                    cssClass: "danger"
                });
                toast.present();
            });
        }
        else {
            console.log('OFFLINE');
            var dataKwh = {
                lampe_petrole: 70,
                torche_electrique: 5,
                bougies: 5,
                ampoules: 15,
                ventilateur: 60,
                telephone: 5,
                climatisation: 1100,
                radio: 10,
                machine_laver: 1500,
                frigo: 150,
                congelateur: 200,
                tv: 35,
                dvd: 15,
                tondeuse_electrique: 80,
                machine_broder: 250,
                machine_pleinte: 250,
                machine_coudre: 250,
                scie_circulaire: 1600,
                scie_sauteuse: 600,
                toupie: 3000,
                raboteuse: 1800,
                fraise_electrique: 2000,
                moulin_electrique: 750,
                arc_souder: 2450,
                ponceuse: 350
            };
            var checkData = function (data) {
                if (data == "" || data == " " || data == null) {
                    return 0;
                }
                else {
                    return data;
                }
            };
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
            var alert_2 = this.alertCtrl.create({
                title: 'Résultats de l\'enquête',
                message: 'Actuellement vous consommez <b>' + dispoKwh + ' Wh/jour</b>.<br><br>Il faudra <b>' + wishKwh + ' Wh/jour de plus</b> pour couvrir les besoins en énergie des équipements souhaités.',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    GlobalSurveyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-global-survey',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/global-survey/global-survey.html"*/'<!--\n  Generated template for the SurveyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Enquête Client</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list>    \n      <ion-item>\n        <ion-label floating>ID Enquêteur : </ion-label>\n        <ion-input type="number" [(ngModel)]="idProspect"></ion-input>\n      </ion-item>     \n      <ion-item>\n        <ion-label floating> Village enquêté : </ion-label>\n        <ion-input type="text" [(ngModel)]="village"></ion-input>\n      </ion-item>\n      <h4>Contact</h4>\n      <ion-item>\n        <ion-label floating>Nom : </ion-label>\n        <ion-input type="text" [(ngModel)]="clientLastname"></ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-label floating>Prénom : </ion-label>\n        <ion-input type="text" [(ngModel)]="clientFirstname"></ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-label floating>Situation : </ion-label>\n        <ion-select [(ngModel)]="clientSituation">\n          <ion-option value="Salarié privé">Salarié privé</ion-option>\n          <ion-option value="Fonctionnaire">Fonctionnaire</ion-option>\n          <ion-option value="Entrepreneur">Entrepreneur</ion-option>\n          <ion-option value="Agriculteur">Agriculteur</ion-option>\n          <ion-option value="Sans profession">Sans profession</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Téléphone : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientTel"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Activité : </ion-label>\n        <ion-select [(ngModel)]="clientJob">\n          <ion-option value="Foyer">Foyer</ion-option>\n          <ion-option value="Centre de culte">Centre de culte</ion-option>\n          <ion-option value="Boutique">Boutique</ion-option>\n          <ion-option value="Produits frais / alimentation">Produits frais / alimentation</ion-option>\n          <ion-option value="Salon de coiffure">Salon de coiffure</ion-option>\n          <ion-option value="Tailleur">Tailleur</ion-option>\n          <ion-option value="Scierie">Scierie</ion-option>\n          <ion-option value="Restauration">Restauration</ion-option>\n          <ion-option value="Tourneur">Tourneur</ion-option>\n          <ion-option value="Transformation agricole">Transformation agricole</ion-option>\n          <ion-option value="Vulcanisateur">Vulcanisateur</ion-option>\n          <ion-option value="Menuisier">Menuisier</ion-option>\n          <ion-option value="Mécanicien">Mécanicien</ion-option>\n          <ion-option value="Peintre">Peintre</ion-option>\n          <ion-option value="Cordonnier">Cordonnier</ion-option>\n          <ion-option value="Centre de santé">Centre de santé</ion-option>\n          <ion-option value="Soudeur">Soudeur</ion-option>\n          <ion-option value="Education">Education</ion-option>\n          <ion-option value="IMF">IMF</ion-option>\n          <ion-option value="Autre">Autre</ion-option>          \n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="clientJob && clientJob == \'Autre\'">\n        <ion-label floating>Autre activité : </ion-label>\n        <ion-input type="text" [(ngModel)]="clientJob2"></ion-input>\n      </ion-item> \n\n      <ion-item *ngIf="clientJob && clientJob == \'Foyer\'">\n        <ion-label floating>Type de construction : </ion-label>\n        <ion-select [(ngModel)]="clientFoyer">\n          <ion-option value="Semi-dur">Semi-dur</ion-option>\n          <ion-option value="Dur">Dur</ion-option>\n          </ion-select>\n      </ion-item> \n\n      <h4>Equipement actuel</h4>\n      <ion-item>\n        <ion-label floating>Lampe pétrole</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_lampe"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Torche éléctrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_torche"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Bougie</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_bougie"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Ampoule</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_ampoule"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Ventilateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_ventilateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Téléphone</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_tel"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Climatisation</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_clim"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Radio</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_radio"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Machine à laver</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_laver"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Réfrigérateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_frigo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Congélateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_congelateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>TV</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_tv"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Lecteur DVD</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_dvd"></ion-input>\n      </ion-item>\n\n      <!-- CHAMPS CONDITIONNELS -->\n\n      <ion-item  *ngIf="clientJob && clientJob == \'Salon de coiffure\'">\n        <ion-label floating>Tondeuse électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_tondeuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à broder</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_broder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à pleinte</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_pleinte"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à coudre</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_coudre"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie circulaire électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_scie_circulaire"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie sauteuse electrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_scie_sauteuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Toupie</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_toupie"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Raboteuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_raboteuse"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Tourneur\'">\n        <ion-label floating>Fraise électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_fraise"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Transformation agricole\'">\n        <ion-label floating>Moulin électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_moulin"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Soudeur\'">\n        <ion-label floating>Arc à souder</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_arc_souder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Menuisier\'">\n        <ion-label floating>Ponceuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_ponceuse"></ion-input>\n      </ion-item>\n      \n      <h4>Equipement souhaité</h4>\n      <ion-item>\n        <ion-label floating>Ampoule</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_ampoule"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Ventilateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_ventilateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Téléphone</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_tel"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Climatisation</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_clim"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Radio</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_radio"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Machine à laver</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_laver"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Réfrigérateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_frigo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Congélateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_congelateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>TV</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_tv"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Lecteur DVD</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_dvd"></ion-input>\n      </ion-item>\n\n      <!-- CHAMPS CONDITIONNELS -->\n      \n      <ion-item  *ngIf="clientJob && clientJob == \'Salon de coiffure\'">\n        <ion-label floating>Tondeuse électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_tondeuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à broder</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_broder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à pleinte</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_pleinte"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à coudre</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_coudre"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie circulaire électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_scie_circulaire"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie sauteuse electrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_scie_sauteuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Toupie</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_toupie"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Raboteuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_raboteuse"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Tourneur\'">\n        <ion-label floating>Fraise électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_fraise"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Transformation agricole\'">\n        <ion-label floating>Moulin électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_moulin"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Soudeur\'">\n        <ion-label floating>Arc à souder</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_arc_souder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Menuisier\'">\n        <ion-label floating>Ponceuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_ponceuse"></ion-input>\n      </ion-item>\n      \n      <h4>Production énergie</h4>\n      <p>Kit solaire :</p>\n      <ion-list radio-group [(ngModel)]="clientKit">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      <ion-item *ngIf="clientKit && clientKit == \'oui\'">\n        <ion-label floating>Puissance (watt) : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientKitP"></ion-input>\n      </ion-item> \n\n\n      <p>Compagnie électrique :</p>\n      <ion-list radio-group [(ngModel)]="clientCeet">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      <ion-item *ngIf="clientCeet && clientCeet == \'oui\'">\n          <ion-label floating>Abonnement : </ion-label>\n          <ion-select [(ngModel)]="clientCeetTranche">\n            <ion-option value="Tranche sociale">Tranche sociale</ion-option>\n            <ion-option value="Tranche 1">Tranche 1</ion-option>\n            <ion-option value="Tranche 2">Tranche 2</ion-option>\n          </ion-select>\n        </ion-item>\n\n\n      <p>Groupe electrogène :</p>\n      <ion-list radio-group [(ngModel)]="clientGE">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      <ion-item *ngIf="clientGE && clientGE == \'oui\'">\n        <ion-label floating>Puissance (watt) : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientGEP"></ion-input>\n      </ion-item> \n\n\n      <p>Mini-réseau :</p>\n      <ion-list radio-group [(ngModel)]="clientReseau">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      <ion-item *ngIf="clientReseau && clientReseau == \'oui\'">\n        <ion-label floating>Puissance (watt) : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientReseauP"></ion-input>\n      </ion-item> \n\n\n      <h4>Autres équipements</h4>\n<!--       <ion-item>\n        <ion-label floating>Opérateur : </ion-label>\n        <ion-select [(ngModel)]="telephoneOperator">\n          <ion-option value="Fonctionnaire">Moov</ion-option>\n          <ion-option value="Entrepreneur">Togocel</ion-option>\n        </ion-select>\n      </ion-item> -->\n      <ion-item>\n        <ion-label floating>Opérateur 1 : </ion-label>\n        <ion-input type="text"  [(ngModel)]="telephoneOperator"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Opérateur 2 : </ion-label>\n        <ion-input type="text"  [(ngModel)]="telephoneOperator2"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Coût recharge tél./sem.</ion-label>\n        <ion-input type="number"  [(ngModel)]="telephoneCost"></ion-input>\n      </ion-item>\n\n      <ion-input [hidden]="true" ></ion-input>\n    </ion-list>  \n    <div no-padding class="validate-btn">      \n      <button ion-button block large [disabled]="idProspect == null || idProspect == \'\'" [navPush]="" [navParams]=\'\' (click)="saveSurvey()" >Valider</button>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/global-survey/global-survey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]])
    ], GlobalSurveyPage);
    return GlobalSurveyPage;
}());

//# sourceMappingURL=global-survey.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoryPage = (function () {
    function HistoryPage(navCtrl, navParams, storage, http, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage.get('entrepreneurBenooId').then(function (resp) {
            if (resp !== null) {
                _this.entrepreneurBenooId = resp;
                _this.loadHistory(resp);
            }
        });
        this.storage.get('entrepreneurAC').then(function (resp) {
            if (resp !== null) {
                _this.entrepreneurAC = resp;
            }
        });
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage.prototype.loadHistory = function (entrepreneurBenooId) {
        var _this = this;
        var url = 'https://benoo-v2-api.herokuapp.com/api/entrepreneur/history/' + entrepreneurBenooId;
        console.log(entrepreneurBenooId);
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            console.log(data.status);
            if (data.status) {
                _this.dataHistory = data.data;
            }
            else {
                // Si erreur 
                console.log("History KO");
                var toast = _this.toastCtrl.create({
                    message: 'Impossible de récupérer l\'historique des transactions, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
                    duration: 5000,
                    position: 'bottom',
                    cssClass: "danger"
                });
                toast.present();
            }
        });
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Solde & Transactions</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="solde">\n    <h3>Solde</h3>\n    <p>{{entrepreneurAC}} Fcfa</p>\n  </div>\n\n  <div class="transaction">\n    <h3>Transactions</h3>\n    <div *ngIf="dataHistory && dataHistory.length > 0" no-padding>\n      <table>\n        <tr *ngFor="let history of dataHistory" class="debit">\n          <td>{{history.date}}</td>\n          <td>-{{history.amount}} Fcfa</td>\n        </tr>\n      </table>\n    </div>\n    <div *ngIf="dataHistory && dataHistory.length == 0" no-padding>\n      <p>Pas de transactions enregistrées actuellement.</p>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_product_service_product_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__history_history__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__survey_survey__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/* import { Http } from '@angular/http'; */

var HomePage = (function () {
    function HomePage(navCtrl, navParams, productService, storage, callNumber) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.storage = storage;
        this.callNumber = callNumber;
        this.menuData = [];
        this.getMenuCategories();
        this.pageCart = __WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */];
        this.pageService = __WEBPACK_IMPORTED_MODULE_1__service_service__["a" /* ServicePage */];
        this.historyPage = __WEBPACK_IMPORTED_MODULE_6__history_history__["a" /* HistoryPage */];
        this.storage.get('cart').then(function (resp) {
            if (resp !== null) {
                _this.cartObj = resp;
            }
        });
        this.storage.get('entrepreneurBenooId').then(function (resp) {
            if (resp !== null) {
                _this.cartObj = resp;
            }
            console.log(resp);
        });
    }
    HomePage.prototype.navGoTo = function (page) {
        console.log(page);
        if (page == "history") {
            console.log("history");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__history_history__["a" /* HistoryPage */]);
        }
        else if (page == "solde") {
            console.log("solde");
        }
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('cart').then(function (resp) {
            if (resp !== null) {
                _this.cartObj = resp;
            }
        });
    };
    HomePage.prototype.getMenuCategories = function () {
        var _this = this;
        this.productService.getCategories().subscribe(function (data) {
            _this.menuData = data.data;
        });
    };
    HomePage.prototype.displaySurvey = function () {
        console.log("SURVEY");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__survey_survey__["a" /* SurveyPage */]);
    };
    HomePage.prototype.callMaintenance = function () {
        console.log("CALL");
        this.callNumber.callNumber("+22892693718", true)
            .catch(function () { return console.log('Error launching dialer'); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>\n      <img src="./assets/imgs/logo-benoo-w.png" class="nav-logo" alt="">\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button [navPush]="pageCart" [navParams]="cartObj">\n        <ion-icon name="cart"></ion-icon>\n        <span *ngIf="cartObj">{{cartObj.totalProduct}}</span>\n      </button>\n    </ion-buttons>\n    <button ion-button icon-only menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-menu [content]="menuContent" side="right">\n  <ion-content>\n    <ion-title><h4>Menu</h4></ion-title>\n    <ion-list>\n      <ion-item class="active"><ion-icon name="home"></ion-icon> Accueil</ion-item>\n      <!-- <ion-item [navPush]="historyPage" name="swap"><ion-icon name="swap"></ion-icon> Solde & Transactions</ion-item> -->\n      <ion-item (click)="navGoTo(\'history\')"><ion-icon name="swap"></ion-icon> Solde & Transactions</ion-item>\n      <ion-item menuClose detail-none><ion-icon name="arrow-back"></ion-icon> Retour</ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav #menuContent></ion-nav>\n    \n<ion-content no-padding>\n  <h2 >Services</h2>\n  <ion-list no-padding>\n    <ion-row no-padding>\n        <ion-col  *ngFor="let menu of menuData" col-6>\n          <ion-card no-padding [navPush]="pageService" [navParams]=\'{typeId : menu.id, typeName : menu.title}\'>\n            <img src="./assets/imgs/{{menu.picture}}" alt="">\n            <div class="card-title" >{{menu.title}}</div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n  </ion-list>\n  <div padding>\n    <button ion-button block large (click)="displaySurvey()"><ion-icon name="checkbox-outline"></ion-icon> &nbsp;&nbsp;&nbsp;Enquête client</button>\n    <button ion-button block large color="danger" class="maintenance" (click)="callMaintenance()"><ion-icon name="alert"></ion-icon> &nbsp;&nbsp;&nbsp;Appel maintenance</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_product_service_product_service__["a" /* ProductServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__["a" /* CallNumber */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_cart__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_product_service_product_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicePage = (function () {
    function ServicePage(navCtrl, navParams, productService, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.storage = storage;
        this.servicesData = [];
        this.pageCart = __WEBPACK_IMPORTED_MODULE_0__cart_cart__["a" /* CartPage */];
        this.serviceName = this.navParams.data.typeName;
        this.getProducts(this.navParams.data.typeId);
        this.storage.get('cart').then(function (resp) {
            if (resp !== null) {
                _this.cartObj = resp;
            }
        });
    }
    ServicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicePage');
    };
    ServicePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("back");
        this.storage.get('cart').then(function (resp) {
            if (resp !== null) {
                _this.cartObj = resp;
            }
        });
    };
    ServicePage.prototype.getProducts = function (id) {
        var _this = this;
        this.productService.getProductByType(id).subscribe(function (data) {
            _this.servicesData = data.data;
        });
    };
    ServicePage.prototype.addItemToCart = function (cartObj, productId, productTitle, productPrice, productPicture) {
        var _this = this;
        var item = cartObj;
        if (item.products[productId]) {
            var newVal = item.products[productId].qty + 1;
            item.products[productId] = { id: productId, title: productTitle, price: productPrice, picture: productPicture, qty: newVal };
        }
        else {
            item.products[productId] = { id: productId, title: productTitle, price: productPrice, picture: productPicture, qty: 1 };
        }
        item.totalProduct = item.totalProduct + 1;
        this.storage.set('cart', item).then(function (data) {
            _this.cartObj = data;
            console.log(data);
        });
    };
    ServicePage.prototype.removeItemToCart = function (cartObj, productId, productTitle, productPrice, productPicture) {
        var _this = this;
        var item = cartObj;
        var newVal = item.products[productId].qty - 1;
        if (newVal > 0) {
            item.products[productId] = { id: productId, title: productTitle, price: productPrice, picture: productPicture, qty: newVal };
        }
        else {
            item.products.splice(productId, 1);
        }
        item.totalProduct = item.totalProduct - 1;
        this.storage.set('cart', item).then(function (data) {
            _this.cartObj = data;
        });
    };
    ServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-service',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/service/service.html"*/'<!--\n  Generated template for the ServicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{serviceName}}</ion-title>\n    <ion-buttons end>\n        <button ion-button [navPush]="pageCart" [navParams]="cartObj">\n          <ion-icon name="cart"></ion-icon>\n          <span *ngIf="cartObj">{{cartObj.totalProduct}}</span>\n        </button>\n      </ion-buttons>    \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-list *ngFor="let service of servicesData" no-padding>\n        <ion-row>\n            <ion-col no-padding>\n              <!-- <ion-card no-padding [navPush]="pageService" [navParams]=\'{serviceId : service.id}\'> -->\n              <ion-card no-padding >\n                <ion-row>\n                  <ion-col col-4 class="service-img">\n                    <img src="./assets/imgs/{{service.picture}}" alt="">\n                  </ion-col>\n                  <ion-col col-6>\n                    <div class="card-title" >{{service.title}}</div>\n                    <div class="price">{{service.price_fcfa}} Fcfa</div>\n                  </ion-col>\n                  <ion-col *ngIf="cartObj && cartObj.products[service.id]; else templateName" col-2 class="icon added" >\n                      <div class="item-add" (click)="addItemToCart(cartObj, service.id, service.title, service.price_fcfa, service.picture)">\n                        <ion-icon name="add"></ion-icon>\n                      </div>\n                      <div class="item-qty">\n                          <span>{{cartObj.products[service.id].qty}}</span>\n                      </div>\n                      <div class="item-remove" (click)="removeItemToCart(cartObj, service.id, service.title, service.price_fcfa, service.picture)">\n                          <ion-icon name="remove"></ion-icon>\n                      </div>\n                  </ion-col>\n                  <ng-template #templateName>                    \n                    <ion-col col-2 class="empty icon" (click)="addItemToCart(cartObj, service.id, service.title, service.price_fcfa, service.picture)">\n                        <ion-icon name="add"></ion-icon>\n                    </ion-col>\n                  </ng-template>\n                </ion-row>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/service/service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_product_service_product_service__["a" /* ProductServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ServicePage);
    return ServicePage;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurveyPage = (function () {
    function SurveyPage(navCtrl, storage, http, navParams, toastCtrl, loading, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.alertCtrl = alertCtrl;
        this.storage.get('entrepreneurBenooId').then(function (resp) {
            if (resp !== null) {
                _this.entrepreneurBenooId = resp;
            }
        });
    }
    SurveyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveyPage');
    };
    SurveyPage.prototype.saveSurvey = function () {
        var _this = this;
        console.log('SAVE SURVEY');
        var link = 'https://benoo-v2-api.herokuapp.com/api/survey/' + this.entrepreneurBenooId + '/create';
        //var link = 'http://benoo-api:8888/api/survey/'+this.entrepreneurBenooId+'/create';
        var loader = this.loading.create({
            content: 'Enregistrement de l\'enquête...',
        });
        loader.present();
        var data = {
            clientLastname: this.clientLastname,
            clientFirstname: this.clientFirstname,
            clientSituation: this.clientSituation,
            clientTel: this.clientTel,
            clientJob: this.clientJob,
            clientJob2: this.clientJob2,
            clientFoyer: this.clientFoyer,
            dispo_lampe: this.dispo_lampe,
            dispo_torche: this.dispo_torche,
            dispo_bougie: this.dispo_bougie,
            dispo_ampoule: this.dispo_ampoule,
            dispo_ventilateur: this.dispo_ventilateur,
            dispo_tel: this.dispo_tel,
            dispo_clim: this.dispo_clim,
            dispo_radio: this.dispo_radio,
            dispo_machine_laver: this.dispo_machine_laver,
            dispo_frigo: this.dispo_frigo,
            dispo_congelateur: this.dispo_congelateur,
            dispo_tv: this.dispo_tv,
            dispo_dvd: this.dispo_dvd,
            dispo_tondeuse: this.dispo_tondeuse,
            dispo_machine_broder: this.dispo_machine_broder,
            dispo_machine_pleinte: this.dispo_machine_pleinte,
            dispo_machine_coudre: this.dispo_machine_coudre,
            dispo_scie_circulaire: this.dispo_scie_circulaire,
            dispo_scie_sauteuse: this.dispo_scie_sauteuse,
            dispo_toupie: this.dispo_toupie,
            dispo_raboteuse: this.dispo_raboteuse,
            dispo_fraise: this.dispo_fraise,
            dispo_moulin: this.dispo_moulin,
            dispo_arc_souder: this.dispo_arc_souder,
            dispo_ponceuse: this.dispo_ponceuse,
            wish_ampoule: this.wish_ampoule,
            wish_ventilateur: this.wish_ventilateur,
            wish_tel: this.wish_tel,
            wish_clim: this.wish_clim,
            wish_radio: this.wish_radio,
            wish_machine_laver: this.wish_machine_laver,
            wish_frigo: this.wish_frigo,
            wish_congelateur: this.wish_congelateur,
            wish_tv: this.wish_tv,
            wish_dvd: this.wish_dvd,
            wish_tondeuse: this.wish_tondeuse,
            wish_machine_broder: this.wish_machine_broder,
            wish_machine_pleinte: this.wish_machine_pleinte,
            wish_machine_coudre: this.wish_machine_coudre,
            wish_scie_circulaire: this.wish_scie_circulaire,
            wish_scie_sauteuse: this.wish_scie_sauteuse,
            wish_toupie: this.wish_toupie,
            wish_raboteuse: this.wish_raboteuse,
            wish_fraise: this.wish_fraise,
            wish_moulin: this.wish_moulin,
            wish_arc_souder: this.wish_arc_souder,
            wish_ponceuse: this.wish_ponceuse,
            clientKit: this.clientKit,
            clientKitP: this.clientKitP,
            clientCeet: this.clientCeet,
            clientCeetTranche: this.clientCeetTranche,
            clientGE: this.clientGE,
            clientGEP: this.clientGEP,
            clientReseau: this.clientReseau,
            clientReseauP: this.clientReseauP,
            telephoneOperator: this.telephoneOperator,
            telephoneOperator2: this.telephoneOperator2,
            telephoneCost: this.telephoneCost,
            longitude: this.longitude,
            latitude: this.latitude,
        };
        this.http.post(link, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == true) {
                loader.dismiss();
                _this.navCtrl.pop();
                var alert_1 = _this.alertCtrl.create({
                    title: 'Résultats de l\'enquête',
                    message: 'Actuellement vous consommez <b>' + data.data.dispoKwh + ' Wh/jour</b>.<br><br>Il faudra <b>' + data.data.wishKwh + ' Wh/jour de plus</b> pour couvrir les besoins en énergie des équipements souhaités.',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: data.error,
                    duration: 5000,
                    position: 'bottom',
                    cssClass: "danger"
                });
                toast.present();
            }
        }, function (error) {
            console.log(error);
            console.log("Impossible d'envoyer l'enquête !");
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Impossible d\'enregistrer l\'enquête, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
                duration: 5000,
                position: 'bottom',
                cssClass: "danger"
            });
            toast.present();
        });
    };
    SurveyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-survey',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/survey/survey.html"*/'<!--\n  Generated template for the SurveyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Enquête Client</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>      \n    <h4>Contact</h4>\n    <ion-item>\n      <ion-label floating>Nom : </ion-label>\n      <ion-input type="text" [(ngModel)]="clientLastname"></ion-input>\n    </ion-item> \n    <ion-item>\n      <ion-label floating>Prénom : </ion-label>\n      <ion-input type="text" [(ngModel)]="clientFirstname"></ion-input>\n    </ion-item> \n    <ion-item>\n      <ion-label floating>Situation : </ion-label>\n      <ion-select [(ngModel)]="clientSituation">\n        <ion-option value="Salarié privé">Salarié privé</ion-option>\n        <ion-option value="Fonctionnaire">Fonctionnaire</ion-option>\n        <ion-option value="Entrepreneur">Entrepreneur</ion-option>\n        <ion-option value="Agriculteur">Agriculteur</ion-option>\n        <ion-option value="Sans profession">Sans profession</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Téléphone : </ion-label>\n      <ion-input type="number" [(ngModel)]="clientTel"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Activité : </ion-label>\n      <ion-select [(ngModel)]="clientJob">\n        <ion-option value="Foyer">Foyer</ion-option>\n        <ion-option value="Centre de culte">Centre de culte</ion-option>\n        <ion-option value="Boutique">Boutique</ion-option>\n        <ion-option value="Produits frais / alimentation">Produits frais / alimentation</ion-option>\n        <ion-option value="Salon de coiffure">Salon de coiffure</ion-option>\n        <ion-option value="Tailleur">Tailleur</ion-option>\n        <ion-option value="Scierie">Scierie</ion-option>\n        <ion-option value="Restauration">Restauration</ion-option>\n        <ion-option value="Tourneur">Tourneur</ion-option>\n        <ion-option value="Transformation agricole">Transformation agricole</ion-option>\n        <ion-option value="Vulcanisateur">Vulcanisateur</ion-option>\n        <ion-option value="Menuisier">Menuisier</ion-option>\n        <ion-option value="Mécanicien">Mécanicien</ion-option>\n        <ion-option value="Peintre">Peintre</ion-option>\n        <ion-option value="Cordonnier">Cordonnier</ion-option>\n        <ion-option value="Centre de santé">Centre de santé</ion-option>\n        <ion-option value="Soudeur">Soudeur</ion-option>\n        <ion-option value="Education">Education</ion-option>\n        <ion-option value="IMF">IMF</ion-option>\n        <ion-option value="Autre">Autre</ion-option>          \n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="clientJob && clientJob == \'Autre\'">\n      <ion-label floating>Autre activité : </ion-label>\n      <ion-input type="text" [(ngModel)]="clientJob2"></ion-input>\n    </ion-item> \n\n    <ion-item *ngIf="clientJob && clientJob == \'Foyer\'">\n      <ion-label floating>Type de construction : </ion-label>\n      <ion-select [(ngModel)]="clientFoyer">\n        <ion-option value="Semi-dur">Semi-dur</ion-option>\n        <ion-option value="Dur">Dur</ion-option>\n      </ion-select>\n    </ion-item> \n\n    <h4>Equipement actuel</h4>\n    <ion-item>\n      <ion-label floating>Lampe pétrole</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_lampe"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Torche éléctrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_torche"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Bougie</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_bougie"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Ampoule</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_ampoule"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Ventilateur</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_ventilateur"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Téléphone</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_tel"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Climatisation</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_clim"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Radio</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_radio"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Machine à laver</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_machine_laver"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Réfrigérateur</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_frigo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Congélateur</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_congelateur"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>TV</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_tv"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Lecteur DVD</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_dvd"></ion-input>\n    </ion-item>\n\n    <!-- CHAMPS CONDITIONNELS -->\n\n    <ion-item  *ngIf="clientJob && clientJob == \'Salon de coiffure\'">\n      <ion-label floating>Tondeuse électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_tondeuse"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n      <ion-label floating>Machine à broder</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_machine_broder"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n      <ion-label floating>Machine à pleinte</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_machine_pleinte"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n      <ion-label floating>Machine à coudre</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_machine_coudre"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Scie circulaire électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_scie_circulaire"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Scie sauteuse electrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_scie_sauteuse"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Toupie</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_toupie"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Raboteuse</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_raboteuse"></ion-input>\n    </ion-item>\n    <ion-item  *ngIf="clientJob && clientJob == \'Tourneur\'">\n      <ion-label floating>Fraise électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_fraise"></ion-input>\n    </ion-item>\n    <ion-item  *ngIf="clientJob && clientJob == \'Transformation agricole\'">\n      <ion-label floating>Moulin électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_moulin"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Soudeur\'">\n      <ion-label floating>Arc à souder</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_arc_souder"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Menuisier\'">\n      <ion-label floating>Ponceuse</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_ponceuse"></ion-input>\n    </ion-item>\n    \n    <h4>Equipement souhaité</h4>\n    <ion-item>\n      <ion-label floating>Ampoule</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_ampoule"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Ventilateur</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_ventilateur"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Téléphone</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_tel"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Climatisation</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_clim"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Radio</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_radio"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Machine à laver</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_machine_laver"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Réfrigérateur</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_frigo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Congélateur</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_congelateur"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>TV</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_tv"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Lecteur DVD</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_dvd"></ion-input>\n    </ion-item>\n\n    <!-- CHAMPS CONDITIONNELS -->\n    \n    <ion-item  *ngIf="clientJob && clientJob == \'Salon de coiffure\'">\n      <ion-label floating>Tondeuse électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_tondeuse"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n      <ion-label floating>Machine à broder</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_machine_broder"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n      <ion-label floating>Machine à pleinte</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_machine_pleinte"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n      <ion-label floating>Machine à coudre</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_machine_coudre"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Scie circulaire électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_scie_circulaire"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Scie sauteuse electrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_scie_sauteuse"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Toupie</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_toupie"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Raboteuse</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_raboteuse"></ion-input>\n    </ion-item>\n    <ion-item  *ngIf="clientJob && clientJob == \'Tourneur\'">\n      <ion-label floating>Fraise électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_fraise"></ion-input>\n    </ion-item>\n    <ion-item  *ngIf="clientJob && clientJob == \'Transformation agricole\'">\n      <ion-label floating>Moulin électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_moulin"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Soudeur\'">\n      <ion-label floating>Arc à souder</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_arc_souder"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Menuisier\'">\n      <ion-label floating>Ponceuse</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_ponceuse"></ion-input>\n    </ion-item>\n    \n    <h4>Production énergie</h4>\n    <p>Kit solaire :</p>\n    <ion-list radio-group [(ngModel)]="clientKit">\n      <ion-item>\n        <ion-label>Oui</ion-label>\n        <ion-radio value="oui" ></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Non</ion-label>\n        <ion-radio value="non" checked></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item *ngIf="clientKit && clientKit == \'oui\'">\n      <ion-label floating>Puissance (watt) : </ion-label>\n      <ion-input type="number" [(ngModel)]="clientKitP"></ion-input>\n    </ion-item> \n\n\n    <p>Compagnie électrique :</p>\n    <ion-list radio-group [(ngModel)]="clientCeet">\n      <ion-item>\n        <ion-label>Oui</ion-label>\n        <ion-radio value="oui" ></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Non</ion-label>\n        <ion-radio value="non" checked></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item *ngIf="clientCeet && clientCeet == \'oui\'">\n        <ion-label floating>Abonnement : </ion-label>\n        <ion-select [(ngModel)]="clientCeetTranche">\n          <ion-option value="Tranche sociale">Tranche sociale</ion-option>\n          <ion-option value="Tranche 1">Tranche 1</ion-option>\n          <ion-option value="Tranche 2">Tranche 2</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n    <p>Groupe electrogène :</p>\n    <ion-list radio-group [(ngModel)]="clientGE">\n      <ion-item>\n        <ion-label>Oui</ion-label>\n        <ion-radio value="oui" ></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Non</ion-label>\n        <ion-radio value="non" checked></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item *ngIf="clientGE && clientGE == \'oui\'">\n      <ion-label floating>Puissance (watt) : </ion-label>\n      <ion-input type="number" [(ngModel)]="clientGEP"></ion-input>\n    </ion-item> \n\n\n    <p>Mini-réseau :</p>\n    <ion-list radio-group [(ngModel)]="clientReseau">\n      <ion-item>\n        <ion-label>Oui</ion-label>\n        <ion-radio value="oui" ></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Non</ion-label>\n        <ion-radio value="non" checked></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item *ngIf="clientReseau && clientReseau == \'oui\'">\n      <ion-label floating>Puissance (watt) : </ion-label>\n      <ion-input type="number" [(ngModel)]="clientReseauP"></ion-input>\n    </ion-item> \n\n\n    <h4>Autres équipements</h4>\n<!--     <ion-item>\n      <ion-label floating>Opérateur : </ion-label>\n      <ion-select [(ngModel)]="telephoneOperator">\n        <ion-option value="Fonctionnaire">Moov</ion-option>\n        <ion-option value="Entrepreneur">Togocel</ion-option>\n      </ion-select>\n    </ion-item> -->\n    <ion-item>\n      <ion-label floating>Opérateur 1 : </ion-label>\n      <ion-input type="text"  [(ngModel)]="telephoneOperator"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Opérateur 2 : </ion-label>\n      <ion-input type="text"  [(ngModel)]="telephoneOperator2"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Coût recharge tél./sem.</ion-label>\n      <ion-input type="number"  [(ngModel)]="telephoneCost"></ion-input>\n    </ion-item>\n\n    <ion-input [hidden]="true" ></ion-input>\n  </ion-list>  \n  <div no-padding class="validate-btn">      \n    <button ion-button block large  [navPush]="" [navParams]=\'\' (click)="saveSurvey()" >Valider</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/survey/survey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SurveyPage);
    return SurveyPage;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_survey_global_survey__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    // TODO : Ajouter les contrôles sur les champs saisis pour le login
    function LoginPage(navCtrl, navParams, storage, http, toastCtrl, loading, network) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.network = network;
        var item = { products: [], totalProduct: 0 };
        storage.set('cart', item);
        if (localStorage.getItem('offlineSurvey') === null) {
            this.offlineData = JSON.stringify({ surveys: [] });
            localStorage.setItem('offlineSurvey', this.offlineData);
        }
        else {
            this.offlineData = JSON.parse(localStorage.getItem('offlineSurvey'));
        }
        this.onlineStatus = window.navigator.onLine;
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        if (localStorage.getItem('offlineSurvey') === null) {
            this.offlineData = JSON.stringify({ surveys: [] });
            localStorage.setItem('offlineSurvey', this.offlineData);
        }
        else {
            this.offlineData = JSON.parse(localStorage.getItem('offlineSurvey'));
            // AFFICAHGE DE LA POPIN D'ALERTE
            if (this.offlineData.surveys.length >= 50) {
                var toast = this.toastCtrl.create({
                    message: "Vous avez enregistré " + this.offlineData.surveys.length + " enquêtes hors-ligne, pensez à synchroniser vos enquêtes dès que possible.",
                    duration: 5000,
                    position: 'top',
                    cssClass: "danger"
                });
                toast.present();
            }
        }
        this.onlineStatus = window.navigator.onLine;
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.network.onConnect().subscribe(function (data) {
            _this.onlineStatus = true;
        }, function (error) { return console.error(error); });
        this.network.onDisconnect().subscribe(function (data) {
            _this.onlineStatus = false;
        }, function (error) { return console.error(error); });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        if (localStorage.getItem('offlineSurvey') === null) {
            this.offlineData = JSON.stringify({ surveys: [] });
            localStorage.setItem('offlineSurvey', this.offlineData);
        }
        else {
            this.offlineData = JSON.parse(localStorage.getItem('offlineSurvey'));
        }
        this.onlineStatus = window.navigator.onLine;
    };
    LoginPage.prototype.displaySurvey = function () {
        console.log("SURVEY");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__global_survey_global_survey__["a" /* GlobalSurveyPage */]);
    };
    LoginPage.prototype.postOfflineSurvey = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Synchronisation en cours...',
        });
        loader.present();
        var link = 'https://benoo-v2-api.herokuapp.com/api/survey-prospect/create';
        //var link = 'http://benoo-api:8888/api/survey-prospect/create';
        var errorSurvey = [];
        var _loop_1 = function (i) {
            this_1.http.post(link, this_1.offlineData.surveys[i])
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data.status == true) {
                }
                else {
                    errorSurvey.push(_this.offlineData.surveys[i]);
                }
            }, function (error) {
                errorSurvey.push(_this.offlineData.surveys[i]);
            });
            if (i + 1 == this_1.offlineData.surveys.length) {
                loader.dismiss();
                // CHECK SI ERREUR
                if (errorSurvey.length == 0) {
                    this_1.offlineData = JSON.stringify({ surveys: [] });
                    localStorage.setItem('offlineSurvey', this_1.offlineData);
                    var toast = this_1.toastCtrl.create({
                        message: "Enquête(s) synchronisée(s) avec succès !",
                        duration: 5000,
                        position: 'bottom',
                        cssClass: "success"
                    });
                    toast.present();
                    return "break";
                }
                else {
                    this_1.offlineData = JSON.stringify({ surveys: errorSurvey });
                    localStorage.setItem('offlineSurvey', this_1.offlineData);
                    var toast = this_1.toastCtrl.create({
                        message: "Toutes les enquêtes n'ont pas pu être synchronisées. Veuillez vérifier votre connexion et réessayer.",
                        duration: 5000,
                        position: 'bottom',
                        cssClass: "danger"
                    });
                    toast.present();
                    return "break";
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.offlineData.surveys.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
    };
    LoginPage.prototype.parseXML = function (data) {
        return new Promise(function (resolve) {
            var parser = new __WEBPACK_IMPORTED_MODULE_6_xml2js___default.a.Parser({
                trim: true,
                explicitArray: false
            });
            parser.parseString(data, function (err, result) {
                var obj = result.tagpay;
                resolve(obj);
            });
        });
    };
    LoginPage.prototype.checkConnection = function () {
        var _this = this;
        var entrepreneurTel = this.entrepreneurTel;
        var entrepreneurPin = this.entrepreneurPin;
        var loader = this.loading.create({
            content: 'Connexion en cours...',
        });
        loader.present();
        var link = "https://benoo-v2-api.herokuapp.com/api/entrepreneur/login";
        //var link = "http://benoo-api:8888/api/entrepreneur/login";    
        var data = {
            entrepreneurTel: this.entrepreneurTel,
            entrepreneurPin: this.entrepreneurPin
        };
        this.http.post(link, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.status == true) {
                loader.dismiss();
                _this.storage.set('entrepreneurAC', data.data.balance[0]);
                _this.storage.set('entrepreneurRC', data.data.currency);
                _this.storage.set('entrepreneurTel', data.data.idClient);
                _this.storage.set('merchantId', data.data.merchantId);
                _this.storage.set('entrepreneurId', data.data.idClient);
                _this.storage.set('entrepreneurBenooId', data.data.entrepreneurBenooId);
                _this.storage.set('entrepreneurPin', _this.entrepreneurPin);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
            }
            else {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: data.error,
                    duration: 5000,
                    position: 'bottom',
                    cssClass: "danger"
                });
                toast.present();
            }
        }, function (error) {
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Une erreur s\'est produite lors de la connexion. Si le problème persiste contactez votre support Benoo Energies.',
                duration: 5000,
                position: 'bottom',
                cssClass: "danger"
            });
            toast.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n    <div padding class="logo">\n      <img src="./assets/imgs/logo-benoo-w.png" alt="">\n    </div>\n    <ion-list class="form">  \n      <ion-item no-padding>\n        <ion-label floating>Téléphone : </ion-label>\n        <ion-input type="number" [(ngModel)]="entrepreneurTel"></ion-input>\n      </ion-item>  \n      <ion-item no-padding>\n        <ion-label floating>Pin : </ion-label>\n        <ion-input type="password" [(ngModel)]="entrepreneurPin"></ion-input>\n      </ion-item>\n      <ion-input [hidden]="true" ></ion-input>\n    </ion-list>\n    <button ion-button block large color="white" [disabled]="entrepreneurTel == null || entrepreneurTel == \'\' || entrepreneurPin == null || entrepreneurPin == \'\'" (click)="checkConnection()" >Connexion</button>\n    <button ion-button block large color="secondary" class="survey" (click)="displaySurvey()">Enquête client</button>\n    <button *ngIf="offlineData && offlineData.surveys && offlineData.surveys.length > 0" ion-button block large color="danger" class="survey" (click)="postOfflineSurvey()" [disabled]="!onlineStatus">Synchro. enquêtes ({{offlineData[\'surveys\'].length}})</button>\n  </ion-content>\n  \n  \n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */]) === "function" && _g || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		354,
		6
	],
	"../pages/client/client.module": [
		207
	],
	"../pages/global-survey/global-survey.module": [
		355,
		5
	],
	"../pages/history/history.module": [
		356,
		4
	],
	"../pages/home/home.module": [
		357,
		3
	],
	"../pages/login/login.module": [
		358,
		2
	],
	"../pages/service/service.module": [
		360,
		1
	],
	"../pages/survey/survey.module": [
		359,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientPage = (function () {
    function ClientPage(navCtrl, navParams, storage, http, geolocation, toastCtrl, loading, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.geolocation = geolocation;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.alertCtrl = alertCtrl;
        this.params = this.navParams.data;
        this.clientTel = this.params.clientTel;
        this.http = http;
        this.storage.get('entrepreneurBenooId').then(function (resp) {
            if (resp !== null) {
                _this.entrepreneurBenooId = resp;
            }
        });
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            console.log(_this.longitude, _this.latitude);
        }).catch(function (error) {
            _this.latitude = 0;
            _this.longitude = 0;
            console.log('Error getting location', error);
        });
    }
    ClientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientPage');
    };
    ClientPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("back");
        this.storage.get('cart').then(function (resp) {
            if (resp !== null) {
                _this.cartObj = resp;
            }
        });
    };
    ClientPage.prototype.createCustomer = function () {
        var _this = this;
        var link = 'https://benoo-v2-api.herokuapp.com/api/customer/' + this.entrepreneurBenooId + '/create';
        //var link = 'http://benoo-api:8888/api/customer/'+this.entrepreneurBenooId+'/create';
        console.log("CREATE CUSTOMER");
        var data = {
            clientLastname: this.clientLastname,
            clientFirstname: this.clientFirstname,
            clientSituation: this.clientSituation,
            clientTel: this.clientTel,
            clientJob: this.clientJob,
            clientJob2: this.clientJob2,
            clientFoyer: this.clientFoyer,
            dispo_lampe: this.dispo_lampe,
            dispo_torche: this.dispo_torche,
            dispo_bougie: this.dispo_bougie,
            dispo_ampoule: this.dispo_ampoule,
            dispo_ventilateur: this.dispo_ventilateur,
            dispo_tel: this.dispo_tel,
            dispo_clim: this.dispo_clim,
            dispo_radio: this.dispo_radio,
            dispo_machine_laver: this.dispo_machine_laver,
            dispo_frigo: this.dispo_frigo,
            dispo_congelateur: this.dispo_congelateur,
            dispo_tv: this.dispo_tv,
            dispo_dvd: this.dispo_dvd,
            dispo_tondeuse: this.dispo_tondeuse,
            dispo_machine_broder: this.dispo_machine_broder,
            dispo_machine_pleinte: this.dispo_machine_pleinte,
            dispo_machine_coudre: this.dispo_machine_coudre,
            dispo_scie_circulaire: this.dispo_scie_circulaire,
            dispo_scie_sauteuse: this.dispo_scie_sauteuse,
            dispo_toupie: this.dispo_toupie,
            dispo_raboteuse: this.dispo_raboteuse,
            dispo_fraise: this.dispo_fraise,
            dispo_moulin: this.dispo_moulin,
            dispo_arc_souder: this.dispo_arc_souder,
            dispo_ponceuse: this.dispo_ponceuse,
            wish_ampoule: this.wish_ampoule,
            wish_ventilateur: this.wish_ventilateur,
            wish_tel: this.wish_tel,
            wish_clim: this.wish_clim,
            wish_radio: this.wish_radio,
            wish_machine_laver: this.wish_machine_laver,
            wish_frigo: this.wish_frigo,
            wish_congelateur: this.wish_congelateur,
            wish_tv: this.wish_tv,
            wish_dvd: this.wish_dvd,
            wish_tondeuse: this.wish_tondeuse,
            wish_machine_broder: this.wish_machine_broder,
            wish_machine_pleinte: this.wish_machine_pleinte,
            wish_machine_coudre: this.wish_machine_coudre,
            wish_scie_circulaire: this.wish_scie_circulaire,
            wish_scie_sauteuse: this.wish_scie_sauteuse,
            wish_toupie: this.wish_toupie,
            wish_raboteuse: this.wish_raboteuse,
            wish_fraise: this.wish_fraise,
            wish_moulin: this.wish_moulin,
            wish_arc_souder: this.wish_arc_souder,
            wish_ponceuse: this.wish_ponceuse,
            clientKit: this.clientKit,
            clientKitP: this.clientKitP,
            clientCeet: this.clientCeet,
            clientCeetTranche: this.clientCeetTranche,
            clientGE: this.clientGE,
            clientGEP: this.clientGEP,
            clientReseau: this.clientReseau,
            clientReseauP: this.clientReseauP,
            telephoneOperator: this.telephoneOperator,
            telephoneOperator2: this.telephoneOperator2,
            telephoneCost: this.telephoneCost,
            longitude: this.longitude,
            latitude: this.latitude,
        };
        var loader = this.loading.create({
            content: 'Enregistrement du client...',
        });
        loader.present();
        this.http.post(link, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == true) {
                loader.dismiss();
                _this.navCtrl.pop();
                var alert_1 = _this.alertCtrl.create({
                    title: 'Résultats de l\'enquête',
                    message: 'Actuellement vous consommez <b>' + data.data.dispoKwh + ' Wh/jour</b>.<br><br>Il faudra <b>' + data.data.wishKwh + ' Wh/jour de plus</b> pour couvrir les besoins en énergie des équipements souhaités.',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: data.error,
                    duration: 5000,
                    position: 'bottom',
                    cssClass: "danger"
                });
                toast.present();
            }
        }, function (error) {
            console.log("Impossible de créer le client !");
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Impossible de créer le client, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
                duration: 5000,
                position: 'bottom',
                cssClass: "danger"
            });
            toast.present();
        });
    };
    ClientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/client/client.html"*/'<!--\n  Generated template for the ClientPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Fiche client</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>  \n    <p>Le numéro saisi ne correspond à aucun de vos clients. Merci de créer la fiche client pour pouvoir assigner la vente à votre client.</p>\n      <h4>Informations client: </h4>      \n      <h4>Contact</h4>\n      <ion-item>\n        <ion-label floating>Nom : </ion-label>\n        <ion-input type="text" [(ngModel)]="clientLastname"></ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-label floating>Prénom : </ion-label>\n        <ion-input type="text" [(ngModel)]="clientFirstname"></ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-label floating>Situation : </ion-label>\n        <ion-select [(ngModel)]="clientSituation">\n          <ion-option value="Salarié privé">Salarié privé</ion-option>\n          <ion-option value="Fonctionnaire">Fonctionnaire</ion-option>\n          <ion-option value="Entrepreneur">Entrepreneur</ion-option>\n          <ion-option value="Agriculteur">Agriculteur</ion-option>\n          <ion-option value="Sans profession">Sans profession</ion-option>\n        </ion-select>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Téléphone : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientTel"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Activité : </ion-label>\n        <ion-select [(ngModel)]="clientJob">\n          <ion-option value="Foyer">Foyer</ion-option>\n          <ion-option value="Centre de culte">Centre de culte</ion-option>\n          <ion-option value="Boutique">Boutique</ion-option>\n          <ion-option value="Produits frais / alimentation">Produits frais / alimentation</ion-option>\n          <ion-option value="Salon de coiffure">Salon de coiffure</ion-option>\n          <ion-option value="Tailleur">Tailleur</ion-option>\n          <ion-option value="Scierie">Scierie</ion-option>\n          <ion-option value="Restauration">Restauration</ion-option>\n          <ion-option value="Tourneur">Tourneur</ion-option>\n          <ion-option value="Transformation agricole">Transformation agricole</ion-option>\n          <ion-option value="Vulcanisateur">Vulcanisateur</ion-option>\n          <ion-option value="Menuisier">Menuisier</ion-option>\n          <ion-option value="Mécanicien">Mécanicien</ion-option>\n          <ion-option value="Peintre">Peintre</ion-option>\n          <ion-option value="Cordonnier">Cordonnier</ion-option>\n          <ion-option value="Centre de santé">Centre de santé</ion-option>\n          <ion-option value="Soudeur">Soudeur</ion-option>\n          <ion-option value="Education">Education</ion-option>\n          <ion-option value="IMF">IMF</ion-option>\n          <ion-option value="Autre">Autre</ion-option>          \n        </ion-select>\n      </ion-item>\n  \n      <ion-item *ngIf="clientJob && clientJob == \'Autre\'">\n        <ion-label floating>Autre activité : </ion-label>\n        <ion-input type="text" [(ngModel)]="clientJob2"></ion-input>\n      </ion-item> \n  \n      <ion-item *ngIf="clientJob && clientJob == \'Foyer\'">\n        <ion-label floating>Type de construction : </ion-label>\n        <ion-select [(ngModel)]="clientFoyer">\n          <ion-option value="Semi-dur">Semi-dur</ion-option>\n          <ion-option value="Dur">Dur</ion-option>\n          </ion-select>\n      </ion-item> \n  \n      <h4>Equipement actuel</h4>\n      <ion-item>\n        <ion-label floating>Lampe pétrole</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_lampe"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Torche éléctrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_torche"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Bougie</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_bougie"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Ampoule</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_ampoule"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Ventilateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_ventilateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Téléphone</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_tel"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Climatisation</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_clim"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Radio</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_radio"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Machine à laver</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_laver"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Réfrigérateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_frigo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Congélateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_congelateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>TV</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_tv"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Lecteur DVD</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_dvd"></ion-input>\n      </ion-item>\n  \n      <!-- CHAMPS CONDITIONNELS -->\n  \n      <ion-item  *ngIf="clientJob && clientJob == \'Salon de coiffure\'">\n        <ion-label floating>Tondeuse électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_tondeuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à broder</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_broder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à pleinte</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_pleinte"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à coudre</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_coudre"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie circulaire électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_scie_circulaire"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie sauteuse electrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_scie_sauteuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Toupie</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_toupie"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Raboteuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_raboteuse"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Tourneur\'">\n        <ion-label floating>Fraise électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_fraise"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Transformation agricole\'">\n        <ion-label floating>Moulin électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_moulin"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Soudeur\'">\n        <ion-label floating>Arc à souder</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_arc_souder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Menuisier\'">\n        <ion-label floating>Ponceuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_ponceuse"></ion-input>\n      </ion-item>\n      \n      <h4>Equipement souhaité</h4>\n      <ion-item>\n        <ion-label floating>Ampoule</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_ampoule"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Ventilateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_ventilateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Téléphone</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_tel"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Climatisation</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_clim"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Radio</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_radio"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Machine à laver</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_laver"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Réfrigérateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_frigo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Congélateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_congelateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>TV</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_tv"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Lecteur DVD</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_dvd"></ion-input>\n      </ion-item>\n  \n      <!-- CHAMPS CONDITIONNELS -->\n      \n      <ion-item  *ngIf="clientJob && clientJob == \'Salon de coiffure\'">\n        <ion-label floating>Tondeuse électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_tondeuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à broder</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_broder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à pleinte</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_pleinte"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à coudre</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_coudre"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie circulaire électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_scie_circulaire"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie sauteuse electrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_scie_sauteuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Toupie</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_toupie"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Raboteuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_raboteuse"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Tourneur\'">\n        <ion-label floating>Fraise électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_fraise"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Transformation agricole\'">\n        <ion-label floating>Moulin électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_moulin"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Soudeur\'">\n        <ion-label floating>Arc à souder</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_arc_souder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Menuisier\'">\n        <ion-label floating>Ponceuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_ponceuse"></ion-input>\n      </ion-item>\n      \n      <h4>Production énergie</h4>\n      <p>Kit solaire :</p>\n      <ion-list radio-group [(ngModel)]="clientKit">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n  \n      <ion-item *ngIf="clientKit && clientKit == \'oui\'">\n        <ion-label floating>Puissance (watt) : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientKitP"></ion-input>\n      </ion-item> \n  \n  \n      <p>Compagnie électrique :</p>\n      <ion-list radio-group [(ngModel)]="clientCeet">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n  \n      <ion-item *ngIf="clientCeet && clientCeet == \'oui\'">\n          <ion-label floating>Abonnement : </ion-label>\n          <ion-select [(ngModel)]="clientCeetTranche">\n            <ion-option value="Tranche sociale">Tranche sociale</ion-option>\n            <ion-option value="Tranche 1">Tranche 1</ion-option>\n            <ion-option value="Tranche 2">Tranche 2</ion-option>\n          </ion-select>\n        </ion-item>\n  \n  \n      <p>Groupe electrogène :</p>\n      <ion-list radio-group [(ngModel)]="clientGE">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n  \n      <ion-item *ngIf="clientGE && clientGE == \'oui\'">\n        <ion-label floating>Puissance (watt) : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientGEP"></ion-input>\n      </ion-item> \n  \n  \n      <p>Mini-réseau :</p>\n      <ion-list radio-group [(ngModel)]="clientReseau">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n  \n      <ion-item *ngIf="clientReseau && clientReseau == \'oui\'">\n        <ion-label floating>Puissance (watt) : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientReseauP"></ion-input>\n      </ion-item> \n      \n      <h4>Autres équipements</h4>\n<!--       <ion-item>\n        <ion-label floating>Opérateur : </ion-label>\n        <ion-select [(ngModel)]="telephoneOperator">\n          <ion-option value="Fonctionnaire">Moov</ion-option>\n          <ion-option value="Entrepreneur">Togocel</ion-option>\n        </ion-select>\n      </ion-item> -->\n      <ion-item>\n        <ion-label floating>Opérateur 1 : </ion-label>\n        <ion-input type="text"  [(ngModel)]="telephoneOperator"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Opérateur 2 : </ion-label>\n        <ion-input type="text"  [(ngModel)]="telephoneOperator2"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Coût recharge tél./sem.</ion-label>\n        <ion-input type="number"  [(ngModel)]="telephoneCost"></ion-input>\n      </ion-item>\n  \n      <ion-input [hidden]="true" ></ion-input>\n    </ion-list>  \n    <div no-padding class="validate-btn">      \n      <button ion-button block large  [navPush]="" [navParams]=\'\' (click)="createCustomer()" >Valider</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/client/client.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ClientPage);
    return ClientPage;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPageModule", function() { return ClientPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClientPageModule = (function () {
    function ClientPageModule() {
    }
    ClientPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__client__["a" /* ClientPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__client__["a" /* ClientPage */]),
            ],
        })
    ], ClientPageModule);
    return ClientPageModule;
}());

//# sourceMappingURL=client.module.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(273);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_service_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_product_service_product_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cart_cart__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_history_history__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_client_client_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_survey_survey__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_global_survey_global_survey__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_service_service__["a" /* ServicePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_global_survey_global_survey__["a" /* GlobalSurveyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/client/client.module#ClientPageModule', name: 'ClientPage', segment: 'client', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/global-survey/global-survey.module#GlobalSurveyPageModule', name: 'GlobalSurveyPage', segment: 'global-survey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#LoginPageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/survey/survey.module#SurveyPageModule', name: 'SurveyPage', segment: 'survey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service/service.module#ServicePageModule', name: 'ServicePage', segment: 'service', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16__pages_client_client_module__["ClientPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_service_service__["a" /* ServicePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_global_survey_global_survey__["a" /* GlobalSurveyPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_product_service_product_service__["a" /* ProductServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__["a" /* CallNumber */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_client__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_xml2js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = (function () {
    function CartPage(navCtrl, navParams, storage, modal, http, toastCtrl, loading) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modal = modal;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.cartTotal = 0;
        this.storage.get('cart').then(function (resp) {
            console.log(resp);
            if (resp !== null) {
                _this.cartObj = resp;
                console.log("CART FOREACH", _this.cartObj);
                /*         this.cartObj.products.forEach(obj => {
                          console.log("obj");
                          console.log(obj);
                          if(obj.price && obj.qty) { this.cartTotal+= obj.price * obj.qty; }
                          console.log(this.cartTotal);
                        });   */
                _this.cartObj.products.forEach(function (obj) {
                    console.log(obj);
                    if (obj && obj.price && obj.qty) {
                        this.cartTotal += obj.price * obj.qty;
                    }
                    console.log(this.cartTotal);
                }, _this);
            }
        });
        this.pageClient = __WEBPACK_IMPORTED_MODULE_3__client_client__["a" /* ClientPage */];
        this.storage.get('entrepreneurTel').then(function (resp) {
            if (resp !== null) {
                _this.entrepreneurTel = resp;
            }
        });
        this.storage.get('entrepreneurPin').then(function (resp) {
            if (resp !== null) {
                _this.entrepreneurPin = resp;
            }
        });
        this.storage.get('entrepreneurAC').then(function (resp) {
            if (resp !== null) {
                _this.entrepreneurAC = resp;
            }
        });
        this.storage.get('entrepreneurRC').then(function (resp) {
            if (resp !== null) {
                _this.entrepreneurRC = resp;
            }
        });
        this.storage.get('merchantId').then(function (resp) {
            if (resp !== null) {
                _this.merchantId = resp;
            }
        });
        this.storage.get('entrepreneurBenooId').then(function (resp) {
            if (resp !== null) {
                _this.entrepreneurBenooId = resp;
            }
        });
        this.checkClientRes = "KO";
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('cart').then(function (resp) {
            if (resp !== null) {
                _this.cartObj = resp;
            }
        });
    };
    CartPage.prototype.emptyCart = function () {
        console.log("EMPTY");
        this.cartObj = { products: [], totalProduct: 0 };
        this.storage.set('cart', this.cartObj);
    };
    CartPage.prototype.validateSale = function () {
        console.log('VALIDATION');
        var clientModal = this.modal.create("ClientPage");
        clientModal.present();
    };
    CartPage.prototype.checkClient = function () {
        var _this = this;
        var url = 'https://benoo-v2-api.herokuapp.com/api/customer/' + this.entrepreneurBenooId + '/' + this.clientTel;
        //var url = 'http://benoo-api:8888/api/customer/'+this.entrepreneurBenooId+'/'+this.clientTel;
        console.log(this.clientTel);
        console.log(this.entrepreneurBenooId);
        // Requete pour checker si le client existe
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            console.log(data.status);
            if (data.status) {
                // Si le client existe 
                _this.checkClientRes = "OK";
                //ajout du nom + prénom
                _this.clientLastname = data.data.lastname;
                _this.clientFirstname = data.data.firstname;
                // Ajout du bouton pour finaliser la vente
            }
            else {
                _this.checkClientRes = "KO";
                console.log('Client inexistant...');
                // Si pas de client
                // Affichage du formulaire client
                var paramObj = { clientTel: _this.clientTel };
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__client_client__["a" /* ClientPage */], paramObj);
                // Ouverture du formulaire pour la fiche client
            }
        });
    };
    CartPage.prototype.parseXML = function (data) {
        return new Promise(function (resolve) {
            var parser = new __WEBPACK_IMPORTED_MODULE_6_xml2js___default.a.Parser({
                trim: true,
                explicitArray: false
            });
            parser.parseString(data, function (err, result) {
                var obj = result.tagpay;
                resolve(obj);
            });
        });
    };
    CartPage.prototype.sendPayment = function () {
        var _this = this;
        console.log('PAIEMENT');
        var comission = this.cartTotal * 0.2;
        var description = "";
        var referenceId = "";
        var loader = this.loading.create({
            content: 'Enregistrement de la vente...',
        });
        loader.present();
        //https:///22806.tagpay.fr/api/tpdebit.php?merchantid=2631806354846560&password=ef9901d3ccfef8128f61cbc92ec1baf8&client=33660866178&PIN=1234&amount=3&currency=952&description=descbenooservice&referenceid=idtxbenoo
        //var url:any = "https:///22806.tagpay.fr/api/tpdebit.php?merchantid="+this.merchantId+"&password="+merchantPassword+"&client="+this.entrepreneurTel+"&pin="+this.entrepreneurPin+"&amount="+commission+"&currency="+this.entrepreneurRC+"&description="+description+"&referenceid="+referenceId;
        var link = 'https://benoo-v2-api.herokuapp.com/api/order/' + this.entrepreneurBenooId + '/create';
        //var link = 'http://benoo-api:8888/api/order/'+this.entrepreneurBenooId+'/create';
        var data = {
            merchantId: this.merchantId,
            entrepreneurTel: this.entrepreneurTel,
            entrepreneurPin: this.entrepreneurPin,
            entrepreneurRC: this.entrepreneurRC,
            entrepreneurId: this.entrepreneurBenooId,
            clientTel: this.clientTel,
            description: description,
            referenceId: referenceId,
            products: this.cartObj.products,
            total: this.cartTotal,
            comission: comission
        };
        this.http.post(link, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == true) {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Votre vente a bien été enregistrée.",
                    duration: 5000,
                    position: 'bottom',
                    cssClass: "success"
                });
                toast.present();
                _this.cartObj = { products: [], totalProduct: 0 };
                _this.storage.set('cart', _this.cartObj);
                _this.storage.set('entrepreneurAC', _this.entrepreneurAC - comission);
            }
            else {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: data.error,
                    duration: 5000,
                    position: 'bottom',
                    cssClass: "danger"
                });
                toast.present();
            }
        }, function (error) {
            console.log(error);
            console.log("Impossible d'envoyer l'enquête !");
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Impossible d\'enregistrer la vente, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
                duration: 5000,
                position: 'bottom',
                cssClass: "danger"
            });
            toast.present();
        });
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/cart/cart.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title> \n      <span *ngIf="cartObj" [ngPlural]="cartObj.totalProduct">\n        <ng-template ngPluralCase="=0">Panier - Aucun produit</ng-template>\n        <ng-template ngPluralCase="=1">Panier - 1 produit</ng-template>\n        <ng-template ngPluralCase="other">Panier - {{cartObj.totalProduct}} produits</ng-template>      \n      </span>\n    </ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="cartObj" no-padding>\n    <h3>Panier : </h3>  \n    <ion-list *ngFor="let product of cartObj.products" no-padding>\n        <ion-row *ngIf="product">\n            <ion-col no-padding>              \n              <ion-card no-padding >\n                <ion-row>\n                  <ion-col col-4 class="service-img">\n                    <img src="./assets/imgs/{{product.picture}}" alt="">\n                  </ion-col>\n                  <ion-col col-8>\n                    <div class="card-title" >{{product.title}}</div>\n                    <div>\n                      <p class="price">{{product.price}} Fcfa</p>\n                      <p>(Total = {{cartObj.products[product.id].qty * product.price}} Fcfa)</p>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n      </ion-list>\n  </div>\n    \n  <div *ngIf="cartObj && cartObj.totalProduct == 0" class="noitem"><p>Votre panier est vide</p></div>\n  \n  <div *ngIf="cartObj && cartObj.totalProduct > 0">\n\n    <div class="price">\n      <table class="total">\n        <tr class="cart-total">\n          <td  class="title">Prix total : </td>\n          <td> {{cartTotal}} Fcfa</td>\n        </tr>\n        <tr class="separator">\n          <td colspan=2></td>\n        </tr>\n        <tr class="comission">\n          <td class="title"><b>A payer : </b></td>\n          <td><b>{{cartTotal * 0.2}} Fcfa</b></td>\n        </tr>\n      </table>\n    </div>\n  \n    <div *ngIf="entrepreneurAC && (entrepreneurAC < cartTotal * 0.2)">\n      <p class="disabled"><ion-icon name="alert"></ion-icon>&nbsp; Votre solde actuel  ({{entrepreneurAC}} Fcfa) est insuffisant, veuillez modifier votre panier ou recharger votre compte.</p>\n    </div>\n    <div *ngIf="cartObj && cartObj.totalProduct > 0">\n        <div no-padding>\n          <button ion-button block color="danger" (click)="emptyCart()">Vider le panier</button>\n        </div>    \n      </div>\n    <h3>Client : </h3>\n\n    <div no-padding class="validate-btn" *ngIf="checkClientRes && checkClientRes == \'OK\'" class="customerName">    \n        <h4 style="margin-top:20px;">{{clientLastname}} {{clientFirstname}}</h4>\n        \n        <!-- <button ion-button block large [disabled]="entrepreneurAC && (entrepreneurAC < cartTotal * 0.2)" [navPush]="pageClient" [navParams]=\'{clientTel : clientTel, cartObj:cartObj, cartTotal:cartTotal}\' >Valider la vente</button> -->\n      </div>    \n\n      <ion-list  class="marginBottom">  \n        <ion-item>\n          <ion-label floating>Téléphone Client : </ion-label>\n          <ion-input type="number" [(ngModel)]="clientTel"></ion-input>\n        </ion-item> \n        <ion-input [hidden]="true" ></ion-input>\n        <div no-padding class="validate-btn">\n          <button ion-button block large color="secondary" [disabled]="entrepreneurAC && (entrepreneurAC < cartTotal * 0.2)" (click)="checkClient()">Rechercher le client</button>\n        </div>  \n      </ion-list> \n\n      <button ion-button block large [disabled]="entrepreneurAC && (entrepreneurAC < cartTotal * 0.2)" (click)="sendPayment(cartTotal)" class="validate-btn">Valider le paiement</button>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

},[250]);
//# sourceMappingURL=main.js.map