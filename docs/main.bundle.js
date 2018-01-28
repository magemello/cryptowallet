webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-crypto-dialog/add-crypto-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-field {\n  margin-left: 25px;\n  width: 189px;\n}\n\n.full-width{\n  width: 90%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-crypto-dialog/add-crypto-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Add Crypto</h2>\n<form class=\"add-crypto-form\">\n  <div>\n    <mat-form-field class=\"form-field full-width\">\n      <input matInput placeholder=\"Coin Name\" required>\n    </mat-form-field>\n  </div>\n\n  <div>\n    <mat-form-field class=\"form-field\">\n      <textarea matInput placeholder=\"Coin Code\" required></textarea>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-field\">\n      <mat-select placeholder=\"Bought With\">\n        <mat-option value=\"BTC\">BTC</mat-option>\n        <mat-option value=\"EUR\">EUR</mat-option>\n        <mat-option value=\"USD\">USD</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <div>\n    <mat-form-field class=\"form-field\">\n      <input matInput placeholder=\"Exchange rate\" type=\"number\" class=\"example-right-align\" required>\n      <span matPrefix>$&nbsp;</span>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-field\">\n      <textarea matInput placeholder=\"Amount Bought\" required></textarea>\n    </mat-form-field>\n  </div>\n\n  <div>\n    <mat-form-field class=\"form-field\">\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Date & time\" [formControl]=\"serializedDate\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-field\">\n      <input matInput placeholder=\"Exchange\" required>\n    </mat-form-field>\n  </div>\n\n  <div>\n    <mat-form-field hintLabel=\"Max 100 characters\" class=\"form-field full-width\">\n      <input matInput #input maxlength=\"100\" placeholder=\"Note\">\n      <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\n    </mat-form-field>\n  </div>\n\n  <br><br>\n\n  <div class=\"button-row\">\n    <button mat-raised-button color=\"primary\">Buy</button>\n    <button mat-raised-button color=\"warn\">Sell</button>\n  </div>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/add-crypto-dialog/add-crypto-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCryptoDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddCryptoDialogComponent = /** @class */ (function () {
    function AddCryptoDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.serializedDate = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]((new Date()).toISOString());
    }
    AddCryptoDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddCryptoDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'add-crypto-dialog',
            template: __webpack_require__("../../../../../src/app/add-crypto-dialog/add-crypto-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-crypto-dialog/add-crypto-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object])
    ], AddCryptoDialogComponent);
    return AddCryptoDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_component__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wallet_wallet_component__ = __webpack_require__("../../../../../src/app/wallet/wallet.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'market',
        component: __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_component__["a" /* MarketCapComponent */],
    },
    {
        path: 'wallet',
        component: __WEBPACK_IMPORTED_MODULE_3__wallet_wallet_component__["a" /* WalletComponent */],
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_component__["a" /* MarketCapComponent */],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.app-is-mobile .app-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n\nh1.app-name {\n  margin-left: 8px;\n}\n\n.mat-sidenav {\n  background-color: #efefefe0;\n}\n\n.item-side i {\n  font-size: 40px;\n}\n\n.mat-list-item {\n  height: 70px !important;\n}\n\n.app-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.app-is-mobile .app-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n.item-side {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\" [class.app-is-mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"primary\" class=\"app-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <h1 class=\"app-name\">Crypto Wallet</h1>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"app-sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                 [opened]=\"true\"\n                 [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a mat-list-item routerLink=\"market\">\n          <div class=\"item-side\">\n              <div><i class=\"material-icons\">timeline</i></div>\n              <div>Market</div>\n          </div>\n        </a>\n        <a mat-list-item routerLink=\"wallet\">\n          <div class=\"item-side\">\n            <div><i class=\"material-icons\">account_balance_wallet</i></div>\n            <div>Wallet</div>\n          </div>\n        </a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(changeDetectorRef, media) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coinmarketcap_service__ = __webpack_require__("../../../../../src/app/coinmarketcap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_sort__ = __webpack_require__("../../../material/esm5/sort.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__log_pipe__ = __webpack_require__("../../../../../src/app/log.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__add_crypto_dialog_add_crypto_dialog_component__ = __webpack_require__("../../../../../src/app/add-crypto-dialog/add-crypto-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__market_cap_market_cap_component__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__wallet_wallet_component__ = __webpack_require__("../../../../../src/app/wallet/wallet.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__add_crypto_dialog_add_crypto_dialog_component__["a" /* AddCryptoDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_11__log_pipe__["a" /* LogPipe */],
                __WEBPACK_IMPORTED_MODULE_16__market_cap_market_cap_component__["a" /* MarketCapComponent */],
                __WEBPACK_IMPORTED_MODULE_19__wallet_wallet_component__["a" /* WalletComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["r" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["k" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["l" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["m" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["s" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["t" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["u" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["v" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["w" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_sort__["b" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["B" /* MatStepperModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__add_crypto_dialog_add_crypto_dialog_component__["a" /* AddCryptoDialogComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__coinmarketcap_service__["a" /* CoinmarketcapService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/coinmarketcap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinmarketcapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoinmarketcapService = /** @class */ (function () {
    function CoinmarketcapService(http) {
        this.http = http;
        this.BASE_URL = 'https://api.coinmarketcap.com/v1';
    }
    CoinmarketcapService.prototype.ticker = function (start) {
        return this.http.get(this.BASE_URL + '/ticker/?start=' + start + '&limit=100', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
                .append('Accept', 'application/json')
        });
        // return this.http.get('/assets/test.json',
        //   {
        //     headers: new HttpHeaders()
        //       .append('Accept', 'application/json')
        //   }
        // );
    };
    CoinmarketcapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CoinmarketcapService);
    return CoinmarketcapService;
}());



/***/ }),

/***/ "../../../../../src/app/log.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LogPipe = /** @class */ (function () {
    function LogPipe() {
    }
    LogPipe.prototype.transform = function (value, args) {
        console.log(value);
        return value;
    };
    LogPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'log'
        })
    ], LogPipe);
    return LogPipe;
}());



/***/ }),

/***/ "../../../../../src/app/market-cap/market-cap.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red {\n  color: red;\n}\n\n.green {\n  color: green;\n}\n\n.title {\n  text-align: center;\n}\n\n.container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 420px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 420px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/market-cap/market-cap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <h1>Cryptocurrency Market Capitalizations</h1>\n</div>\n\n<div class=\"header\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div>\n<div>\n  <div class=\"container mat-elevation-z8\" *ngIf=\"dataSource\">\n\n    <mat-table [dataSource]=\"dataSource\" matSort>\n\n      <ng-container matColumnDef=\"rank\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Rank </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.rank}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> <i class=\"cc {{row.symbol}}\"></i> {{row.name}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"market_cap_usd\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Market Cap </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.market_cap_usd | currency:'USD':'symbol':'4.0-2' }} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"price_usd\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Price $ </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.price_usd | currency:'USD':'symbol':'0.0-7' }} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"volume_usd\">\n        <mat-header-cell *matHeaderCellDef > 24h Volume </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          {{row.volume_usd | currency:'USD':'symbol':'4.0-2' }}\n        </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"available_supply\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Available Supply </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" > {{row.available_supply | number:'3.0-5'}} {{row.symbol}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"percent_change_1h\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Change 1h </mat-header-cell>\n        <mat-cell [ngClass]=\"cssClassPercentage(row.percent_change_1h)\" *matCellDef=\"let row\" [style.color]=\"row.percent_change_1h\" >\n          {{row.percent_change_1h}}% </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"percent_change_24h\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Change 24h </mat-header-cell>\n        <mat-cell [ngClass]=\"cssClassPercentage(row.percent_change_24h)\" *matCellDef=\"let row\" [style.color]=\"row.percent_change_24h\">\n          {{row.percent_change_24h}}% </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"percent_change_7d\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Change 7d </mat-header-cell>\n        <mat-cell [ngClass]=\"cssClassPercentage(row.percent_change_7d)\" *matCellDef=\"let row\" [style.color]=\"row.percent_change_7d\" >\n          {{row.percent_change_7d}}%\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n\n    <mat-paginator [pageSize]=\"100\" [pageSizeOptions]=\"[5, 10, 25, 100]\" length=\"2000\" (page)=\"pageEvent($event)\"></mat-paginator>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/market-cap/market-cap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketCapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coinmarketcap_service__ = __webpack_require__("../../../../../src/app/coinmarketcap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarketCapComponent = /** @class */ (function () {
    function MarketCapComponent(coinmarketcapService) {
        var _this = this;
        this.coinmarketcapService = coinmarketcapService;
        this.displayedColumns = [
            'rank',
            'name',
            'market_cap_usd',
            'price_usd',
            'volume_usd',
            'available_supply',
            'percent_change_1h',
            'percent_change_24h',
            'percent_change_7d'
        ];
        coinmarketcapService.ticker(0).subscribe(function (res) {
            res = _this.RemoveTheNumberFromAPropertyNameThatStartWithANumberBecauseABugInAngularMaterial(res);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatTableDataSource */](res);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    }
    MarketCapComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    MarketCapComponent.prototype.pageEvent = function (event) {
        var _this = this;
        console.log(event);
        this.coinmarketcapService.ticker(100 * event.pageIndex).subscribe(function (res) {
            res = _this.RemoveTheNumberFromAPropertyNameThatStartWithANumberBecauseABugInAngularMaterial(res);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatTableDataSource */](res);
            _this.dataSource.sort = _this.sort;
        });
    };
    MarketCapComponent.prototype.cssClassPercentage = function (value) {
        if (value >= 0) {
            return 'green';
        }
        else {
            return 'red';
        }
    };
    MarketCapComponent.prototype.RemoveTheNumberFromAPropertyNameThatStartWithANumberBecauseABugInAngularMaterial = function (res) {
        var jsonString = JSON.stringify(res).replace(/24h_volume_usd/g, "volume_usd");
        res = JSON.parse(jsonString);
        return res;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatPaginator */])
    ], MarketCapComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSort */])
    ], MarketCapComponent.prototype, "sort", void 0);
    MarketCapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-market-cap',
            template: __webpack_require__("../../../../../src/app/market-cap/market-cap.component.html"),
            styles: [__webpack_require__("../../../../../src/app/market-cap/market-cap.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__coinmarketcap_service__["a" /* CoinmarketcapService */]])
    ], MarketCapComponent);
    return MarketCapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/wallet/wallet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wallet/wallet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <h1>Wallet</h1>\n</div>\n<div class=\"button-row\">\n  <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Add</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wallet/wallet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_crypto_dialog_add_crypto_dialog_component__ = __webpack_require__("../../../../../src/app/add-crypto-dialog/add-crypto-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WalletComponent = /** @class */ (function () {
    function WalletComponent(dialog) {
        this.dialog = dialog;
    }
    WalletComponent.prototype.ngOnInit = function () {
    };
    WalletComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__add_crypto_dialog_add_crypto_dialog_component__["a" /* AddCryptoDialogComponent */], {
            width: '500px',
            height: '570px',
            data: { test: 'test' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    WalletComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-wallet',
            template: __webpack_require__("../../../../../src/app/wallet/wallet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/wallet/wallet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialog */]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map