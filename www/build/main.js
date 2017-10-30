webpackJsonp([0],{

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: false
                            }
                        }]
                }
            }
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('barCanvas'),
    __metadata("design:type", Object)
], HomePage.prototype, "barCanvas", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/kuhno92/Downloads/hiwi/test/productionManagerCockpit/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar class="bar-positive">\n    <ion-title>\n				<img src="assets/logo_sick.png" alt="SICK" style="height:30px; filter: brightness(0) invert(1);">\n				<font color="white"> Production Manager Cockpit </font>\n		</ion-title>\n				<ion-buttons end>\n						<button ion-button icon-only>\n								<ion-icon name="help"></ion-icon>\n							</button>\n						</ion-buttons>\n				<ion-buttons end>\n					<button ion-button icon-only>\n						<ion-icon name="information-circle"></ion-icon>\n					</button>\n				</ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n	<ion-card>\n		<ion-card-content text-right>\n				<input id="interval" type="number" name="interval" value="1" min="1" max="60">\n				<input id="checkbox" type="checkbox" name="autorefresh" value="on"> autorefresh(min) \n				<button ion-button class="active" round margin-left id="refresh"><span class="glyphicon glyphicon-refresh"></span></button>\n		</ion-card-content>\n	</ion-card>\n\n  <ion-card>\n	  <ion-card-header>\n	  	First Pass Yield\n	  </ion-card-header>\n	  <ion-card-content style="height:50vh;">\n	    <canvas id="barCanvas" #barCanvas></canvas>\n	  </ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			DPM\n		</ion-card-header>\n	  <ion-card-content>\n			<ul id="DPM"></ul>\n	  </ion-card-content>\n	</ion-card>\n</ion-content>\n\n<ion-footer style=" background-color: lightgray; text-align: center; justify-content: center; align-items: center;">\n		<ion-toolbar id="footer" transparent>\n			Lines:\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">1</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">2</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">3</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">4</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">5</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">6</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">7</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">8</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">9</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">10</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">11</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">12</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">13</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">14</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">15</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">16</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">17</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">18</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">19</button>\n			<button ion-button class="active" onclick="toggleLine(this)" style="display:none;">20</button>\n		</ion-toolbar>\n	</ion-footer>'/*ion-inline-end:"/home/kuhno92/Downloads/hiwi/test/productionManagerCockpit/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(338);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/kuhno92/Downloads/hiwi/test/productionManagerCockpit/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/kuhno92/Downloads/hiwi/test/productionManagerCockpit/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 204,
	"./af.js": 204,
	"./ar": 205,
	"./ar-dz": 206,
	"./ar-dz.js": 206,
	"./ar-kw": 207,
	"./ar-kw.js": 207,
	"./ar-ly": 208,
	"./ar-ly.js": 208,
	"./ar-ma": 209,
	"./ar-ma.js": 209,
	"./ar-sa": 210,
	"./ar-sa.js": 210,
	"./ar-tn": 211,
	"./ar-tn.js": 211,
	"./ar.js": 205,
	"./az": 212,
	"./az.js": 212,
	"./be": 213,
	"./be.js": 213,
	"./bg": 214,
	"./bg.js": 214,
	"./bn": 215,
	"./bn.js": 215,
	"./bo": 216,
	"./bo.js": 216,
	"./br": 217,
	"./br.js": 217,
	"./bs": 218,
	"./bs.js": 218,
	"./ca": 219,
	"./ca.js": 219,
	"./cs": 220,
	"./cs.js": 220,
	"./cv": 221,
	"./cv.js": 221,
	"./cy": 222,
	"./cy.js": 222,
	"./da": 223,
	"./da.js": 223,
	"./de": 224,
	"./de-at": 225,
	"./de-at.js": 225,
	"./de-ch": 226,
	"./de-ch.js": 226,
	"./de.js": 224,
	"./dv": 227,
	"./dv.js": 227,
	"./el": 228,
	"./el.js": 228,
	"./en-au": 229,
	"./en-au.js": 229,
	"./en-ca": 230,
	"./en-ca.js": 230,
	"./en-gb": 231,
	"./en-gb.js": 231,
	"./en-ie": 232,
	"./en-ie.js": 232,
	"./en-nz": 233,
	"./en-nz.js": 233,
	"./eo": 234,
	"./eo.js": 234,
	"./es": 235,
	"./es-do": 236,
	"./es-do.js": 236,
	"./es.js": 235,
	"./et": 237,
	"./et.js": 237,
	"./eu": 238,
	"./eu.js": 238,
	"./fa": 239,
	"./fa.js": 239,
	"./fi": 240,
	"./fi.js": 240,
	"./fo": 241,
	"./fo.js": 241,
	"./fr": 242,
	"./fr-ca": 243,
	"./fr-ca.js": 243,
	"./fr-ch": 244,
	"./fr-ch.js": 244,
	"./fr.js": 242,
	"./fy": 245,
	"./fy.js": 245,
	"./gd": 246,
	"./gd.js": 246,
	"./gl": 247,
	"./gl.js": 247,
	"./gom-latn": 248,
	"./gom-latn.js": 248,
	"./he": 249,
	"./he.js": 249,
	"./hi": 250,
	"./hi.js": 250,
	"./hr": 251,
	"./hr.js": 251,
	"./hu": 252,
	"./hu.js": 252,
	"./hy-am": 253,
	"./hy-am.js": 253,
	"./id": 254,
	"./id.js": 254,
	"./is": 255,
	"./is.js": 255,
	"./it": 256,
	"./it.js": 256,
	"./ja": 257,
	"./ja.js": 257,
	"./jv": 258,
	"./jv.js": 258,
	"./ka": 259,
	"./ka.js": 259,
	"./kk": 260,
	"./kk.js": 260,
	"./km": 261,
	"./km.js": 261,
	"./kn": 262,
	"./kn.js": 262,
	"./ko": 263,
	"./ko.js": 263,
	"./ky": 264,
	"./ky.js": 264,
	"./lb": 265,
	"./lb.js": 265,
	"./lo": 266,
	"./lo.js": 266,
	"./lt": 267,
	"./lt.js": 267,
	"./lv": 268,
	"./lv.js": 268,
	"./me": 269,
	"./me.js": 269,
	"./mi": 270,
	"./mi.js": 270,
	"./mk": 271,
	"./mk.js": 271,
	"./ml": 272,
	"./ml.js": 272,
	"./mr": 273,
	"./mr.js": 273,
	"./ms": 274,
	"./ms-my": 275,
	"./ms-my.js": 275,
	"./ms.js": 274,
	"./my": 276,
	"./my.js": 276,
	"./nb": 277,
	"./nb.js": 277,
	"./ne": 278,
	"./ne.js": 278,
	"./nl": 279,
	"./nl-be": 280,
	"./nl-be.js": 280,
	"./nl.js": 279,
	"./nn": 281,
	"./nn.js": 281,
	"./pa-in": 282,
	"./pa-in.js": 282,
	"./pl": 283,
	"./pl.js": 283,
	"./pt": 284,
	"./pt-br": 285,
	"./pt-br.js": 285,
	"./pt.js": 284,
	"./ro": 286,
	"./ro.js": 286,
	"./ru": 287,
	"./ru.js": 287,
	"./sd": 288,
	"./sd.js": 288,
	"./se": 289,
	"./se.js": 289,
	"./si": 290,
	"./si.js": 290,
	"./sk": 291,
	"./sk.js": 291,
	"./sl": 292,
	"./sl.js": 292,
	"./sq": 293,
	"./sq.js": 293,
	"./sr": 294,
	"./sr-cyrl": 295,
	"./sr-cyrl.js": 295,
	"./sr.js": 294,
	"./ss": 296,
	"./ss.js": 296,
	"./sv": 297,
	"./sv.js": 297,
	"./sw": 298,
	"./sw.js": 298,
	"./ta": 299,
	"./ta.js": 299,
	"./te": 300,
	"./te.js": 300,
	"./tet": 301,
	"./tet.js": 301,
	"./th": 302,
	"./th.js": 302,
	"./tl-ph": 303,
	"./tl-ph.js": 303,
	"./tlh": 304,
	"./tlh.js": 304,
	"./tr": 305,
	"./tr.js": 305,
	"./tzl": 306,
	"./tzl.js": 306,
	"./tzm": 307,
	"./tzm-latn": 308,
	"./tzm-latn.js": 308,
	"./tzm.js": 307,
	"./uk": 309,
	"./uk.js": 309,
	"./ur": 310,
	"./ur.js": 310,
	"./uz": 311,
	"./uz-latn": 312,
	"./uz-latn.js": 312,
	"./uz.js": 311,
	"./vi": 313,
	"./vi.js": 313,
	"./x-pseudo": 314,
	"./x-pseudo.js": 314,
	"./yo": 315,
	"./yo.js": 315,
	"./zh-cn": 316,
	"./zh-cn.js": 316,
	"./zh-hk": 317,
	"./zh-hk.js": 317,
	"./zh-tw": 318,
	"./zh-tw.js": 318
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 418;

/***/ })

},[319]);
//# sourceMappingURL=main.js.map