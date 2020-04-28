(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["excel-sample-excel-sample-module"],{

/***/ "./node_modules/raw-loader/index.js!./projects/samples/src/app/logo/excel-sample/excel-showcase/excel-showcase.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/samples/src/app/logo/excel-sample/excel-showcase/excel-showcase.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<logo-excel (complete)=\"excelSample.complete()\"\n            [columns]=\"excelSample.columns\"\n            [data]=\"excelSample.data\"\n            [header]=\"excelSample.header\"\n            [name]=\"excelSample.name\"\n            nbButton\n>\n  <button nbButton>Excel Export</button>\n</logo-excel>\n\n"

/***/ }),

/***/ "./projects/samples/src/app/logo/excel-sample/excel-sample-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./projects/samples/src/app/logo/excel-sample/excel-sample-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ExcelSampleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelSampleRoutingModule", function() { return ExcelSampleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _excel_showcase_excel_showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./excel-showcase/excel-showcase.component */ "./projects/samples/src/app/logo/excel-sample/excel-showcase/excel-showcase.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'excel-showcase/excel-showcase.component',
        component: _excel_showcase_excel_showcase_component__WEBPACK_IMPORTED_MODULE_2__["ExcelShowcaseComponent"],
    },
];
var ExcelSampleRoutingModule = /** @class */ (function () {
    function ExcelSampleRoutingModule() {
    }
    ExcelSampleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ExcelSampleRoutingModule);
    return ExcelSampleRoutingModule;
}());



/***/ }),

/***/ "./projects/samples/src/app/logo/excel-sample/excel-sample.module.ts":
/*!***************************************************************************!*\
  !*** ./projects/samples/src/app/logo/excel-sample/excel-sample.module.ts ***!
  \***************************************************************************/
/*! exports provided: ExcelSampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelSampleModule", function() { return ExcelSampleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _excel_sample_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./excel-sample-routing.module */ "./projects/samples/src/app/logo/excel-sample/excel-sample-routing.module.ts");
/* harmony import */ var _excel_showcase_excel_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./excel-showcase/excel-showcase.component */ "./projects/samples/src/app/logo/excel-sample/excel-showcase/excel-showcase.component.ts");
/* harmony import */ var _logo_software_excel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @logo-software/excel */ "./node_modules/@logo-software/excel/fesm5/logo-software-excel.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ExcelSampleModule = /** @class */ (function () {
    function ExcelSampleModule() {
    }
    ExcelSampleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_excel_showcase_excel_showcase_component__WEBPACK_IMPORTED_MODULE_3__["ExcelShowcaseComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _excel_sample_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExcelSampleRoutingModule"],
                _logo_software_excel__WEBPACK_IMPORTED_MODULE_4__["ExcelModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
            ],
        })
    ], ExcelSampleModule);
    return ExcelSampleModule;
}());



/***/ }),

/***/ "./projects/samples/src/app/logo/excel-sample/excel-showcase/excel-showcase.component.scss":
/*!*************************************************************************************************!*\
  !*** ./projects/samples/src/app/logo/excel-sample/excel-showcase/excel-showcase.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zYW1wbGVzL3NyYy9hcHAvbG9nby9leGNlbC1zYW1wbGUvZXhjZWwtc2hvd2Nhc2UvZXhjZWwtc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./projects/samples/src/app/logo/excel-sample/excel-showcase/excel-showcase.component.ts":
/*!***********************************************************************************************!*\
  !*** ./projects/samples/src/app/logo/excel-sample/excel-showcase/excel-showcase.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ExcelShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelShowcaseComponent", function() { return ExcelShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExcelShowcaseComponent = /** @class */ (function () {
    function ExcelShowcaseComponent() {
        this.excelSample = {
            name: 'ExcelFile',
            header: ['CODE', 'ADDRESS', 'NAME', 'SURNAME'],
            complete: this.excelComplete,
            columns: [
                {
                    display: 'ID',
                    variablePath: 'id',
                    hidden: true,
                },
                {
                    display: 'Code',
                    variablePath: 'code',
                },
                {
                    display: 'Address',
                    variablePath: 'recipient.address',
                },
                {
                    display: 'Name',
                    variablePath: 'user.name',
                },
                {
                    display: 'Surname',
                    variablePath: 'user.surname',
                },
            ],
            data: [
                { id: 1, code: 123213, recipient: { address: 'Doğ sok. 8/10 Ankara' }, user: { name: 'Serkan', surname: 'Konakcı' } },
                { id: 2, code: 2134, recipient: { address: 'Ateş sok. 3/5 İstanbul' }, user: { name: 'Seda', surname: 'Sayan' } },
                { id: 3, code: 456456, recipient: { address: 'Kıvılcım apt. 5/23 Konya' }, user: { name: 'Banu', surname: 'Alkan' } },
            ],
        };
    }
    ExcelShowcaseComponent.prototype.excelComplete = function () {
        alert('excel export completed');
    };
    ExcelShowcaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'logo-excel-showcase',
            template: __webpack_require__(/*! raw-loader!./excel-showcase.component.html */ "./node_modules/raw-loader/index.js!./projects/samples/src/app/logo/excel-sample/excel-showcase/excel-showcase.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./excel-showcase.component.scss */ "./projects/samples/src/app/logo/excel-sample/excel-showcase/excel-showcase.component.scss")]
        })
    ], ExcelShowcaseComponent);
    return ExcelShowcaseComponent;
}());



/***/ })

}]);
//# sourceMappingURL=excel-sample-excel-sample-module.js.map