webpackJsonp([16],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVars; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
var GlobalVars = (function () {
    function GlobalVars() {
        this.entrepreneurId = "";
        this.entrepreneurTel = "";
    }
    GlobalVars.prototype.setId = function (value) {
        this.entrepreneurId = value;
    };
    GlobalVars.prototype.getId = function () {
        return this.entrepreneurId;
    };
    GlobalVars.prototype.setTel = function (value) {
        this.entrepreneurTel = value;
    };
    GlobalVars.prototype.getTel = function () {
        return this.entrepreneurTel;
    };
    GlobalVars.prototype.getApiUrl = function () {
        return "http://benoo-api:8888/api/";
        //return "https://benoo-v2-api.herokuapp.com/api/";
    };
    GlobalVars = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalVars);
    return GlobalVars;
}());

//# sourceMappingURL=globalVars.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__offline_cart_offline_cart__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the OfflineProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfflineProductsPage = (function () {
    function OfflineProductsPage(storage, navParams) {
        var _this = this;
        this.storage = storage;
        this.navParams = navParams;
        this.servicesData = [];
        this.loadProducts(this.navParams.data.typeId);
        this.serviceName = this.navParams.data.serviceNamme;
        this.offlineCartPage = __WEBPACK_IMPORTED_MODULE_0__offline_cart_offline_cart__["a" /* OfflineCartPage */];
        this.storage.get('offlineCart').then(function (resp) {
            if (resp !== null) {
                _this.offlineCart = resp;
            }
        });
    }
    OfflineProductsPage.prototype.loadProducts = function (ind) {
        var _this = this;
        this.storage.get('entrepreneur_products').then(function (resp) {
            if (resp !== null) {
                _this.servicesData = resp[ind].products;
            }
        });
    };
    OfflineProductsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadProducts(this.navParams.data.typeId);
        this.storage.get('offlineCart').then(function (resp) {
            if (resp !== null) {
                _this.offlineCart = resp;
            }
        });
    };
    OfflineProductsPage.prototype.addItemToCart = function (cartObj, productId, productTitle, productPrice, productPicture, productDecimal) {
        var _this = this;
        var item = cartObj;
        if (item.products[productId]) {
            var newVal;
            if (productDecimal == 0) {
                newVal = item.products[productId].qty + 1;
            }
            else {
                newVal = +(item.products[productId].qty + 0.1).toFixed(1);
            }
            item.products[productId] = { id: productId, title: productTitle, price: productPrice, picture: productPicture, qty: newVal };
        }
        else {
            if (productDecimal == 0) {
                newVal = 1;
            }
            else {
                newVal = 0.1;
            }
            item.products[productId] = { id: productId, title: productTitle, price: productPrice, picture: productPicture, qty: newVal };
        }
        item.totalProduct = item.totalProduct + 1;
        this.storage.set('offlineCart', item).then(function (data) {
            _this.offlineCart = data;
        });
    };
    OfflineProductsPage.prototype.removeItemToCart = function (cartObj, productId, productTitle, productPrice, productPicture, productDecimal) {
        var _this = this;
        console.log(productId);
        var item = cartObj;
        var newVal;
        if (productDecimal == 0) {
            newVal = item.products[productId].qty - 1;
            if (newVal > 0) {
                item.products[productId] = { id: productId, title: productTitle, price: productPrice, picture: productPicture, qty: newVal };
            }
            else {
                item.products[productId] = null;
            }
        }
        else {
            newVal = +(item.products[productId].qty - 0.1).toFixed(1);
            if (newVal > 0) {
                item.products[productId] = { id: productId, title: productTitle, price: productPrice, picture: productPicture, qty: newVal };
            }
            else {
                item.products[productId] = null;
            }
        }
        item.totalProduct = item.totalProduct - 1;
        this.storage.set('offlineCart', item).then(function (data) {
            _this.offlineCart = data;
        });
    };
    OfflineProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-offline-products',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/offline-products/offline-products.html"*/'<!--\n  Generated template for the ServicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{serviceName}}</ion-title>\n    <ion-buttons end>\n        <button ion-button [navPush]="offlineCartPage" [navParams]="offlineCart">\n          <ion-icon name="cart"></ion-icon>\n          <span *ngIf="offlineCart">{{offlineCart.totalProduct}}</span>\n        </button>\n      </ion-buttons>    \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-list *ngFor="let service of servicesData" no-padding>\n        <ion-row>\n            <ion-col no-padding>\n              <!-- <ion-card no-padding [navPush]="pageService" [navParams]=\'{serviceId : service.id}\'> -->\n              <ion-card no-padding >\n                <ion-row>\n                  <ion-col col-4 class="service-img">\n                    <img src="./assets/imgs/{{service.picture}}" alt="">\n                  </ion-col>\n                  <ion-col col-6>\n                    <div class="card-title" >{{service.title}}</div>\n                    <div class="price">{{service.price_fcfa}} Fcfa</div>\n                  </ion-col>\n                  <ion-col *ngIf="offlineCart && offlineCart.products[service.id]; else templateName" col-2 class="icon added" >\n                      <div class="item-add" (click)="addItemToCart(offlineCart, service.id, service.title, service.price_fcfa, service.picture, service.decimal)">\n                        <ion-icon name="add"></ion-icon>\n                      </div>\n                      <div class="item-qty">\n                          <span>{{offlineCart.products[service.id].qty}}</span>\n                      </div>\n                      <div class="item-remove" (click)="removeItemToCart(offlineCart, service.id, service.title, service.price_fcfa, service.picture, service.decimal)">\n                          <ion-icon name="remove"></ion-icon>\n                      </div>\n                  </ion-col>\n                  <ng-template #templateName>                    \n                    <ion-col col-2 class="empty icon" (click)="addItemToCart(offlineCart, service.id, service.title, service.price_fcfa, service.picture, service.decimal)">\n                        <ion-icon name="add"></ion-icon>\n                    </ion-col>\n                  </ng-template>\n                </ion-row>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/offline-products/offline-products.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], OfflineProductsPage);
    return OfflineProductsPage;
    var _a, _b;
}());

//# sourceMappingURL=offline-products.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrepreneurProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entrepreneur_cart_entrepreneur_cart__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalVars__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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
 * Generated class for the EntrepreneurProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntrepreneurProductPage = (function () {
    function EntrepreneurProductPage(navCtrl, navParams, storage, global, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.global = global;
        this.http = http;
        this.entrepreneurBenooId = this.global.getId();
        this.entrepreneurTel = this.global.getTel();
        this.catName = this.navParams.data.typeName;
        this.entCartPage = __WEBPACK_IMPORTED_MODULE_0__entrepreneur_cart_entrepreneur_cart__["a" /* EntrepreneurCartPage */];
        this.storage.get('entCart').then(function (resp) {
            if (resp !== null) {
                _this.entCartObj = resp;
            }
            else {
                _this.entCartObj = { products: [], totalProduct: 0 };
            }
        });
        this.loadProducts();
    }
    EntrepreneurProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EntrepreneurProductPage');
    };
    EntrepreneurProductPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('entCart').then(function (resp) {
            if (resp !== null) {
                _this.entCartObj = resp;
            }
        });
    };
    EntrepreneurProductPage.prototype.loadProducts = function () {
        var _this = this;
        // SI CONNEXION Récupération de la liste des villages
        var link = this.global.getApiUrl() + 'entrepreneurs/products/' + this.navParams.data.typeId + '?entrepreneurTel=' + this.entrepreneurTel;
        this.http.get(link)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data && data.status) {
                _this.products = data.data;
                console.log(data.data);
            }
        }, function (error) {
            console.log(error);
        });
    };
    EntrepreneurProductPage.prototype.addItemToCart = function (cartObj, productId, productTitle, productPrice, productPicture, productDecimal) {
        var _this = this;
        var item = cartObj;
        if (item.products[productId]) {
            var newVal;
            if (productDecimal == 0) {
                newVal = item.products[productId].qty + 1;
            }
            else {
                newVal = +(item.products[productId].qty + 0.1).toFixed(1);
            }
            item.products[productId] = { id: productId, title: productTitle, price: productPrice, picture: productPicture, qty: newVal };
        }
        else {
            if (productDecimal == 0) {
                newVal = 1;
            }
            else {
                newVal = 0.1;
            }
            item.products[productId] = { id: productId, title: productTitle, price: productPrice, picture: productPicture, qty: newVal };
        }
        item.totalProduct = item.totalProduct + 1;
        this.storage.set('entCart', item).then(function (data) {
            _this.entCartObj = data;
        });
    };
    EntrepreneurProductPage.prototype.removeItemToCart = function (cartObj, productId, productTitle, productPrice, productPicture, productDecimal) {
        var _this = this;
        var item = cartObj;
        if (productDecimal == 0) {
            var newVal = +(item.products[productId].qty - 1).toFixed(1);
            if (newVal > 0) {
                item.products[productId] = { id: productId, title: productTitle, price: productPrice, picture: productPicture, qty: newVal };
            }
            else {
                item.products[productId] = null;
            }
        }
        else {
            var newVal = +(item.products[productId].qty - 0.1).toFixed(1);
            if (newVal > 0) {
                item.products[productId] = { id: productId, title: productTitle, price: productPrice, picture: productPicture, qty: newVal };
            }
            else {
                item.products[productId] = null;
            }
        }
        item.totalProduct = item.totalProduct - 1;
        this.storage.set('entCart', item).then(function (data) {
            _this.entCartObj = data;
        });
    };
    EntrepreneurProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-entrepreneur-product',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/entrepreneur-product/entrepreneur-product.html"*/'<!--\n  Generated template for the EntrepreneurProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>{{catName}}</ion-title>\n      <ion-buttons end>\n          <button ion-button [navPush]="entCartPage" [navParams]="entCartObj">\n            <ion-icon name="cube"></ion-icon>&nbsp;\n            <span *ngIf="entCartObj">{{entCartObj.totalProduct}}</span>\n          </button>\n        </ion-buttons>    \n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list *ngFor="let product of products" no-padding>\n        <ion-row>\n            <ion-col no-padding>\n              <ion-card no-padding >\n                <ion-row>\n                  <ion-col col-4 class="service-img">\n                    <img src="./assets/imgs/{{product.picture}}" alt="">\n                  </ion-col>\n                  <ion-col col-6>\n                    <div class="card-title" >{{product.title}}</div>\n                    <div class="price">{{product.price_fcfa}} Fcfa</div>\n                  </ion-col>\n                  <ion-col *ngIf="entCartObj && entCartObj.products[product.id]; else empty" col-2 class="icon added" >\n                      <div class="item-add" (click)="addItemToCart(entCartObj, product.id, product.title, product.price_fcfa, product.picture, product.decimal)">\n                        <ion-icon name="add"></ion-icon>\n                      </div>\n                      <div class="item-qty">\n                          <span>{{entCartObj.products[product.id].qty}}</span>\n                      </div>\n                      <div class="item-remove" (click)="removeItemToCart(entCartObj, product.id, product.title, product.price_fcfa, product.picture, product.decimal)">\n                          <ion-icon name="remove"></ion-icon>\n                      </div>\n                  </ion-col>\n                  <ng-template #empty>                    \n                    <ion-col col-2 class="empty icon" (click)="addItemToCart(entCartObj, product.id, product.title, product.price_fcfa, product.picture, product.decimal)">\n                        <ion-icon name="add"></ion-icon>\n                    </ion-col>\n                  </ng-template>\n                </ion-row>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/entrepreneur-product/entrepreneur-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_globalVars__["a" /* GlobalVars */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], EntrepreneurProductPage);
    return EntrepreneurProductPage;
}());

//# sourceMappingURL=entrepreneur-product.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_cart__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_product_service_product_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__ = __webpack_require__(13);
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
    function ServicePage(navCtrl, navParams, productService, storage, global) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.storage = storage;
        this.global = global;
        this.servicesData = [];
        this.pageCart = __WEBPACK_IMPORTED_MODULE_0__cart_cart__["a" /* CartPage */];
        this.serviceName = this.navParams.data.typeName;
        this.storage.get('cart').then(function (resp) {
            if (resp !== null) {
                _this.cartObj = resp;
            }
        });
        this.entrepreneurBenooId = this.global.getId();
        this.entrepreneurTel = this.global.getTel();
        this.getProducts(this.navParams.data.typeId, this.global.getId(), this.global.getTel());
    }
    ServicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicePage');
    };
    ServicePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('cart').then(function (resp) {
            if (resp !== null) {
                _this.cartObj = resp;
            }
        });
    };
    ServicePage.prototype.getProducts = function (id, entrepreneurId, entrepreneurTel) {
        var _this = this;
        this.productService.getProductByType(id, entrepreneurId, entrepreneurTel).subscribe(function (data) {
            _this.servicesData = data.data;
        });
    };
    ServicePage.prototype.addItemToCart = function (cartObj, productId, productTitle, productPrice, productPicture, productDecimal) {
        var _this = this;
        var item = cartObj;
        console.log(productId);
        if (item.products[productId]) {
            var newVal;
            if (productDecimal == 0) {
                newVal = item.products[productId].qty + 1;
            }
            else {
                newVal = +(item.products[productId].qty + 0.1).toFixed(1);
            }
            item.products[productId] = { id: productId, title: productTitle, price: productPrice, picture: productPicture, qty: newVal };
        }
        else {
            if (productDecimal == 0) {
                newVal = 1;
            }
            else {
                newVal = 0.1;
            }
            item.products[productId] = { id: productId, title: productTitle, price: productPrice, picture: productPicture, qty: newVal };
        }
        item.totalProduct = item.totalProduct + 1;
        this.storage.set('cart', item).then(function (data) {
            _this.cartObj = data;
            console.log(data);
        });
    };
    ServicePage.prototype.removeItemToCart = function (cartObj, productId, productTitle, productPrice, productPicture, productDecimal) {
        var _this = this;
        console.log(productId);
        var item = cartObj;
        var newVal;
        if (productDecimal == 0) {
            newVal = item.products[productId].qty - 1;
            if (newVal > 0) {
                item.products[productId] = { id: productId, title: productTitle, price: productPrice, picture: productPicture, qty: newVal };
            }
            else {
                item.products[productId] = null;
            }
        }
        else {
            newVal = +(item.products[productId].qty - 0.1).toFixed(1);
            if (newVal > 0) {
                item.products[productId] = { id: productId, title: productTitle, price: productPrice, picture: productPicture, qty: newVal };
            }
            else {
                item.products[productId] = null;
            }
        }
        item.totalProduct = item.totalProduct - 1;
        this.storage.set('cart', item).then(function (data) {
            _this.cartObj = data;
        });
    };
    ServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-service',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/service/service.html"*/'<!--\n  Generated template for the ServicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{serviceName}}</ion-title>\n    <ion-buttons end>\n        <button ion-button [navPush]="pageCart" [navParams]="cartObj">\n          <ion-icon name="cart"></ion-icon>\n          <span *ngIf="cartObj">{{cartObj.totalProduct}}</span>\n        </button>\n      </ion-buttons>    \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-list *ngFor="let service of servicesData" no-padding>\n        <ion-row>\n            <ion-col no-padding>\n              <!-- <ion-card no-padding [navPush]="pageService" [navParams]=\'{serviceId : service.id}\'> -->\n              <ion-card no-padding >\n                <ion-row>\n                  <ion-col col-4 class="service-img">\n                    <img src="./assets/imgs/{{service.picture}}" alt="">\n                  </ion-col>\n                  <ion-col col-6>\n                    <div class="card-title" >{{service.title}}</div>\n                    <div class="price">{{service.price_fcfa}} Fcfa</div>\n                  </ion-col>\n                  <ion-col *ngIf="cartObj && cartObj.products[service.id]; else templateName" col-2 class="icon added" >\n                      <div class="item-add" (click)="addItemToCart(cartObj, service.id, service.title, service.price_fcfa, service.picture, service.decimal)">\n                        <ion-icon name="add"></ion-icon>\n                      </div>\n                      <div class="item-qty">\n                          <span>{{cartObj.products[service.id].qty}}</span>\n                      </div>\n                      <div class="item-remove" (click)="removeItemToCart(cartObj, service.id, service.title, service.price_fcfa, service.picture, service.decimal)">\n                          <ion-icon name="remove"></ion-icon>\n                      </div>\n                  </ion-col>\n                  <ng-template #templateName>                    \n                    <ion-col col-2 class="empty icon" (click)="addItemToCart(cartObj, service.id, service.title, service.price_fcfa, service.picture, service.decimal)">\n                        <ion-icon name="add"></ion-icon>\n                    </ion-col>\n                  </ng-template>\n                </ion-row>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/service/service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_product_service_product_service__["a" /* ProductServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__["a" /* GlobalVars */]])
    ], ServicePage);
    return ServicePage;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalVars__ = __webpack_require__(13);
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
    function SurveyPage(navCtrl, storage, http, navParams, toastCtrl, loading, alertCtrl, global) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.entrepreneurBenooId = this.global.getId();
        this.entrepreneurTel = this.global.getTel();
    }
    SurveyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveyPage');
    };
    SurveyPage.prototype.saveSurvey = function () {
        var _this = this;
        console.log('SAVE SURVEY');
        var link = this.global.getApiUrl() + 'survey/' + this.entrepreneurBenooId + '/create';
        var loader = this.loading.create({
            content: 'Enregistrement de l\'enquête...',
        });
        loader.present();
        var data = {
            entrepreneurTel: this.entrepreneurTel,
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
            selector: 'page-survey',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/survey/survey.html"*/'<!--\n  Generated template for the SurveyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Enquête Client</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>      \n    <h4>Contact</h4>\n    <ion-item>\n      <ion-label floating>Nom : </ion-label>\n      <ion-input type="text" [(ngModel)]="clientLastname"></ion-input>\n    </ion-item> \n    <ion-item>\n      <ion-label floating>Prénom : </ion-label>\n      <ion-input type="text" [(ngModel)]="clientFirstname"></ion-input>\n    </ion-item> \n    <ion-item>\n      <ion-label floating>Situation : </ion-label>\n      <ion-select [(ngModel)]="clientSituation">\n        <ion-option value="Salarié privé">Salarié privé</ion-option>\n        <ion-option value="Fonctionnaire">Fonctionnaire</ion-option>\n        <ion-option value="Entrepreneur">Entrepreneur</ion-option>\n        <ion-option value="Agriculteur">Agriculteur</ion-option>\n        <ion-option value="Sans profession">Sans profession</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Téléphone : </ion-label>\n      <ion-input type="number" [(ngModel)]="clientTel"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Activité : </ion-label>\n      <ion-select [(ngModel)]="clientJob">\n        <ion-option value="Foyer">Foyer</ion-option>\n        <ion-option value="Centre de culte">Centre de culte</ion-option>\n        <ion-option value="Boutique">Boutique</ion-option>\n        <ion-option value="Produits frais / alimentation">Produits frais / alimentation</ion-option>\n        <ion-option value="Salon de coiffure">Salon de coiffure</ion-option>\n        <ion-option value="Tailleur">Tailleur</ion-option>\n        <ion-option value="Scierie">Scierie</ion-option>\n        <ion-option value="Restauration">Restauration</ion-option>\n        <ion-option value="Tourneur">Tourneur</ion-option>\n        <ion-option value="Transformation agricole">Transformation agricole</ion-option>\n        <ion-option value="Vulcanisateur">Vulcanisateur</ion-option>\n        <ion-option value="Menuisier">Menuisier</ion-option>\n        <ion-option value="Mécanicien">Mécanicien</ion-option>\n        <ion-option value="Peintre">Peintre</ion-option>\n        <ion-option value="Cordonnier">Cordonnier</ion-option>\n        <ion-option value="Centre de santé">Centre de santé</ion-option>\n        <ion-option value="Soudeur">Soudeur</ion-option>\n        <ion-option value="Education">Education</ion-option>\n        <ion-option value="IMF">IMF</ion-option>\n        <ion-option value="Autre">Autre</ion-option>          \n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf="clientJob && clientJob == \'Autre\'">\n      <ion-label floating>Autre activité : </ion-label>\n      <ion-input type="text" [(ngModel)]="clientJob2"></ion-input>\n    </ion-item> \n\n    <ion-item *ngIf="clientJob && clientJob == \'Foyer\'">\n      <ion-label floating>Type de construction : </ion-label>\n      <ion-select [(ngModel)]="clientFoyer">\n        <ion-option value="Semi-dur">Semi-dur</ion-option>\n        <ion-option value="Dur">Dur</ion-option>\n      </ion-select>\n    </ion-item> \n\n    <h4>Equipement actuel</h4>\n    <ion-item>\n      <ion-label floating>Lampe pétrole</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_lampe"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Torche éléctrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_torche"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Bougie</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_bougie"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Ampoule</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_ampoule"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Ventilateur</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_ventilateur"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Téléphone</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_tel"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Climatisation</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_clim"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Radio</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_radio"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Machine à laver</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_machine_laver"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Réfrigérateur</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_frigo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Congélateur</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_congelateur"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>TV</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_tv"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Lecteur DVD</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_dvd"></ion-input>\n    </ion-item>\n\n    <!-- CHAMPS CONDITIONNELS -->\n\n    <ion-item  *ngIf="clientJob && clientJob == \'Salon de coiffure\'">\n      <ion-label floating>Tondeuse électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_tondeuse"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n      <ion-label floating>Machine à broder</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_machine_broder"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n      <ion-label floating>Machine à pleinte</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_machine_pleinte"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n      <ion-label floating>Machine à coudre</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_machine_coudre"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Scie circulaire électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_scie_circulaire"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Scie sauteuse electrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_scie_sauteuse"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Toupie</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_toupie"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Raboteuse</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_raboteuse"></ion-input>\n    </ion-item>\n    <ion-item  *ngIf="clientJob && clientJob == \'Tourneur\'">\n      <ion-label floating>Fraise électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_fraise"></ion-input>\n    </ion-item>\n    <ion-item  *ngIf="clientJob && clientJob == \'Transformation agricole\'">\n      <ion-label floating>Moulin électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_moulin"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Soudeur\'">\n      <ion-label floating>Arc à souder</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_arc_souder"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Menuisier\'">\n      <ion-label floating>Ponceuse</ion-label>\n      <ion-input type="number"  [(ngModel)]="dispo_ponceuse"></ion-input>\n    </ion-item>\n    \n    <h4>Equipement souhaité</h4>\n    <ion-item>\n      <ion-label floating>Ampoule</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_ampoule"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Ventilateur</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_ventilateur"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Téléphone</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_tel"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Climatisation</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_clim"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Radio</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_radio"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Machine à laver</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_machine_laver"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Réfrigérateur</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_frigo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Congélateur</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_congelateur"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>TV</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_tv"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Lecteur DVD</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_dvd"></ion-input>\n    </ion-item>\n\n    <!-- CHAMPS CONDITIONNELS -->\n    \n    <ion-item  *ngIf="clientJob && clientJob == \'Salon de coiffure\'">\n      <ion-label floating>Tondeuse électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_tondeuse"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n      <ion-label floating>Machine à broder</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_machine_broder"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n      <ion-label floating>Machine à pleinte</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_machine_pleinte"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n      <ion-label floating>Machine à coudre</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_machine_coudre"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Scie circulaire électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_scie_circulaire"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Scie sauteuse electrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_scie_sauteuse"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Toupie</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_toupie"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n      <ion-label floating>Raboteuse</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_raboteuse"></ion-input>\n    </ion-item>\n    <ion-item  *ngIf="clientJob && clientJob == \'Tourneur\'">\n      <ion-label floating>Fraise électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_fraise"></ion-input>\n    </ion-item>\n    <ion-item  *ngIf="clientJob && clientJob == \'Transformation agricole\'">\n      <ion-label floating>Moulin électrique</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_moulin"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Soudeur\'">\n      <ion-label floating>Arc à souder</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_arc_souder"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="clientJob && clientJob == \'Menuisier\'">\n      <ion-label floating>Ponceuse</ion-label>\n      <ion-input type="number"  [(ngModel)]="wish_ponceuse"></ion-input>\n    </ion-item>\n    \n    <h4>Production énergie</h4>\n    <p>Kit solaire :</p>\n    <ion-list radio-group [(ngModel)]="clientKit">\n      <ion-item>\n        <ion-label>Oui</ion-label>\n        <ion-radio value="oui" ></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Non</ion-label>\n        <ion-radio value="non" checked></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item *ngIf="clientKit && clientKit == \'oui\'">\n      <ion-label floating>Puissance (watt) : </ion-label>\n      <ion-input type="number" [(ngModel)]="clientKitP"></ion-input>\n    </ion-item> \n\n\n    <p>Compagnie électrique :</p>\n    <ion-list radio-group [(ngModel)]="clientCeet">\n      <ion-item>\n        <ion-label>Oui</ion-label>\n        <ion-radio value="oui" ></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Non</ion-label>\n        <ion-radio value="non" checked></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item *ngIf="clientCeet && clientCeet == \'oui\'">\n        <ion-label floating>Abonnement : </ion-label>\n        <ion-select [(ngModel)]="clientCeetTranche">\n          <ion-option value="Tranche sociale">Tranche sociale</ion-option>\n          <ion-option value="Tranche 1">Tranche 1</ion-option>\n          <ion-option value="Tranche 2">Tranche 2</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n    <p>Groupe electrogène :</p>\n    <ion-list radio-group [(ngModel)]="clientGE">\n      <ion-item>\n        <ion-label>Oui</ion-label>\n        <ion-radio value="oui" ></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Non</ion-label>\n        <ion-radio value="non" checked></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item *ngIf="clientGE && clientGE == \'oui\'">\n      <ion-label floating>Puissance (watt) : </ion-label>\n      <ion-input type="number" [(ngModel)]="clientGEP"></ion-input>\n    </ion-item> \n\n\n    <p>Mini-réseau :</p>\n    <ion-list radio-group [(ngModel)]="clientReseau">\n      <ion-item>\n        <ion-label>Oui</ion-label>\n        <ion-radio value="oui" ></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Non</ion-label>\n        <ion-radio value="non" checked></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item *ngIf="clientReseau && clientReseau == \'oui\'">\n      <ion-label floating>Puissance (watt) : </ion-label>\n      <ion-input type="number" [(ngModel)]="clientReseauP"></ion-input>\n    </ion-item> \n\n\n    <h4>Autres équipements</h4>\n<!--     <ion-item>\n      <ion-label floating>Opérateur : </ion-label>\n      <ion-select [(ngModel)]="telephoneOperator">\n        <ion-option value="Fonctionnaire">Moov</ion-option>\n        <ion-option value="Entrepreneur">Togocel</ion-option>\n      </ion-select>\n    </ion-item> -->\n    <ion-item>\n      <ion-label floating>Opérateur 1 : </ion-label>\n      <ion-input type="text"  [(ngModel)]="telephoneOperator"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Opérateur 2 : </ion-label>\n      <ion-input type="text"  [(ngModel)]="telephoneOperator2"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Budget recharge tél./sem.</ion-label>\n      <ion-input type="number"  [(ngModel)]="telephoneCost"></ion-input>\n    </ion-item>\n\n    <ion-input [hidden]="true" ></ion-input>\n  </ion-list>  \n  <div no-padding class="validate-btn">      \n    <button ion-button block large  [navPush]="" [navParams]=\'\' (click)="saveSurvey()" >Valider</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/survey/survey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_globalVars__["a" /* GlobalVars */]])
    ], SurveyPage);
    return SurveyPage;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineSalesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__offline_products_offline_products__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__offline_cart_offline_cart__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
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
 * Generated class for the OfflineSalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfflineSalesPage = (function () {
    function OfflineSalesPage(storage) {
        var _this = this;
        this.storage = storage;
        this.loadcategory();
        this.offlineCartPage = __WEBPACK_IMPORTED_MODULE_1__offline_cart_offline_cart__["a" /* OfflineCartPage */];
        this.offlineProductPage = __WEBPACK_IMPORTED_MODULE_0__offline_products_offline_products__["a" /* OfflineProductsPage */];
        this.storage.get('offlineCart').then(function (resp) {
            if (resp !== null) {
                _this.offlineCart = resp;
                console.log(resp);
            }
        });
    }
    OfflineSalesPage.prototype.loadcategory = function () {
        var _this = this;
        this.storage.get('entrepreneur_products').then(function (resp) {
            if (resp !== null) {
                _this.menuData = resp;
                console.log(resp);
            }
        });
    };
    OfflineSalesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadcategory();
        this.storage.get('offlineCart').then(function (resp) {
            if (resp !== null) {
                _this.offlineCart = resp;
                console.log(resp);
            }
        });
    };
    OfflineSalesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-offline-sales',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/offline-sales/offline-sales.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>Services</ion-title>\n      <ion-buttons end>\n          <!-- <button ion-button [navPush]="pageCart" [navParams]="offlineCart"> -->\n          <button ion-button [navPush]="offlineCartPage" [navParams]="offlineCart">\n            <ion-icon name="cart"></ion-icon>&nbsp;\n            <span *ngIf="offlineCart">{{offlineCart.totalProduct}}</span>\n          </button>\n        </ion-buttons>    \n    </ion-navbar>\n</ion-header>\n  \n<ion-content no-padding>\n<ion-list no-padding>\n  <ion-row no-padding>\n      <ion-col  *ngFor="let menu of menuData; let i= index" col-6>\n        <ion-card no-padding [navPush]="offlineProductPage" [navParams]=\'{typeId : i, typeName : menu.title}\'>\n          <img src="./assets/imgs/{{menu.picture}}" alt="">\n          <div class="card-title" >{{menu.title}}</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n</ion-list>\n<!-- <div padding>\n  <button ion-button block large (click)="displaySurvey()"><ion-icon name="checkbox-outline"></ion-icon> &nbsp;&nbsp;&nbsp;Enquête client</button>\n</div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/offline-sales/offline-sales.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], OfflineSalesPage);
    return OfflineSalesPage;
}());

//# sourceMappingURL=offline-sales.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(11);
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
 * Generated class for the OfflineOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfflineOrdersPage = (function () {
    function OfflineOrdersPage(storage) {
        this.storage = storage;
        this.loadOrders();
    }
    OfflineOrdersPage.prototype.loadOrders = function () {
        var _this = this;
        this.storage.get('entrepreneur_orders').then(function (resp) {
            if (resp !== null) {
                _this.orders = resp.data;
                console.log(resp);
            }
        });
    };
    OfflineOrdersPage.prototype.ionViewWillEnter = function () {
        this.loadOrders();
    };
    OfflineOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offline-orders',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/offline-orders/offline-orders.html"*/'<!--\n  Generated template for the OfflineOrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Commandes en cours <span *ngIf="orders && orders.length > 0">({{orders.length}})</span></ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content no-padding>\n  <div *ngIf="orders && orders.length > 0" no-padding>\n      <ion-list *ngFor="let order of orders">\n        <ion-card>\n            <div class="card-title" ><h3>Commande du {{order.date}} (#{{order.id}})</h3></div>\n                <div class="order-info">\n                    <p><b>Détail :</b></p>\n                    <ul [innerHTML]="order.detail"></ul>\n                    <p><b>Total :</b> {{order.total}} Fcfa</p>\n                    <p><b>Statut :</b>\n                      {{order.statusLibelle}}\n                    </p>\n                </div>  \n          </ion-card>         \n      </ion-list>\n  </div>\n      \n  <div *ngIf="orders && orders.length == 0" no-padding>\n    <p>Pas de commandes enregistrées actuellement.</p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/offline-orders/offline-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], OfflineOrdersPage);
    return OfflineOrdersPage;
}());

//# sourceMappingURL=offline-orders.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalSurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__ = __webpack_require__(13);
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
    function GlobalSurveyPage(navCtrl, navParams, http, toastCtrl, loading, geolocation, alertCtrl, network, global) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.global = global;
        this.loadVillages();
        this.loadEnqueteurs();
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
    GlobalSurveyPage.prototype.loadVillages = function () {
        this.benooVillages = JSON.parse(localStorage.getItem('benoo_villages'));
        console.log(this.benooVillages);
    };
    GlobalSurveyPage.prototype.loadEnqueteurs = function () {
        this.benooEnqueteurs = JSON.parse(localStorage.getItem('benoo_enqueteurs'));
        console.log(this.benooEnqueteurs);
    };
    GlobalSurveyPage.prototype.saveSurvey = function () {
        var _this = this;
        console.log('SAVE SURVEY');
        this.onlineStatus = window.navigator.onLine;
        console.log(this.onlineStatus);
        var link = this.global.getApiUrl() + 'survey-prospect/create';
        var loader = this.loading.create({
            content: 'Enregistrement de l\'enquête...',
        });
        loader.present();
        var data = {
            //idProspect : this.idProspect,
            enqueteurId: this.enqueteurId,
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
            selector: 'page-global-survey',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/global-survey/global-survey.html"*/'<!--\n  Generated template for the SurveyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Enquête Client</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list>    \n     <!--  <ion-item>\n        <ion-label floating>ID Enquêteur : </ion-label>\n        <ion-input type="number" [(ngModel)]="idProspect"></ion-input>\n      </ion-item>    -->  \n      <ion-item>\n        <ion-label floating> Enquêteur : </ion-label>\n        <!-- <ion-input type="text" [(ngModel)]="village"></ion-input> -->\n        <ion-select [(ngModel)]="enqueteurId">\n          <ion-option  *ngFor="let enq of benooEnqueteurs" [value]="enq.id">{{enq.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label floating> Village enquêté : </ion-label>\n        <!-- <ion-input type="text" [(ngModel)]="village"></ion-input> -->\n        <ion-select [(ngModel)]="village">\n          <ion-option  *ngFor="let vi of benooVillages" [value]="vi.id">{{vi.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <h4>Contact</h4>\n      <ion-item>\n        <ion-label floating>Nom : </ion-label>\n        <ion-input type="text" [(ngModel)]="clientLastname"></ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-label floating>Prénom : </ion-label>\n        <ion-input type="text" [(ngModel)]="clientFirstname"></ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-label floating>Situation : </ion-label>\n        <ion-select [(ngModel)]="clientSituation">\n          <ion-option value="Salarié privé">Salarié privé</ion-option>\n          <ion-option value="Fonctionnaire">Fonctionnaire</ion-option>\n          <ion-option value="Entrepreneur">Entrepreneur</ion-option>\n          <ion-option value="Agriculteur">Agriculteur</ion-option>\n          <ion-option value="Sans profession">Sans profession</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Téléphone : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientTel"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Activité : </ion-label>\n        <ion-select [(ngModel)]="clientJob">\n          <ion-option value="Foyer">Foyer</ion-option>\n          <ion-option value="Centre de culte">Centre de culte</ion-option>\n          <ion-option value="Boutique">Boutique</ion-option>\n          <ion-option value="Produits frais / alimentation">Produits frais / alimentation</ion-option>\n          <ion-option value="Salon de coiffure">Salon de coiffure</ion-option>\n          <ion-option value="Tailleur">Tailleur</ion-option>\n          <ion-option value="Scierie">Scierie</ion-option>\n          <ion-option value="Restauration">Restauration</ion-option>\n          <ion-option value="Tourneur">Tourneur</ion-option>\n          <ion-option value="Transformation agricole">Transformation agricole</ion-option>\n          <ion-option value="Vulcanisateur">Vulcanisateur</ion-option>\n          <ion-option value="Menuisier">Menuisier</ion-option>\n          <ion-option value="Mécanicien">Mécanicien</ion-option>\n          <ion-option value="Peintre">Peintre</ion-option>\n          <ion-option value="Cordonnier">Cordonnier</ion-option>\n          <ion-option value="Centre de santé">Centre de santé</ion-option>\n          <ion-option value="Soudeur">Soudeur</ion-option>\n          <ion-option value="Education">Education</ion-option>\n          <ion-option value="IMF">IMF</ion-option>\n          <ion-option value="Autre">Autre</ion-option>          \n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="clientJob && clientJob == \'Autre\'">\n        <ion-label floating>Autre activité : </ion-label>\n        <ion-input type="text" [(ngModel)]="clientJob2"></ion-input>\n      </ion-item> \n\n      <ion-item *ngIf="clientJob && clientJob == \'Foyer\'">\n        <ion-label floating>Type de construction : </ion-label>\n        <ion-select [(ngModel)]="clientFoyer">\n          <ion-option value="Semi-dur">Semi-dur</ion-option>\n          <ion-option value="Dur">Dur</ion-option>\n          </ion-select>\n      </ion-item> \n\n      <h4>Equipement actuel</h4>\n      <ion-item>\n        <ion-label floating>Lampe pétrole</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_lampe"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Torche éléctrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_torche"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Bougie</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_bougie"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Ampoule</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_ampoule"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Ventilateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_ventilateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Téléphone</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_tel"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Climatisation</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_clim"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Radio</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_radio"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Machine à laver</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_laver"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Réfrigérateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_frigo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Congélateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_congelateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>TV</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_tv"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Lecteur DVD</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_dvd"></ion-input>\n      </ion-item>\n\n      <!-- CHAMPS CONDITIONNELS -->\n\n      <ion-item  *ngIf="clientJob && clientJob == \'Salon de coiffure\'">\n        <ion-label floating>Tondeuse électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_tondeuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à broder</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_broder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à pleinte</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_pleinte"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à coudre</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_coudre"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie circulaire électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_scie_circulaire"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie sauteuse electrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_scie_sauteuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Toupie</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_toupie"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Raboteuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_raboteuse"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Tourneur\'">\n        <ion-label floating>Fraise électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_fraise"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Transformation agricole\'">\n        <ion-label floating>Moulin électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_moulin"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Soudeur\'">\n        <ion-label floating>Arc à souder</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_arc_souder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Menuisier\'">\n        <ion-label floating>Ponceuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_ponceuse"></ion-input>\n      </ion-item>\n      \n      <h4>Equipement souhaité</h4>\n      <ion-item>\n        <ion-label floating>Ampoule</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_ampoule"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Ventilateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_ventilateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Téléphone</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_tel"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Climatisation</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_clim"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Radio</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_radio"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Machine à laver</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_laver"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Réfrigérateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_frigo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Congélateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_congelateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>TV</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_tv"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Lecteur DVD</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_dvd"></ion-input>\n      </ion-item>\n\n      <!-- CHAMPS CONDITIONNELS -->\n      \n      <ion-item  *ngIf="clientJob && clientJob == \'Salon de coiffure\'">\n        <ion-label floating>Tondeuse électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_tondeuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à broder</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_broder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à pleinte</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_pleinte"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à coudre</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_coudre"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie circulaire électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_scie_circulaire"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie sauteuse electrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_scie_sauteuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Toupie</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_toupie"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Raboteuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_raboteuse"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Tourneur\'">\n        <ion-label floating>Fraise électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_fraise"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Transformation agricole\'">\n        <ion-label floating>Moulin électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_moulin"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Soudeur\'">\n        <ion-label floating>Arc à souder</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_arc_souder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Menuisier\'">\n        <ion-label floating>Ponceuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_ponceuse"></ion-input>\n      </ion-item>\n      \n      <h4>Production énergie</h4>\n      <p>Kit solaire :</p>\n      <ion-list radio-group [(ngModel)]="clientKit">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      <ion-item *ngIf="clientKit && clientKit == \'oui\'">\n        <ion-label floating>Puissance (watt) : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientKitP"></ion-input>\n      </ion-item> \n\n\n      <p>Compagnie électrique :</p>\n      <ion-list radio-group [(ngModel)]="clientCeet">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      <ion-item *ngIf="clientCeet && clientCeet == \'oui\'">\n          <ion-label floating>Abonnement : </ion-label>\n          <ion-select [(ngModel)]="clientCeetTranche">\n            <ion-option value="Tranche sociale">Tranche sociale</ion-option>\n            <ion-option value="Tranche 1">Tranche 1</ion-option>\n            <ion-option value="Tranche 2">Tranche 2</ion-option>\n          </ion-select>\n        </ion-item>\n\n\n      <p>Groupe electrogène :</p>\n      <ion-list radio-group [(ngModel)]="clientGE">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      <ion-item *ngIf="clientGE && clientGE == \'oui\'">\n        <ion-label floating>Puissance (watt) : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientGEP"></ion-input>\n      </ion-item> \n\n\n      <p>Mini-réseau :</p>\n      <ion-list radio-group [(ngModel)]="clientReseau">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      <ion-item *ngIf="clientReseau && clientReseau == \'oui\'">\n        <ion-label floating>Puissance (watt) : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientReseauP"></ion-input>\n      </ion-item> \n\n\n      <h4>Autres équipements</h4>\n<!--       <ion-item>\n        <ion-label floating>Opérateur : </ion-label>\n        <ion-select [(ngModel)]="telephoneOperator">\n          <ion-option value="Fonctionnaire">Moov</ion-option>\n          <ion-option value="Entrepreneur">Togocel</ion-option>\n        </ion-select>\n      </ion-item> -->\n      <ion-item>\n        <ion-label floating>Opérateur 1 : </ion-label>\n        <ion-input type="text"  [(ngModel)]="telephoneOperator"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Opérateur 2 : </ion-label>\n        <ion-input type="text"  [(ngModel)]="telephoneOperator2"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Budget recharge tél./sem.</ion-label>\n        <ion-input type="number"  [(ngModel)]="telephoneCost"></ion-input>\n      </ion-item>\n\n      <ion-input [hidden]="true" ></ion-input>\n    </ion-list>  \n    <div no-padding class="validate-btn">      \n      <button ion-button block large [disabled]="enqueteurId == null ||enqueteurId == \'\'" [navPush]="" [navParams]=\'\' (click)="saveSurvey()" >Valider</button>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/global-survey/global-survey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__["a" /* GlobalVars */]])
    ], GlobalSurveyPage);
    return GlobalSurveyPage;
}());

//# sourceMappingURL=global-survey.js.map

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		364,
		15
	],
	"../pages/client/client.module": [
		218
	],
	"../pages/entrepreneur-cart/entrepreneur-cart.module": [
		365,
		14
	],
	"../pages/entrepreneur-category/entrepreneur-category.module": [
		366,
		13
	],
	"../pages/entrepreneur-order/entrepreneur-order.module": [
		367,
		12
	],
	"../pages/entrepreneur-product/entrepreneur-product.module": [
		368,
		11
	],
	"../pages/global-survey/global-survey.module": [
		369,
		10
	],
	"../pages/history/history.module": [
		370,
		9
	],
	"../pages/home/home.module": [
		371,
		8
	],
	"../pages/login/login.module": [
		372,
		7
	],
	"../pages/menu/menu.module": [
		373,
		6
	],
	"../pages/offline-cart/offline-cart.module": [
		374,
		5
	],
	"../pages/offline-orders/offline-orders.module": [
		375,
		4
	],
	"../pages/offline-products/offline-products.module": [
		376,
		3
	],
	"../pages/offline-sales/offline-sales.module": [
		377,
		2
	],
	"../pages/service/service.module": [
		378,
		1
	],
	"../pages/survey/survey.module": [
		379,
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
webpackAsyncContext.id = 204;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__ = __webpack_require__(13);
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
    function ClientPage(navCtrl, navParams, storage, http, geolocation, toastCtrl, loading, alertCtrl, global) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.geolocation = geolocation;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.params = this.navParams.data;
        this.clientTel = this.params.clientTel;
        this.http = http;
        this.entrepreneurBenooId = this.global.getId();
        this.entrepreneurTel = this.global.getTel();
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
        var link = this.global.getApiUrl() + 'customer/' + this.entrepreneurBenooId + '/create';
        console.log("CREATE CUSTOMER");
        var data = {
            entrepreneurTel: this.entrepreneurTel,
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
            selector: 'page-client',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/client/client.html"*/'<!--\n  Generated template for the ClientPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Fiche client</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>  \n    <p>Le numéro saisi ne correspond à aucun de vos clients. Merci de créer la fiche client pour pouvoir assigner la vente à votre client.</p>\n      <h4>Informations client: </h4>      \n      <h4>Contact</h4>\n      <ion-item>\n        <ion-label floating>Nom : </ion-label>\n        <ion-input type="text" [(ngModel)]="clientLastname"></ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-label floating>Prénom : </ion-label>\n        <ion-input type="text" [(ngModel)]="clientFirstname"></ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-label floating>Situation : </ion-label>\n        <ion-select [(ngModel)]="clientSituation">\n          <ion-option value="Salarié privé">Salarié privé</ion-option>\n          <ion-option value="Fonctionnaire">Fonctionnaire</ion-option>\n          <ion-option value="Entrepreneur">Entrepreneur</ion-option>\n          <ion-option value="Agriculteur">Agriculteur</ion-option>\n          <ion-option value="Sans profession">Sans profession</ion-option>\n        </ion-select>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Téléphone : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientTel"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Activité : </ion-label>\n        <ion-select [(ngModel)]="clientJob">\n          <ion-option value="Foyer">Foyer</ion-option>\n          <ion-option value="Centre de culte">Centre de culte</ion-option>\n          <ion-option value="Boutique">Boutique</ion-option>\n          <ion-option value="Produits frais / alimentation">Produits frais / alimentation</ion-option>\n          <ion-option value="Salon de coiffure">Salon de coiffure</ion-option>\n          <ion-option value="Tailleur">Tailleur</ion-option>\n          <ion-option value="Scierie">Scierie</ion-option>\n          <ion-option value="Restauration">Restauration</ion-option>\n          <ion-option value="Tourneur">Tourneur</ion-option>\n          <ion-option value="Transformation agricole">Transformation agricole</ion-option>\n          <ion-option value="Vulcanisateur">Vulcanisateur</ion-option>\n          <ion-option value="Menuisier">Menuisier</ion-option>\n          <ion-option value="Mécanicien">Mécanicien</ion-option>\n          <ion-option value="Peintre">Peintre</ion-option>\n          <ion-option value="Cordonnier">Cordonnier</ion-option>\n          <ion-option value="Centre de santé">Centre de santé</ion-option>\n          <ion-option value="Soudeur">Soudeur</ion-option>\n          <ion-option value="Education">Education</ion-option>\n          <ion-option value="IMF">IMF</ion-option>\n          <ion-option value="Autre">Autre</ion-option>          \n        </ion-select>\n      </ion-item>\n  \n      <ion-item *ngIf="clientJob && clientJob == \'Autre\'">\n        <ion-label floating>Autre activité : </ion-label>\n        <ion-input type="text" [(ngModel)]="clientJob2"></ion-input>\n      </ion-item> \n  \n      <ion-item *ngIf="clientJob && clientJob == \'Foyer\'">\n        <ion-label floating>Type de construction : </ion-label>\n        <ion-select [(ngModel)]="clientFoyer">\n          <ion-option value="Semi-dur">Semi-dur</ion-option>\n          <ion-option value="Dur">Dur</ion-option>\n          </ion-select>\n      </ion-item> \n  \n      <h4>Equipement actuel</h4>\n      <ion-item>\n        <ion-label floating>Lampe pétrole</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_lampe"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Torche éléctrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_torche"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Bougie</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_bougie"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Ampoule</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_ampoule"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Ventilateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_ventilateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Téléphone</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_tel"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Climatisation</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_clim"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Radio</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_radio"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Machine à laver</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_laver"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Réfrigérateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_frigo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Congélateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_congelateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>TV</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_tv"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Lecteur DVD</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_dvd"></ion-input>\n      </ion-item>\n  \n      <!-- CHAMPS CONDITIONNELS -->\n  \n      <ion-item  *ngIf="clientJob && clientJob == \'Salon de coiffure\'">\n        <ion-label floating>Tondeuse électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_tondeuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à broder</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_broder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à pleinte</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_pleinte"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à coudre</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_machine_coudre"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie circulaire électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_scie_circulaire"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie sauteuse electrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_scie_sauteuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Toupie</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_toupie"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Raboteuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_raboteuse"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Tourneur\'">\n        <ion-label floating>Fraise électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_fraise"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Transformation agricole\'">\n        <ion-label floating>Moulin électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_moulin"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Soudeur\'">\n        <ion-label floating>Arc à souder</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_arc_souder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Menuisier\'">\n        <ion-label floating>Ponceuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="dispo_ponceuse"></ion-input>\n      </ion-item>\n      \n      <h4>Equipement souhaité</h4>\n      <ion-item>\n        <ion-label floating>Ampoule</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_ampoule"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Ventilateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_ventilateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Téléphone</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_tel"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Climatisation</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_clim"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Radio</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_radio"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Machine à laver</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_laver"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Réfrigérateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_frigo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Congélateur</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_congelateur"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>TV</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_tv"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Lecteur DVD</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_dvd"></ion-input>\n      </ion-item>\n  \n      <!-- CHAMPS CONDITIONNELS -->\n      \n      <ion-item  *ngIf="clientJob && clientJob == \'Salon de coiffure\'">\n        <ion-label floating>Tondeuse électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_tondeuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à broder</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_broder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à pleinte</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_pleinte"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Tailleur\'">\n        <ion-label floating>Machine à coudre</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_machine_coudre"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie circulaire électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_scie_circulaire"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Scie sauteuse electrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_scie_sauteuse"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Toupie</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_toupie"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Scierie\'">\n        <ion-label floating>Raboteuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_raboteuse"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Tourneur\'">\n        <ion-label floating>Fraise électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_fraise"></ion-input>\n      </ion-item>\n      <ion-item  *ngIf="clientJob && clientJob == \'Transformation agricole\'">\n        <ion-label floating>Moulin électrique</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_moulin"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Soudeur\'">\n        <ion-label floating>Arc à souder</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_arc_souder"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="clientJob && clientJob == \'Menuisier\'">\n        <ion-label floating>Ponceuse</ion-label>\n        <ion-input type="number"  [(ngModel)]="wish_ponceuse"></ion-input>\n      </ion-item>\n      \n      <h4>Production énergie</h4>\n      <p>Kit solaire :</p>\n      <ion-list radio-group [(ngModel)]="clientKit">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n  \n      <ion-item *ngIf="clientKit && clientKit == \'oui\'">\n        <ion-label floating>Puissance (watt) : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientKitP"></ion-input>\n      </ion-item> \n  \n  \n      <p>Compagnie électrique :</p>\n      <ion-list radio-group [(ngModel)]="clientCeet">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n  \n      <ion-item *ngIf="clientCeet && clientCeet == \'oui\'">\n          <ion-label floating>Abonnement : </ion-label>\n          <ion-select [(ngModel)]="clientCeetTranche">\n            <ion-option value="Tranche sociale">Tranche sociale</ion-option>\n            <ion-option value="Tranche 1">Tranche 1</ion-option>\n            <ion-option value="Tranche 2">Tranche 2</ion-option>\n          </ion-select>\n        </ion-item>\n  \n  \n      <p>Groupe electrogène :</p>\n      <ion-list radio-group [(ngModel)]="clientGE">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n  \n      <ion-item *ngIf="clientGE && clientGE == \'oui\'">\n        <ion-label floating>Puissance (watt) : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientGEP"></ion-input>\n      </ion-item> \n  \n  \n      <p>Mini-réseau :</p>\n      <ion-list radio-group [(ngModel)]="clientReseau">\n        <ion-item>\n          <ion-label>Oui</ion-label>\n          <ion-radio value="oui" ></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Non</ion-label>\n          <ion-radio value="non" checked></ion-radio>\n        </ion-item>\n      </ion-list>\n  \n      <ion-item *ngIf="clientReseau && clientReseau == \'oui\'">\n        <ion-label floating>Puissance (watt) : </ion-label>\n        <ion-input type="number" [(ngModel)]="clientReseauP"></ion-input>\n      </ion-item> \n      \n      <h4>Autres équipements</h4>\n<!--       <ion-item>\n        <ion-label floating>Opérateur : </ion-label>\n        <ion-select [(ngModel)]="telephoneOperator">\n          <ion-option value="Fonctionnaire">Moov</ion-option>\n          <ion-option value="Entrepreneur">Togocel</ion-option>\n        </ion-select>\n      </ion-item> -->\n      <ion-item>\n        <ion-label floating>Opérateur 1 : </ion-label>\n        <ion-input type="text"  [(ngModel)]="telephoneOperator"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Opérateur 2 : </ion-label>\n        <ion-input type="text"  [(ngModel)]="telephoneOperator2"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Budget recharge tél./sem.</ion-label>\n        <ion-input type="number"  [(ngModel)]="telephoneCost"></ion-input>\n      </ion-item>\n  \n      <ion-input [hidden]="true" ></ion-input>\n    </ion-list>  \n    <div no-padding class="validate-btn">      \n      <button ion-button block large  [navPush]="" [navParams]=\'\' (click)="createCustomer()" >Valider</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/client/client.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__["a" /* GlobalVars */]])
    ], ClientPage);
    return ClientPage;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPageModule", function() { return ClientPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client__ = __webpack_require__(205);
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

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(283);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_offline_products_offline_products__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_offline_cart_offline_cart__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_offline_sales_offline_sales__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_offline_orders_offline_orders__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_entrepreneur_category_entrepreneur_category__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_entrepreneur_order_entrepreneur_order__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_entrepreneur_cart_entrepreneur_cart__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_entrepreneur_product_entrepreneur_product__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_service_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_product_service_product_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_cart_cart__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_history_history__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_client_client_module__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_survey_survey__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_menu_menu__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_global_survey_global_survey__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_network__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_globalVars__ = __webpack_require__(13);
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
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_service_service__["a" /* ServicePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_global_survey_global_survey__["a" /* GlobalSurveyPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_entrepreneur_product_entrepreneur_product__["a" /* EntrepreneurProductPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_entrepreneur_cart_entrepreneur_cart__["a" /* EntrepreneurCartPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_entrepreneur_order_entrepreneur_order__["a" /* EntrepreneurOrderPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_entrepreneur_category_entrepreneur_category__["a" /* EntrepreneurCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_offline_orders_offline_orders__["a" /* OfflineOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_offline_sales_offline_sales__["a" /* OfflineSalesPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_offline_cart_offline_cart__["a" /* OfflineCartPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_offline_products_offline_products__["a" /* OfflineProductsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/client/client.module#ClientPageModule', name: 'ClientPage', segment: 'client', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entrepreneur-cart/entrepreneur-cart.module#EntrepreneurCartPageModule', name: 'EntrepreneurCartPage', segment: 'entrepreneur-cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entrepreneur-category/entrepreneur-category.module#EntrepreneurCategoryPageModule', name: 'EntrepreneurCategoryPage', segment: 'entrepreneur-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entrepreneur-order/entrepreneur-order.module#EntrepreneurOrderPageModule', name: 'EntrepreneurOrderPage', segment: 'entrepreneur-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entrepreneur-product/entrepreneur-product.module#EntrepreneurProductPageModule', name: 'EntrepreneurProductPage', segment: 'entrepreneur-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/global-survey/global-survey.module#GlobalSurveyPageModule', name: 'GlobalSurveyPage', segment: 'global-survey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#LoginPageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offline-cart/offline-cart.module#OfflineCartPageModule', name: 'OfflineCartPage', segment: 'offline-cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offline-orders/offline-orders.module#OfflineOrdersPageModule', name: 'OfflineOrdersPage', segment: 'offline-orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offline-products/offline-products.module#OfflineProductsPageModule', name: 'OfflineProductsPage', segment: 'offline-products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offline-sales/offline-sales.module#OfflineSalesPageModule', name: 'OfflineSalesPage', segment: 'offline-sales', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service/service.module#ServicePageModule', name: 'ServicePage', segment: 'service', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/survey/survey.module#SurveyPageModule', name: 'SurveyPage', segment: 'survey', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_24__pages_client_client_module__["ClientPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_service_service__["a" /* ServicePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_global_survey_global_survey__["a" /* GlobalSurveyPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_entrepreneur_product_entrepreneur_product__["a" /* EntrepreneurProductPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_entrepreneur_cart_entrepreneur_cart__["a" /* EntrepreneurCartPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_entrepreneur_order_entrepreneur_order__["a" /* EntrepreneurOrderPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_entrepreneur_category_entrepreneur_category__["a" /* EntrepreneurCategoryPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_offline_orders_offline_orders__["a" /* OfflineOrdersPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_offline_sales_offline_sales__["a" /* OfflineSalesPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_offline_cart_offline_cart__["a" /* OfflineCartPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_offline_products_offline_products__["a" /* OfflineProductsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_product_service_product_service__["a" /* ProductServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_29__providers_globalVars__["a" /* GlobalVars */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(51);
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrepreneurOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__ = __webpack_require__(13);
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
 * Generated class for the EntrepreneurOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntrepreneurOrderPage = (function () {
    function EntrepreneurOrderPage(navCtrl, navParams, global, http, toastCtrl, alertCtrl, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.entrepreneurBenooId = this.global.getId();
        this.entrepreneurTel = this.global.getTel();
        this.loadOrders(this.global.getId(), this.global.getTel());
    }
    EntrepreneurOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EntrepreneurOrderPage');
    };
    EntrepreneurOrderPage.prototype.loadOrders = function (entrepreneurBenooId, entrepreneurTel) {
        var _this = this;
        var url = this.global.getApiUrl() + 'entrepreneurs/orders/' + entrepreneurBenooId + "/history?entrepreneurTel=" + entrepreneurTel;
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.status) {
                _this.orders = data.data;
            }
            else {
                // Si erreur 
                console.log("History KO");
                var toast = _this.toastCtrl.create({
                    message: 'Impossible de récupérer l\'historique des commandes, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
                    duration: 5000,
                    position: 'bottom',
                    cssClass: "danger"
                });
                toast.present();
            }
        });
    };
    EntrepreneurOrderPage.prototype.confirmOrder = function (orderId) {
        var _this = this;
        console.log("CONFIRM");
        var alert = this.alertCtrl.create({
            title: "Validation réception",
            message: 'Confirmez-vous la réception de votre commande ?',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmer',
                    handler: function () {
                        var loader = _this.loading.create({
                            content: 'Enregistrement...',
                        });
                        loader.present();
                        var link = _this.global.getApiUrl() + 'entrepreneurs/orders/' + _this.entrepreneurBenooId + '/' + orderId + '/status';
                        var data = {
                            entrepreneurTel: _this.entrepreneurTel,
                            entrepreneurId: _this.entrepreneurBenooId
                        };
                        _this.http.post(link, data)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            console.log(data);
                            if (data.status == true) {
                                loader.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: "La réception de votre commande a bien été enregistrée.",
                                    duration: 5000,
                                    position: 'bottom',
                                    cssClass: "success"
                                });
                                toast.present();
                                _this.loadOrders(_this.global.getId(), _this.global.getTel());
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
                            loader.dismiss();
                            var toast = _this.toastCtrl.create({
                                message: 'Impossible d\'enregistrer la réception de votre commande, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
                                duration: 5000,
                                position: 'bottom',
                                cssClass: "danger"
                            });
                            toast.present();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    EntrepreneurOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entrepreneur-order',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/entrepreneur-order/entrepreneur-order.html"*/'<!--\n  Generated template for the EntrepreneurOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Commandes en cours <span *ngIf="orders && orders.length > 0">({{orders.length}})</span></ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content no-padding>\n  <div *ngIf="orders && orders.length > 0" no-padding>\n    <ion-list *ngFor="let order of orders">\n      <ion-card>\n          <div class="card-title" ><h3>Commande du {{order.date}} (#{{order.id}})</h3></div>\n            <div class="order-info">\n                <p><b>Détail :</b></p>\n                <ul [innerHTML]="order.detail"></ul>\n                <p><b>Total :</b> {{order.total}} Fcfa</p>\n                <p><b>Statut :</b>\n                  {{order.statusLibelle}}\n                </p>\n            </div>  \n              \n          <button ion-button large block color="success" (click)="confirmOrder(order.id)" >Confirmer la réception</button>\n\n      </ion-card>        \n    </ion-list>\n  </div>\n      \n  <div *ngIf="orders && orders.length == 0" no-padding>\n    <p>Pas de commandes enregistrées actuellement.</p>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/entrepreneur-order/entrepreneur-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__["a" /* GlobalVars */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EntrepreneurOrderPage);
    return EntrepreneurOrderPage;
}());

//# sourceMappingURL=entrepreneur-order.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__offline_sales_offline_sales__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__offline_orders_offline_orders__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_xml2js__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__global_survey_global_survey__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_globalVars__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__menu_menu__ = __webpack_require__(52);
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
    function LoginPage(navCtrl, navParams, storage, http, toastCtrl, loading, network, global) {
        /* this.entrepreneurBenooId = this.global.getId(); */
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.network = network;
        this.global = global;
        var item = { products: [], totalProduct: 0 };
        storage.set('cart', item);
        this.storage.get('offlineCart').then(function (resp) {
            if (resp == null) {
                storage.set('offlineCart', item);
                console.log(resp);
            }
        });
        if (localStorage.getItem('offlineSurvey') === null) {
            this.offlineData = JSON.stringify({ surveys: [] });
            localStorage.setItem('offlineSurvey', this.offlineData);
        }
        else {
            this.offlineData = JSON.parse(localStorage.getItem('offlineSurvey'));
        }
        this.storage.get('entrepreneurBenooId').then(function (resp) {
            if (resp !== null) {
                _this.entrepreneurBenooId = resp;
                console.log(resp);
            }
        });
        this.loadSurveyData();
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
        this.storage.get('offlineSales').then(function (resp) {
            if (resp !== null) {
                _this.offlineSales = resp;
                console.log(resp);
            }
        });
        this.network.onConnect().subscribe(function (data) {
            _this.onlineStatus = true;
        }, function (error) { return console.error(error); });
        this.network.onDisconnect().subscribe(function (data) {
            _this.onlineStatus = false;
        }, function (error) { return console.error(error); });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (localStorage.getItem('offlineSurvey') === null) {
            this.offlineData = JSON.stringify({ surveys: [] });
            localStorage.setItem('offlineSurvey', this.offlineData);
        }
        else {
            this.offlineData = JSON.parse(localStorage.getItem('offlineSurvey'));
        }
        this.storage.get('offlineSales').then(function (resp) {
            if (resp !== null) {
                _this.offlineSales = resp;
                console.log(resp);
            }
        });
        this.onlineStatus = window.navigator.onLine;
    };
    LoginPage.prototype.displaySurvey = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__global_survey_global_survey__["a" /* GlobalSurveyPage */]);
    };
    LoginPage.prototype.offlineOrders = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__offline_orders_offline_orders__["a" /* OfflineOrdersPage */]);
    };
    LoginPage.prototype.displayOfflineSales = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__offline_sales_offline_sales__["a" /* OfflineSalesPage */]);
    };
    LoginPage.prototype.loadSurveyData = function () {
        // SI CONNEXION Récupération de la liste des villages
        var link = this.global.getApiUrl() + 'survey/villages';
        this.http.get(link)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data && data.status) {
                var villages = JSON.stringify(data.data);
                localStorage.setItem('benoo_villages', villages);
                console.log(villages);
            }
        }, function (error) {
            console.log(error);
        });
        // SI CONNEXION Récupération de la liste des enqueteurs
        var link = this.global.getApiUrl() + 'survey/enqueteurs';
        this.http.get(link)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data && data.status) {
                var enqueteurs = JSON.stringify(data.data);
                localStorage.setItem('benoo_enqueteurs', enqueteurs);
                console.log(enqueteurs);
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.postOfflineSurvey = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Synchronisation en cours...',
        });
        loader.present();
        var link = this.global.getApiUrl() + 'survey-prospect/create';
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
            var parser = new __WEBPACK_IMPORTED_MODULE_7_xml2js___default.a.Parser({
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
        var loader = this.loading.create({
            content: 'Connexion en cours...',
        });
        loader.present();
        var link = this.global.getApiUrl() + "entrepreneur/login";
        var data = {
            entrepreneurTel: this.entrepreneurTel,
            entrepreneurPin: this.entrepreneurPin
        };
        this.http.post(link, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.status == true) {
                loader.dismiss();
                _this.storage.set('entrepreneurBenooId', data.data.entrepreneurBenooId);
                /* this.storage.set('entrepreneurPin', this.entrepreneurPin); */
                //
                _this.storage.set('benoo_entrepreneur_id', data.data.benoo_entrepreneur_id);
                _this.storage.set('benoo_entrepreneur_tel', data.data.benoo_entrepreneur_tel);
                _this.global.setId(data.data.benoo_entrepreneur_id);
                _this.global.setTel(data.data.benoo_entrepreneur_tel);
                console.log("ID : " + _this.global.getId());
                console.log("TEL : " + _this.global.getTel());
                //this.navCtrl.push(MenuPage);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__menu_menu__["a" /* MenuPage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n    <div padding class="logo">\n      <img src="./assets/imgs/logo-benoo-w.png" alt="">\n    </div>\n    <ion-list class="form">  \n      <ion-item no-padding>\n        <ion-label floating>Téléphone : </ion-label>\n        <ion-input type="number" [(ngModel)]="entrepreneurTel"></ion-input>\n      </ion-item>  \n      <ion-item no-padding>\n        <ion-label floating>Pin : </ion-label>\n        <ion-input type="password" [(ngModel)]="entrepreneurPin"></ion-input>\n      </ion-item>\n      <ion-input [hidden]="true" ></ion-input>\n    </ion-list>\n    <button ion-button block large color="white" [disabled]="entrepreneurTel == null || entrepreneurTel == \'\' || entrepreneurPin == null || entrepreneurPin == \'\'" (click)="checkConnection()" >Connexion</button>\n\n    <button ion-button block large color="secondary" class="survey" (click)="displaySurvey()">Enquête prospect</button>\n    <button *ngIf="offlineData && offlineData.surveys && offlineData.surveys.length > 0" ion-button block large color="danger" class="survey" (click)="postOfflineSurvey()" [disabled]="!onlineStatus">Synchro. enquêtes ({{offlineData[\'surveys\'].length}})</button>\n\n    <button ion-button block large color="secondary" class="survey" (click)="displayOfflineSales()">Ventes hors-ligne</button>\n    \n\n    <button ion-button block large color="secondary" class="survey" (click)="offlineOrders()">Suivi de commandes</button>\n  </ion-content>\n  \n  \n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_10__providers_globalVars__["a" /* GlobalVars */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_history__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entrepreneur_category_entrepreneur_category__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entrepreneur_order_entrepreneur_order__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_globalVars__ = __webpack_require__(13);
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
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, callNumber, http, global, storage, toastCtrl, loading) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.http = http;
        this.global = global;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.entrepreneurBenooId = this.global.getId();
        this.entrepreneurTel = this.global.getTel();
        this.storeEntrepreneurData(this.entrepreneurBenooId, this.entrepreneurTel);
        this.storage.get('offlineSales').then(function (resp) {
            if (resp !== null) {
                _this.offlineSales = resp;
                console.log(resp);
            }
        });
    }
    MenuPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storeEntrepreneurData(this.entrepreneurBenooId, this.entrepreneurTel);
        this.storage.get('offlineSales').then(function (resp) {
            if (resp !== null) {
                _this.offlineSales = resp;
                console.log(resp);
            }
        });
        if (this.offlineSales != null) {
            // AFFICAHGE DE LA POPIN D'ALERTE
            if (this.offlineSales.length >= 50) {
                var toast = this.toastCtrl.create({
                    message: "Vous avez enregistré " + this.offlineSales.length + " ventes hors-ligne, pensez à synchroniser vos ventes dès que possible.",
                    duration: 5000,
                    position: 'top',
                    cssClass: "danger"
                });
                toast.present();
            }
        }
    };
    MenuPage.prototype.navGoTo = function (page) {
        console.log(page);
        if (page == "history") {
            console.log("history");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__history_history__["a" /* HistoryPage */]);
        }
        else if (page == "home") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        else if (page == "entrepreneur-product") {
            //this.navCtrl.push(EntrepreneurProductPage);  
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__entrepreneur_category_entrepreneur_category__["a" /* EntrepreneurCategoryPage */]);
        }
        else if (page == "entrepreneur-order") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__entrepreneur_order_entrepreneur_order__["a" /* EntrepreneurOrderPage */]);
        }
    };
    MenuPage.prototype.callMaintenance = function () {
        console.log("CALL");
        this.callNumber.callNumber("+22892693718", true)
            .catch(function () { return console.log('Error launching dialer'); });
    };
    MenuPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
        this.storage.set('benoo_entrepreneur_id', null);
        this.storage.set('benoo_entrepreneur_tel', null);
        this.global.setId(null);
        this.global.setTel(null);
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.storeEntrepreneurData = function (entrepreneurId, entrepreneurTel) {
        var _this = this;
        console.log('STORE');
        // Stockage des produits de l'entrepreneur
        var link = this.global.getApiUrl() + 'entrepreneur/data/products/' + entrepreneurId + "?entrepreneurTel=" + entrepreneurTel;
        this.http.get(link)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data && data.status) {
                var products = data.data;
                _this.storage.set('entrepreneur_products', products);
                console.log(products);
            }
        }, function (error) {
            console.log(error);
        });
        // Stockage des commandes de l'entrepreneur
        var link = this.global.getApiUrl() + 'entrepreneurs/orders/' + entrepreneurId + "/history?entrepreneurTel=" + entrepreneurTel;
        this.http.get(link)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data && data.status) {
                var orders = data;
                _this.storage.set('entrepreneur_orders', orders);
                console.log(orders);
            }
        }, function (error) {
            console.log(error);
        });
    };
    MenuPage.prototype.postOfflineSales = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Synchronisation en cours...',
        });
        loader.present();
        var link = this.global.getApiUrl() + 'order/' + this.entrepreneurBenooId + '/offline/create?entrepreneurTel=' + this.entrepreneurTel;
        console.log(link);
        var offlineData = {
            carts: this.offlineSales,
            entrepreneurTel: this.entrepreneurTel
        };
        this.http.post(link, offlineData)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status == true) {
                loader.dismiss();
                // CHECK SI ERREUR
                _this.offlineSales = null;
                _this.storage.set('offlineSales', null);
                var toast = _this.toastCtrl.create({
                    message: "Enquête(s) synchronisée(s) avec succès !",
                    duration: 5000,
                    position: 'bottom',
                    cssClass: "success"
                });
                toast.present();
            }
            else {
                console.log('ERROR 1');
                loader.dismiss();
                _this.offlineSales = data.offlineSales;
                _this.storage.set('offlineSales', data.offlineSales);
                var toast = _this.toastCtrl.create({
                    message: "Toutes les enquêtes n'ont pas pu être synchronisées. Veuillez vérifier votre connexion et réessayer.",
                    duration: 5000,
                    position: 'bottom',
                    cssClass: "danger"
                });
                toast.present();
            }
        }, function (error) {
            console.log('ERROR 2');
            console.log(error);
            loader.dismiss();
            var toast = _this.toastCtrl.create({
                message: "Toutes les enquêtes n'ont pas pu être synchronisées. Veuillez vérifier votre connexion et réessayer.",
                duration: 5000,
                position: 'bottom',
                cssClass: "danger"
            });
            toast.present();
        });
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/menu/menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>\n        <img src="./assets/imgs/logo-benoo-w.png" class="nav-logo" alt="">\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content no-padding>\n    <ion-list no-padding>\n      <ion-row no-padding class="links">\n        <ion-col  col-6 (click)="navGoTo(\'home\')">\n          <ion-card no-padding>\n              <ion-icon name="home"></ion-icon> \n              <div class="card-title">Mon point de vente</div>\n          </ion-card>\n        </ion-col>\n        <ion-col  col-6 (click)="navGoTo(\'history\')">\n          <ion-card no-padding>\n            <ion-icon name="swap"></ion-icon> \n            <div class="card-title">Transactions</div>\n          </ion-card>\n        </ion-col>\n        <ion-col  col-6 (click)="navGoTo(\'entrepreneur-product\')">\n          <ion-card no-padding>\n            <ion-icon name="cube"></ion-icon> \n            <div class="card-title">Achats</div>\n          </ion-card>\n        </ion-col>\n        <ion-col  col-6 (click)="navGoTo(\'entrepreneur-order\')">\n          <ion-card no-padding>\n            <ion-icon name="locate"></ion-icon> \n            <div class="card-title">Suivi de commande</div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n    <div padding>\n        <button *ngIf="offlineSales && offlineSales.length > 0" ion-button block large color="success" (click)="postOfflineSales()">Synchro. ventes ({{offlineSales.length}})</button>\n      <!-- <button ion-button block large (click)="displaySurvey()"><ion-icon name="checkbox-outline"></ion-icon> &nbsp;&nbsp;&nbsp;Enquête client</button> -->\n      <button ion-button block large color="warning" class="maintenance" (click)="callMaintenance()"><ion-icon name="alert"></ion-icon> &nbsp;&nbsp;&nbsp;Appel maintenance</button>        \n      <button ion-button block large color="danger" class="logout" (click)="logout()"><ion-icon name="close-circle"></ion-icon> &nbsp;&nbsp;&nbsp;Déconnexion</button>        \n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_10__providers_globalVars__["a" /* GlobalVars */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globalVars__ = __webpack_require__(13);
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
    function ProductServiceProvider(http, storage, global) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.global = global;
        console.log('Hello ProductServiceProvider Provider');
        this.storage.get('cart').then(function (resp) {
            if (resp !== null) {
                _this.cartObj = resp;
            }
        });
    }
    ProductServiceProvider.prototype.getCategories = function (entrepreneurId, entrepreneurTel) {
        var url = this.global.getApiUrl() + 'services/types/' + entrepreneurId + "?entrepreneurTel=" + entrepreneurTel;
        var response = this.http.get(url)
            .do(function (res) { return console.log(res.json()); })
            .map(function (res) { return res.json(); });
        /* .map((res : Response ) => res.json())
        .catch(error => console.log(error)); */
        return response;
    };
    ProductServiceProvider.prototype.getProductByType = function (typeId, entrepreneurId, entrepreneurTel) {
        var url = this.global.getApiUrl() + 'services/' + typeId + "/" + entrepreneurId + "?entrepreneurTel=" + entrepreneurTel;
        var response = this.http.get(url)
            .do(function (res) { return console.log(res.json()); })
            .map(function (res) { return res.json(); });
        /* .map((res : Response ) => res.json())
        .catch(error => console.log(error)); */
        return response;
    };
    ProductServiceProvider.prototype.loadOfflineOrders = function () {
        this.storage.get('entrepreneur_orders').then(function (resp) {
            console.log(resp);
            if (resp !== null) {
                return resp;
            }
        });
    };
    ProductServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__globalVars__["a" /* GlobalVars */]])
    ], ProductServiceProvider);
    return ProductServiceProvider;
}());

//# sourceMappingURL=product-service.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the OfflineCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfflineCartPage = (function () {
    function OfflineCartPage(navCtrl, navParams, storage, toastCtrl, loading, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.alertCtrl = alertCtrl;
        this.cartTotal = 0;
        this.storage.get('offlineCart').then(function (resp) {
            if (resp !== null) {
                _this.offlineCart = resp;
                _this.offlineCart.products.forEach(function (obj) {
                    if (obj && obj.price && obj.qty) {
                        this.cartTotal += obj.price * obj.qty;
                    }
                }, _this);
            }
        });
    }
    OfflineCartPage.prototype.getCart = function () {
        var _this = this;
        this.storage.get('offlineCart').then(function (resp) {
            if (resp !== null) {
                _this.offlineCart = resp;
            }
        });
    };
    OfflineCartPage.prototype.ionViewWillEnter = function () {
        this.getCart();
    };
    OfflineCartPage.prototype.emptyCart = function () {
        this.offlineCart = { products: [], totalProduct: 0 };
        this.storage.set('offlineCart', this.offlineCart);
    };
    OfflineCartPage.prototype.sendPayment = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Validation vente",
            message: 'Confirmez-vous le paiement de votre vente ?',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmer',
                    handler: function () {
                        _this.storage.get('offlineSales').then(function (resp) {
                            var tmpJson = [{
                                    date: Math.floor(Date.now() / 1000),
                                    detail: _this.offlineCart,
                                    total: _this.cartTotal
                                }];
                            if (resp !== null) {
                                _this.offlineSales = resp;
                            }
                            else {
                                _this.offlineSales = [];
                            }
                            _this.offlineSales.push(tmpJson);
                            _this.storage.set('offlineSales', _this.offlineSales);
                            loader.dismiss();
                            _this.emptyCart();
                        });
                        var loader = _this.loading.create({
                            content: 'Enregistrement de la vente...',
                        });
                        loader.present();
                    }
                }
            ]
        });
        alert.present();
    };
    OfflineCartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-offline-cart',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/offline-cart/offline-cart.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title> \n      <span *ngIf="offlineCart">\n          Panier ({{offlineCart.totalProduct}})\n      </span>\n    </ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="offlineCart" no-padding>\n    <h3>Panier : </h3>  \n    <ion-list *ngFor="let product of offlineCart.products" no-padding>\n        <ion-row *ngIf="product"> \n          <ion-col no-padding>              \n            <p>- {{offlineCart.products[product.id].qty}} x {{product.title}} : <b>{{offlineCart.products[product.id].qty * product.price}} Fcfa</b></p>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n  </div>\n    \n  <div *ngIf="offlineCart && offlineCart.totalProduct == 0" class="noitem"><p>Votre panier est vide</p></div>\n  \n  <div *ngIf="offlineCart && offlineCart.totalProduct > 0">\n\n    <div class="price">\n      <table class="total">\n        <tr class="cart-total">\n          <td  class="title">A payer : </td>\n          <td> {{cartTotal}} Fcfa</td>\n        </tr>\n        <!-- <tr class="separator">\n          <td colspan=2></td>\n        </tr>\n        <tr class="comission">\n          <td class="title"><b>A payer : </b></td>\n          <td><b>{{cartTotal * 0.2}} Fcfa</b></td>\n        </tr> -->\n      </table>\n    </div>\n<!--   \n    <div *ngIf="entrepreneurAC && (entrepreneurAC < cartTotal * 0.2)">\n      <p class="disabled"><ion-icon name="alert"></ion-icon>&nbsp; Votre solde actuel  ({{entrepreneurAC}} Fcfa) est insuffisant, veuillez modifier votre panier ou recharger votre compte.</p>\n    </div> -->\n    \n    <button ion-button block large color="success"  (click)="sendPayment(cartTotal)" class="validate-btn">Valider le paiement</button>\n\n    <div *ngIf="offlineCart && offlineCart.totalProduct > 0">\n        <div no-padding class="cancel">\n          <button ion-button block color="danger" (click)="emptyCart()">Vider le panier</button>\n        </div>    \n      </div>\n\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/offline-cart/offline-cart.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
    ], OfflineCartPage);
    return OfflineCartPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=offline-cart.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_client__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_xml2js__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_globalVars__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu__ = __webpack_require__(52);
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
    function CartPage(navCtrl, navParams, storage, modal, http, toastCtrl, loading, global, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modal = modal;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.cartTotal = 0;
        this.storage.get('cart').then(function (resp) {
            console.log(resp);
            if (resp !== null) {
                _this.cartObj = resp;
                /*         this.cartObj.products.forEach(obj => {
                          console.log("obj");
                          console.log(obj);
                          if(obj.price && obj.qty) { this.cartTotal+= obj.price * obj.qty; }
                          console.log(this.cartTotal);
                        });   */
                _this.cartObj.products.forEach(function (obj) {
                    if (obj && obj.price && obj.qty) {
                        this.cartTotal += obj.price * obj.qty;
                    }
                }, _this);
            }
        });
        this.pageClient = __WEBPACK_IMPORTED_MODULE_3__client_client__["a" /* ClientPage */];
        this.entrepreneurBenooId = this.global.getId();
        this.entrepreneurTel = this.global.getTel();
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
        var url = this.global.getApiUrl() + 'customer/' + this.entrepreneurBenooId + '/' + this.clientTel + "?entrepreneurTel=" + this.entrepreneurTel;
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
            var parser = new __WEBPACK_IMPORTED_MODULE_7_xml2js___default.a.Parser({
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
        var alert = this.alertCtrl.create({
            title: "Validation vente",
            message: 'Confirmez-vous le paiement de votre vente ?',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmer',
                    handler: function () {
                        var comission = _this.cartTotal * 0.2;
                        var loader = _this.loading.create({
                            content: 'Enregistrement de la vente...',
                        });
                        loader.present();
                        var link = _this.global.getApiUrl() + 'order/' + _this.entrepreneurBenooId + '/create';
                        var data = {
                            entrepreneurTel: _this.entrepreneurTel,
                            entrepreneurPin: _this.entrepreneurPin,
                            entrepreneurId: _this.entrepreneurBenooId,
                            clientTel: _this.clientTel,
                            products: _this.cartObj.products,
                            total: _this.cartTotal,
                            comission: comission
                        };
                        _this.http.post(link, data)
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
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__menu_menu__["a" /* MenuPage */]).then(function () {
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                                });
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
                            console.log("Impossible d'enregistrer la vente !");
                            loader.dismiss();
                            var toast = _this.toastCtrl.create({
                                message: 'Impossible d\'enregistrer la vente, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
                                duration: 5000,
                                position: 'bottom',
                                cssClass: "danger"
                            });
                            toast.present();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/cart/cart.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title> \n      <span *ngIf="cartObj">\n          Panier ({{cartObj.totalProduct}})\n      </span>\n    </ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="cartObj" no-padding>\n    <h3>Panier : </h3>  \n    <ion-list *ngFor="let product of cartObj.products" no-padding>\n        <ion-row *ngIf="product"> \n          <ion-col no-padding>              \n            <p>- {{cartObj.products[product.id].qty}} x {{product.title}} : <b>{{cartObj.products[product.id].qty * product.price}} Fcfa</b></p>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n  </div>\n    \n  <div *ngIf="cartObj && cartObj.totalProduct == 0" class="noitem"><p>Votre panier est vide</p></div>\n  \n  <div *ngIf="cartObj && cartObj.totalProduct > 0">\n\n    <div class="price">\n      <table class="total">\n        <tr class="cart-total">\n          <td  class="title">A payer : </td>\n          <td> {{cartTotal}} Fcfa</td>\n        </tr>\n        <!-- <tr class="separator">\n          <td colspan=2></td>\n        </tr>\n        <tr class="comission">\n          <td class="title"><b>A payer : </b></td>\n          <td><b>{{cartTotal * 0.2}} Fcfa</b></td>\n        </tr> -->\n      </table>\n    </div>\n<!--   \n    <div *ngIf="entrepreneurAC && (entrepreneurAC < cartTotal * 0.2)">\n      <p class="disabled"><ion-icon name="alert"></ion-icon>&nbsp; Votre solde actuel  ({{entrepreneurAC}} Fcfa) est insuffisant, veuillez modifier votre panier ou recharger votre compte.</p>\n    </div> -->\n    \n    <button ion-button block large color="success"  (click)="sendPayment(cartTotal)" class="validate-btn">Valider le paiement</button>\n\n    <div *ngIf="cartObj && cartObj.totalProduct > 0">\n        <div no-padding class="cancel">\n          <button ion-button block color="danger" (click)="emptyCart()">Vider le panier</button>\n        </div>    \n      </div>\n\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__providers_globalVars__["a" /* GlobalVars */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entrepreneur_category_entrepreneur_category__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entrepreneur_order_entrepreneur_order__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__history_history__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__survey_survey__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_globalVars__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__menu_menu__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var HomePage = (function () {
    function HomePage(navCtrl, navParams, http, productService, storage, callNumber, global) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.productService = productService;
        this.storage = storage;
        this.callNumber = callNumber;
        this.global = global;
        this.menuData = [];
        this.pageCart = __WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */];
        this.pageService = __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* ServicePage */];
        this.historyPage = __WEBPACK_IMPORTED_MODULE_8__history_history__["a" /* HistoryPage */];
        this.orderPage = __WEBPACK_IMPORTED_MODULE_1__entrepreneur_order_entrepreneur_order__["a" /* EntrepreneurOrderPage */];
        this.storage.get('cart').then(function (resp) {
            if (resp !== null) {
                _this.cartObj = resp;
            }
        });
        this.entrepreneurBenooId = this.global.getId();
        this.entrepreneurTel = this.global.getTel();
        this.getMenuCategories(this.global.getId(), this.global.getTel());
    }
    HomePage.prototype.navGoTo = function (page) {
        console.log(page);
        if (page == "history") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__history_history__["a" /* HistoryPage */]);
        }
        else if (page == "menu") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__menu_menu__["a" /* MenuPage */]);
        }
        else if (page == "entrepreneur-product") {
            //this.navCtrl.push(EntrepreneurProductPage);  
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__entrepreneur_category_entrepreneur_category__["a" /* EntrepreneurCategoryPage */]);
        }
        else if (page == "entrepreneur-order") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__entrepreneur_order_entrepreneur_order__["a" /* EntrepreneurOrderPage */]);
        }
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        /* if(this.entrepreneurBenooId != null && this.entrepreneurTel != null) {
        } */
        this.storage.get('cart').then(function (resp) {
            if (resp !== null) {
                _this.cartObj = resp;
            }
        });
    };
    HomePage.prototype.getMenuCategories = function (entrepreneurId, entrepreneurTel) {
        var _this = this;
        this.productService.getCategories(entrepreneurId, entrepreneurTel).subscribe(function (data) {
            _this.menuData = data.data;
        });
    };
    HomePage.prototype.displaySurvey = function () {
        console.log("SURVEY");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__survey_survey__["a" /* SurveyPage */]);
    };
    HomePage.prototype.callMaintenance = function () {
        console.log("CALL");
        this.callNumber.callNumber("+22892693718", true)
            .catch(function () { return console.log('Error launching dialer'); });
    };
    HomePage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Services</ion-title>\n        <ion-buttons end>\n            <button ion-button [navPush]="pageCart" [navParams]="cartObj">\n              <ion-icon name="cart"></ion-icon>&nbsp;\n              <span *ngIf="cartObj">{{cartObj.totalProduct}}</span>\n            </button>\n          </ion-buttons>    \n      </ion-navbar>\n  </ion-header>\n\n<ion-menu [content]="menuContent" side="right">\n  <ion-content>\n    <ion-title><h4>Menu</h4></ion-title>\n    <ion-list>\n      <ion-item (click)="navGoTo(\'menu\')"><ion-icon name="home"></ion-icon> Accueil</ion-item>\n      <ion-item class="active"><ion-icon name="bulb"></ion-icon> Mon point de vente</ion-item>\n      <!-- <ion-item [navPush]="historyPage" name="swap"><ion-icon name="swap"></ion-icon> Solde & Transactions</ion-item> -->\n      <ion-item (click)="navGoTo(\'history\')"><ion-icon name="swap"></ion-icon> Transactions</ion-item>\n      <ion-item (click)="navGoTo(\'entrepreneur-product\')"><ion-icon name="cube"></ion-icon> Achats</ion-item>\n      <ion-item (click)="navGoTo(\'entrepreneur-order\')"><ion-icon name="locate"></ion-icon> Suivi de commande</ion-item>\n      <ion-item (click)="logout()"><ion-icon name="close-circle"></ion-icon> Déconnexion</ion-item>\n      <ion-item menuClose detail-none><ion-icon name="arrow-back"></ion-icon> Retour</ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav #menuContent></ion-nav>\n    \n<ion-content no-padding>\n  <ion-list no-padding>\n    <ion-row no-padding>\n        <ion-col  *ngFor="let menu of menuData" col-6>\n          <ion-card no-padding [navPush]="pageService" [navParams]=\'{typeId : menu.id, typeName : menu.title}\'>\n            <img src="./assets/imgs/{{menu.picture}}" alt="">\n            <div class="card-title" >{{menu.title}}</div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n  </ion-list>\n  <!-- <div padding>\n    <button ion-button block large (click)="displaySurvey()"><ion-icon name="checkbox-outline"></ion-icon> &nbsp;&nbsp;&nbsp;Enquête client</button>\n  </div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__["a" /* ProductServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_13__providers_globalVars__["a" /* GlobalVars */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrepreneurCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entrepreneur_product_entrepreneur_product__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entrepreneur_cart_entrepreneur_cart__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_product_service_product_service__ = __webpack_require__(62);
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
 * Generated class for the EntrepreneurCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntrepreneurCategoryPage = (function () {
    function EntrepreneurCategoryPage(navCtrl, navParams, productService, global, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.global = global;
        this.storage = storage;
        this.menuData = [];
        this.entrepreneurBenooId = this.global.getId();
        this.entrepreneurTel = this.global.getTel();
        this.pageProduct = __WEBPACK_IMPORTED_MODULE_0__entrepreneur_product_entrepreneur_product__["a" /* EntrepreneurProductPage */];
        this.entCartPage = __WEBPACK_IMPORTED_MODULE_2__entrepreneur_cart_entrepreneur_cart__["a" /* EntrepreneurCartPage */];
        this.storage.get('entCart').then(function (resp) {
            if (resp !== null) {
                _this.entCartObj = resp;
            }
            else {
                _this.entCartObj = { products: [], totalProduct: 0 };
            }
        });
        this.getMenuCategories(this.global.getId(), this.global.getTel());
    }
    EntrepreneurCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EntrepreneurCategoryPage');
    };
    EntrepreneurCategoryPage.prototype.getMenuCategories = function (entrepreneurId, entrepreneurTel) {
        var _this = this;
        this.productService.getCategories(entrepreneurId, entrepreneurTel).subscribe(function (data) {
            _this.menuData = data.data;
        });
    };
    EntrepreneurCategoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('entCart').then(function (resp) {
            if (resp !== null) {
                _this.entCartObj = resp;
            }
        });
    };
    EntrepreneurCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-entrepreneur-category',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/entrepreneur-category/entrepreneur-category.html"*/'<!--\n  Generated template for the EntrepreneurCategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Achats</ion-title>\n        <ion-buttons end>\n            <button ion-button [navPush]="entCartPage" [navParams]="entCartObj">\n              <ion-icon name="cube"></ion-icon>&nbsp;\n              <span *ngIf="entCartObj">{{entCartObj.totalProduct}}</span>\n            </button>\n          </ion-buttons>    \n      </ion-navbar>\n  </ion-header>\n  \n\n<ion-content no-padding>\n    <ion-list no-padding>\n        <ion-row no-padding>\n            <ion-col  *ngFor="let menu of menuData" col-6>\n              <ion-card no-padding [navPush]="pageProduct" [navParams]=\'{typeId : menu.id, typeName : menu.title}\'>\n                <img src="./assets/imgs/{{menu.picture}}" alt="">\n                <div class="card-title" >{{menu.title}}</div>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/entrepreneur-category/entrepreneur-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_product_service_product_service__["a" /* ProductServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__["a" /* GlobalVars */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], EntrepreneurCategoryPage);
    return EntrepreneurCategoryPage;
}());

//# sourceMappingURL=entrepreneur-category.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrepreneurCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entrepreneur_order_entrepreneur_order__ = __webpack_require__(50);
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
 * Generated class for the EntrepreneurCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntrepreneurCartPage = (function () {
    function EntrepreneurCartPage(navCtrl, navParams, storage, global, alertCtrl, loading, http, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.entCartTotal = 0;
        this.entCartTotal = 0;
        this.storage.get('entCart').then(function (resp) {
            console.log(resp);
            if (resp !== null) {
                _this.entCartObj = resp;
                _this.entCartObj.products.forEach(function (obj) {
                    console.log(obj);
                    if (obj && obj.price && obj.qty) {
                        this.entCartTotal += obj.price * obj.qty;
                    }
                    console.log(this.entCartTotal);
                }, _this);
            }
        });
        this.entrepreneurBenooId = this.global.getId();
        this.entrepreneurTel = this.global.getTel();
    }
    EntrepreneurCartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EntrepreneurCartPage');
    };
    EntrepreneurCartPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('entCart').then(function (resp) {
            if (resp !== null) {
                _this.entCartObj = resp;
            }
        });
    };
    EntrepreneurCartPage.prototype.emptyCart = function () {
        console.log("EMPTY");
        this.entCartObj = { products: [], totalProduct: 0 };
        this.storage.set('entCart', this.entCartObj);
    };
    EntrepreneurCartPage.prototype.validateOrder = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Validation commande",
            message: 'Confirmez-vous votre commande ?',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Commander',
                    handler: function () {
                        var loader = _this.loading.create({
                            content: 'Envoi de la commande...',
                        });
                        loader.present();
                        var link = _this.global.getApiUrl() + 'entrepreneurs/orders/' + _this.entrepreneurBenooId + '/create';
                        var data = {
                            entrepreneurTel: _this.entrepreneurTel,
                            entrepreneurId: _this.entrepreneurBenooId,
                            products: _this.entCartObj.products,
                            total: _this.entCartTotal
                        };
                        _this.http.post(link, data)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            console.log(data);
                            if (data.status == true) {
                                loader.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: "Votre commande a bien été enregistrée.",
                                    duration: 5000,
                                    position: 'bottom',
                                    cssClass: "success"
                                });
                                toast.present();
                                _this.entCartObj = { products: [], totalProduct: 0 };
                                _this.storage.set('entCart', _this.entCartObj);
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__entrepreneur_order_entrepreneur_order__["a" /* EntrepreneurOrderPage */]);
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
                            console.log("Impossible d'envoyer la commande !");
                            loader.dismiss();
                            var toast = _this.toastCtrl.create({
                                message: 'Impossible d\'enregistrer la commande, veuillez réessayer. Si le problème persiste contactez votre support Benoo Energies.',
                                duration: 5000,
                                position: 'bottom',
                                cssClass: "danger"
                            });
                            toast.present();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    EntrepreneurCartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entrepreneur-cart',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/entrepreneur-cart/entrepreneur-cart.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title> \n        <span *ngIf="entCartObj" [ngPlural]="entCartObj.totalProduct">\n          <ng-template ngPluralCase="=0">Bon de commande (0)</ng-template>\n          <ng-template ngPluralCase="other">Bon de commande ({{entCartObj.totalProduct}})</ng-template>      \n        </span>\n      </ion-title> \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div *ngIf="entCartObj" no-padding>\n      <h3>Commande : </h3>  \n      <ion-list *ngFor="let product of entCartObj.products" no-padding>\n          <ion-row *ngIf="product">\n              <ion-col no-padding>              \n                <p>- {{entCartObj.products[product.id].qty}} x {{product.title}} : <b>{{entCartObj.products[product.id].qty * product.price}} Fcfa</b></p>\n              </ion-col>\n            </ion-row>\n        </ion-list>\n    </div>\n      \n    <div *ngIf="entCartObj && entCartObj.totalProduct == 0" class="noitem"><p>Votre commande est vide</p></div>\n    \n    <div *ngIf="entCartObj && entCartObj.totalProduct > 0">\n  \n      <div class="price">\n        <table class="total">\n          <tr class="cart-total">\n            <td  class="title">A payer : </td>\n            <td> {{entCartTotal}} Fcfa</td>\n          </tr>\n          \n        </table>\n      </div>\n\n\n        <button ion-button block large color="success"  (click)="validateOrder()" class="validate-btn">Valider la commande</button>\n    \n        <div *ngIf="entCartObj && entCartObj.totalProduct > 0">\n            <div class="cancel">\n              <button ion-button block color="danger" (click)="emptyCart()">Annuler la commande</button>\n            </div>    \n          </div>\n    </div>\n  \n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/entrepreneur-cart/entrepreneur-cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__["a" /* GlobalVars */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], EntrepreneurCartPage);
    return EntrepreneurCartPage;
}());

//# sourceMappingURL=entrepreneur-cart.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalVars__ = __webpack_require__(13);
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
    function HistoryPage(navCtrl, navParams, storage, http, toastCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.global = global;
        this.entrepreneurBenooId = this.global.getId();
        this.entrepreneurTel = this.global.getTel();
        this.loadHistory(this.global.getId(), this.global.getTel());
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage.prototype.loadHistory = function (entrepreneurBenooId, entrepreneurTel) {
        var _this = this;
        var url = this.global.getApiUrl() + 'entrepreneur/history/' + entrepreneurBenooId + "?entrepreneurTel=" + entrepreneurTel;
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
            selector: 'page-history',template:/*ion-inline-start:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/history/history.html"*/'<!--\n  Generated template for the HistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Solde & Transactions</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<!--   <div class="solde">\n    <h3>Solde</h3>\n    <p>{{entrepreneurAC}} Fcfa</p>\n  </div> -->\n\n  <div class="transaction">\n    <h3>Transactions</h3>\n    <div *ngIf="dataHistory && dataHistory.length > 0" no-padding>\n      <table>\n        <tr *ngFor="let history of dataHistory" class="{{history.type}}">\n          <td>{{history.date}}</td>\n          <td *ngIf="history.type == \'debit\'">-{{history.amount}} Fcfa</td>\n          <td *ngIf="history.type == \'credit\'">+{{history.amount}} Fcfa</td>\n        </tr>\n      </table>\n    </div>\n    <div *ngIf="dataHistory && dataHistory.length == 0" no-padding>\n      <p>Pas de transactions enregistrées actuellement.</p>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/vjlock/Documents/PRO/APPLICATIONS/BENOO/DEV_V2_GIT/APP/app_v2.0/src/pages/history/history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_globalVars__["a" /* GlobalVars */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ })

},[260]);
//# sourceMappingURL=main.js.map