(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["example-example-module"],{

/***/ "./docs/app/example/example-404.component.scss":
/*!*****************************************************!*\
  !*** ./docs/app/example/example-404.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  color: gray;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RlcG8vV29yay9sb2dvLmNvbS50ci9uZy1wcm9qZWN0cy9uZWJ1bGFyL2RvY3MvYXBwL2V4YW1wbGUvZXhhbXBsZS00MDQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBbUI7TUFBbkIsc0JBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixvQkFBYTtFQUFiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFdBQVc7RUFDWCx3QkFBdUI7TUFBdkIscUJBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixZQUFZLEVBQUEiLCJmaWxlIjoiZG9jcy9hcHAvZXhhbXBsZS9leGFtcGxlLTQwNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IGdyYXk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDVyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./docs/app/example/example-404.component.ts":
/*!***************************************************!*\
  !*** ./docs/app/example/example-404.component.ts ***!
  \***************************************************/
/*! exports provided: NgdExample404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgdExample404Component", function() { return NgdExample404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgdExample404Component = /** @class */ (function () {
    function NgdExample404Component(themeService) {
        this.themeService = themeService;
        this.themeService.changeTheme('default');
    }
    NgdExample404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngd-example-404',
            template: "\n    Example not found.\n  ",
            styles: [__webpack_require__(/*! ./example-404.component.scss */ "./docs/app/example/example-404.component.scss")]
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], NgdExample404Component);
    return NgdExample404Component;
}());



/***/ }),

/***/ "./docs/app/example/example-routing.module.ts":
/*!****************************************************!*\
  !*** ./docs/app/example/example-routing.module.ts ***!
  \****************************************************/
/*! exports provided: routes, NgdExampleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgdExampleRoutingModule", function() { return NgdExampleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example.component */ "./docs/app/example/example.component.ts");
/* harmony import */ var _example_404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example-404.component */ "./docs/app/example/example-404.component.ts");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _example_component__WEBPACK_IMPORTED_MODULE_2__["NgdExampleComponent"],
        children: [
            {
                path: '',
                loadChildren: function () { return __webpack_require__.e(/*! import() | projects-samples-src-app-logo-logo-module */ "projects-samples-src-app-logo-logo-module").then(__webpack_require__.bind(null, /*! ../../../projects/samples/src/app/logo/logo.module */ "./projects/samples/src/app/logo/logo.module.ts")).then(function (m) { return m.LogoModule; }); },
            },
            {
                path: '**',
                component: _example_404_component__WEBPACK_IMPORTED_MODULE_3__["NgdExample404Component"],
            },
        ],
    },
];
var NgdExampleRoutingModule = /** @class */ (function () {
    function NgdExampleRoutingModule() {
    }
    NgdExampleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], NgdExampleRoutingModule);
    return NgdExampleRoutingModule;
}());



/***/ }),

/***/ "./docs/app/example/example.component.scss":
/*!*************************************************!*\
  !*** ./docs/app/example/example.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  background-color: #f1f2f3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RlcG8vV29yay9sb2dvLmNvbS50ci9uZy1wcm9qZWN0cy9uZWJ1bGFyL2RvY3MvYXBwL2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGNBQWM7RUFDZCx5QkFKNkIsRUFBQSIsImZpbGUiOiJkb2NzL2FwcC9leGFtcGxlL2V4YW1wbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb2xvcnNcbiRjb2xvci1ncmF5LWJhY2tncm91bmQ6ICNmMWYyZjM7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmF5LWJhY2tncm91bmQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./docs/app/example/example.component.ts":
/*!***********************************************!*\
  !*** ./docs/app/example/example.component.ts ***!
  \***********************************************/
/*! exports provided: NgdExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgdExampleComponent", function() { return NgdExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _theme_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@theme/services */ "./docs/app/@theme/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var NgdExampleComponent = /** @class */ (function () {
    function NgdExampleComponent(communicator, themeService, router, analytics, document) {
        this.communicator = communicator;
        this.themeService = themeService;
        this.router = router;
        this.analytics = analytics;
        this.document = document;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    NgdExampleComponent.prototype.ngOnInit = function () {
        this.setupId();
        this.subscribeOnThemeSwitch();
        this.analytics.trackEvent('initExampleView', this.id);
    };
    NgdExampleComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .subscribe(function () { return _this.sendHeight(); });
    };
    NgdExampleComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NgdExampleComponent.prototype.setupId = function () {
        this.id = this.getId();
    };
    NgdExampleComponent.prototype.subscribeOnThemeSwitch = function () {
        var _this = this;
        this.communicator.receive(this.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (payload) { return _this.changeTheme(payload); });
    };
    NgdExampleComponent.prototype.changeTheme = function (payload) {
        this.themeService.changeTheme(payload.theme);
        this.sendHeight(); // theme change may cause change of height
    };
    NgdExampleComponent.prototype.getId = function () {
        var splitted = this.router.url.split('/');
        // remove 'example' route prefix
        splitted.splice(0, 2);
        return splitted.join('/');
    };
    NgdExampleComponent.prototype.sendHeight = function () {
        this.communicator.send({ id: this.id, height: this.document.body.clientHeight });
    };
    NgdExampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngd-example',
            template: '<router-outlet></router-outlet>',
            styles: [__webpack_require__(/*! ./example.component.scss */ "./docs/app/example/example.component.scss")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NB_DOCUMENT"])),
        __metadata("design:paramtypes", [_theme_services__WEBPACK_IMPORTED_MODULE_5__["NgdIframeCommunicatorService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _theme_services__WEBPACK_IMPORTED_MODULE_5__["NgdAnalytics"], Object])
    ], NgdExampleComponent);
    return NgdExampleComponent;
}());



/***/ }),

/***/ "./docs/app/example/example.module.ts":
/*!********************************************!*\
  !*** ./docs/app/example/example.module.ts ***!
  \********************************************/
/*! exports provided: NgdExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgdExampleModule", function() { return NgdExampleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _example_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example-routing.module */ "./docs/app/example/example-routing.module.ts");
/* harmony import */ var _example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example.component */ "./docs/app/example/example.component.ts");
/* harmony import */ var _example_404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example-404.component */ "./docs/app/example/example-404.component.ts");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NgdExampleModule = /** @class */ (function () {
    function NgdExampleModule() {
    }
    NgdExampleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _example_routing_module__WEBPACK_IMPORTED_MODULE_1__["NgdExampleRoutingModule"],
            ],
            declarations: [
                _example_component__WEBPACK_IMPORTED_MODULE_2__["NgdExampleComponent"],
                _example_404_component__WEBPACK_IMPORTED_MODULE_3__["NgdExample404Component"],
            ],
        })
    ], NgdExampleModule);
    return NgdExampleModule;
}());



/***/ })

}]);
//# sourceMappingURL=example-example-module.js.map