(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-samples-src-app-logo-logo-module"],{

/***/ "./node_modules/raw-loader/index.js!./projects/samples/src/app/logo/logo.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/samples/src/app/logo/logo.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n  <nb-layout-column>\n    <router-outlet></router-outlet>\n  </nb-layout-column>\n</nb-layout>\n\n"

/***/ }),

/***/ "./projects/samples/src/app/logo/logo-routing.module.ts":
/*!**************************************************************!*\
  !*** ./projects/samples/src/app/logo/logo-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: LogoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoRoutingModule", function() { return LogoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.component */ "./projects/samples/src/app/logo/logo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'logo',
        component: _logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"],
        children: [
            {
                path: 'excel-sample',
                loadChildren: function () { return Promise.all(/*! import() | excel-sample-excel-sample-module */[__webpack_require__.e("default~excel-sample-excel-sample-module~table-sample-table-sample-module"), __webpack_require__.e("excel-sample-excel-sample-module")]).then(__webpack_require__.bind(null, /*! ./excel-sample/excel-sample.module */ "./projects/samples/src/app/logo/excel-sample/excel-sample.module.ts")).then(function (m) { return m.ExcelSampleModule; }); },
            },
            {
                path: 'language-sample',
                loadChildren: function () { return Promise.all(/*! import() | language-sample-language-sample-module */[__webpack_require__.e("default~core-sample-core-sample-module~language-sample-language-sample-module"), __webpack_require__.e("language-sample-language-sample-module")]).then(__webpack_require__.bind(null, /*! ./language-sample/language-sample.module */ "./projects/samples/src/app/logo/language-sample/language-sample.module.ts")).then(function (m) { return m.LanguageSampleModule; }); },
            },
            {
                path: 'core-sample',
                loadChildren: function () { return Promise.all(/*! import() | core-sample-core-sample-module */[__webpack_require__.e("default~core-sample-core-sample-module~language-sample-language-sample-module"), __webpack_require__.e("core-sample-core-sample-module")]).then(__webpack_require__.bind(null, /*! ./core-sample/core-sample.module */ "./projects/samples/src/app/logo/core-sample/core-sample.module.ts")).then(function (m) { return m.CoreSampleModule; }); },
            },
            {
                path: 'table-sample',
                loadChildren: function () { return Promise.all(/*! import() | table-sample-table-sample-module */[__webpack_require__.e("default~excel-sample-excel-sample-module~table-sample-table-sample-module"), __webpack_require__.e("table-sample-table-sample-module")]).then(__webpack_require__.bind(null, /*! ./table-sample/table-sample.module */ "./projects/samples/src/app/logo/table-sample/table-sample.module.ts")).then(function (m) { return m.TableSampleModule; }); },
            },
        ],
    },
];
var LogoRoutingModule = /** @class */ (function () {
    function LogoRoutingModule() {
    }
    LogoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], LogoRoutingModule);
    return LogoRoutingModule;
}());



/***/ }),

/***/ "./projects/samples/src/app/logo/logo.component.scss":
/*!***********************************************************!*\
  !*** ./projects/samples/src/app/logo/logo.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zYW1wbGVzL3NyYy9hcHAvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./projects/samples/src/app/logo/logo.component.ts":
/*!*********************************************************!*\
  !*** ./projects/samples/src/app/logo/logo.component.ts ***!
  \*********************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'logo-logo',
            template: __webpack_require__(/*! raw-loader!./logo.component.html */ "./node_modules/raw-loader/index.js!./projects/samples/src/app/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./projects/samples/src/app/logo/logo.component.scss")]
        })
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./projects/samples/src/app/logo/logo.module.ts":
/*!******************************************************!*\
  !*** ./projects/samples/src/app/logo/logo.module.ts ***!
  \******************************************************/
/*! exports provided: LogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoModule", function() { return LogoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _logo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo-routing.module */ "./projects/samples/src/app/logo/logo-routing.module.ts");
/* harmony import */ var _logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo.component */ "./projects/samples/src/app/logo/logo.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LogoModule = /** @class */ (function () {
    function LogoModule() {
    }
    LogoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_logo_component__WEBPACK_IMPORTED_MODULE_3__["LogoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _logo_routing_module__WEBPACK_IMPORTED_MODULE_2__["LogoRoutingModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"]],
        })
    ], LogoModule);
    return LogoModule;
}());



/***/ })

}]);
//# sourceMappingURL=projects-samples-src-app-logo-logo-module.js.map