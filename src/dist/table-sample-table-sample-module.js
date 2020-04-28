(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-sample-table-sample-module"],{

/***/ "./node_modules/@logo-software/paging/fesm5/logo-software-paging.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@logo-software/paging/fesm5/logo-software-paging.js ***!
  \**************************************************************************/
/*! exports provided: PagingComponent, PagingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingComponent", function() { return PagingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingModule", function() { return PagingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





/**
 * @fileoverview added by tsickle
 * Generated from: lib/paging.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Given parameters outside of the component
 * @record
 */
function Paging() { }
if (false) {}
/**
 * @record
 */
function Pager() { }
if (false) {}
var PagingComponent = /** @class */ (function () {
    function PagingComponent() {
        this.pageSize = 10;
        this.pageNumber = 1;
        this.classes = true;
        this.pageNumberChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pager = {};
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    PagingComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.totalPages = Math.ceil(this.totalCount / this.pageSize);
        this.pager = this.getPager(this.totalCount, this.pageNumber, this.pageSize);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    PagingComponent.prototype.setPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        if (page >= 1 && page <= this.totalPages) {
            this.pager = this.getPager(this.totalCount, page, this.pageSize);
            this.pageNumberChange.emit(this.pager);
        }
    };
    /**
     * @return {?}
     */
    PagingComponent.prototype.setPageSize = /**
     * @return {?}
     */
    function () {
        this.pager = this.getPager(this.totalCount, this.pageNumber, this.pageSize);
        this.pageSizeChange.emit(this.pager);
    };
    /**
     * @param {?} totalItems
     * @param {?=} pageNumber
     * @param {?=} pageSize
     * @return {?}
     */
    PagingComponent.prototype.getPager = /**
     * @param {?} totalItems
     * @param {?=} pageNumber
     * @param {?=} pageSize
     * @return {?}
     */
    function (totalItems, pageNumber, pageSize) {
        if (pageNumber === void 0) { pageNumber = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        /** @type {?} */
        var totalPages = Math.ceil(totalItems / pageSize);
        /** @type {?} */
        var threshold = 10;
        /** @type {?} */
        var startPage;
        /** @type {?} */
        var endPage;
        if (totalPages <= threshold) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (pageNumber <= 6) {
                startPage = 1;
                endPage = threshold;
            }
            else if (pageNumber + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = pageNumber - 5;
                endPage = pageNumber + 4;
            }
        }
        // calculate start and end item indexes
        /** @type {?} */
        var startIndex = (pageNumber - 1) * pageSize;
        /** @type {?} */
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        /** @type {?} */
        var pages = this.range(startPage, endPage + 1 - startPage);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            pageNumber: pageNumber,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages,
        };
    };
    /**
     * @param {?=} start
     * @param {?=} count
     * @return {?}
     */
    PagingComponent.prototype.range = /**
     * @param {?=} start
     * @param {?=} count
     * @return {?}
     */
    function (start, count) {
        if (start === void 0) { start = 0; }
        if (count === void 0) { count = 0; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(Array(count)).map((/**
         * @param {?} u
         * @param {?} i
         * @return {?}
         */
        function (u, i) { return start + i; }));
    };
    PagingComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'logo-paging',
                    template: "<div class=\"paging-container\">\n  <select (change)=\"setPageSize()\" [(ngModel)]=\"pageSize\">\n    <option [ngValue]=\"5\">5</option>\n    <option [ngValue]=\"10\">10</option>\n    <option [ngValue]=\"15\">15</option>\n    <option [ngValue]=\"20\">20</option>\n    <option [ngValue]=\"30\">30</option>\n    <option [ngValue]=\"40\">40</option>\n    <option [ngValue]=\"50\">50</option>\n  </select>\n  <div class=\"total-count\">\n    <strong class=\"total-count-number\">{{totalCount}}</strong>\n    <span class=\"record-found-text\">{{\"record_found\"}}</span>\n  </div>\n  <div class=\"page-numbers\">\n    <ul *ngIf=\"pager.pages && pager.pages.length >= 2\" class=\"pagination\">\n      <li [ngClass]=\"{disabled:pager.pageNumber === 1}\" class=\"first\">\n        <a (click)=\"setPage(1)\"></a>\n      </li>\n      <li class=\"separator\">|</li>\n      <li [ngClass]=\"{disabled:pager.pageNumber === 1}\" class=\"previous\">\n        <a (click)=\"setPage(pager.pageNumber - 1)\"></a>\n      </li>\n      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.pageNumber === page}\" class=\"pages\">\n        <a (click)=\"setPage(page)\">{{page}}</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.pageNumber === pager.totalPages}\" class=\"next\">\n        <a (click)=\"setPage(pager.pageNumber + 1)\"></a>\n      </li>\n      <li class=\"separator\">|</li>\n      <li [ngClass]=\"{disabled:pager.pageNumber === pager.totalPages}\" class=\"last\">\n        <a (click)=\"setPage(pager.totalPages)\"></a>\n      </li>\n    </ul>\n  </div>\n</div>\n",
                    styles: [":host .paging-container .page-numbers ul.pagination li{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 2px;font-size:11px}:host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:Nunito,sans-serif!important;-webkit-box-shadow:0 -2px 12px 0 rgba(0,0,0,.1);box-shadow:0 -2px 12px 0 rgba(0,0,0,.1);background-color:#fff;z-index:1;position:relative;padding:10px}:host .paging-container{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}:host .paging-container select{height:32px;background-color:rgba(0,0,0,.1);border:none;font-size:12px;border-radius:2px;cursor:pointer;outline:0;color:#4a4a4a;margin-right:30px;-webkit-appearance:none;-moz-appearance:none;background-position:right 50%;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);padding:7px 30px 7px 7px}:host .paging-container select:after{content:\"\";border-left:1px solid red}:host .paging-container .page-numbers,:host .paging-container .total-count{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;font-size:12px;line-height:20px;padding-bottom:0}:host .paging-container .total-count{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host .paging-container .total-count .total-count-number{padding-right:2.5px}:host .paging-container .total-count .record-found-text{padding-left:2.5px}:host .paging-container .page-numbers{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;cursor:pointer}:host .paging-container .page-numbers ul.pagination{text-align:right;list-style:none;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex}:host .paging-container .page-numbers ul.pagination li a{-webkit-transition:.4s linear;transition:.4s linear;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:32px;height:32px;border-radius:2px;background-position:center center;background-repeat:no-repeat}:host .paging-container .page-numbers ul.pagination li a:hover{color:#313131;background-color:rgba(0,0,0,.06)}:host .paging-container .page-numbers ul.pagination li.active{-webkit-transition:.4s linear;transition:.4s linear}:host .paging-container .page-numbers ul.pagination li.active a{background:rgba(0,0,0,.1)}:host .paging-container .page-numbers ul.pagination li.separator{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:none}:host .paging-container .page-numbers ul.pagination li.pages a{font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal}:host .paging-container .page-numbers ul.pagination li.first a{background-image:url(assets/icons/double-chevron-left.svg)}:host .paging-container .page-numbers ul.pagination li.previous a{background-image:url(assets/icons/large-chevron-right.svg)}:host .paging-container .page-numbers ul.pagination li.next a{background-image:url(assets/icons/large-chevron-left.svg)}:host .paging-container .page-numbers ul.pagination li.last a{background-image:url(assets/icons/double-chevron-right.svg)}"]
                }] }
    ];
    PagingComponent.propDecorators = {
        totalCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        pageNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.app-paging',] }],
        pageNumberChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        pageSizeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return PagingComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/paging.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PagingModule = /** @class */ (function () {
    function PagingModule() {
    }
    PagingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [PagingComponent],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
                    exports: [PagingComponent],
                },] }
    ];
    return PagingModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: logo-software-paging.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=logo-software-paging.js.map


/***/ }),

/***/ "./node_modules/@logo-software/table/fesm5/logo-software-table.js":
/*!************************************************************************!*\
  !*** ./node_modules/@logo-software/table/fesm5/logo-software-table.js ***!
  \************************************************************************/
/*! exports provided: CRUD, Events, ExpanderComponent, FormatPipe, LastDirective, OrderPipe, TableAction, TableColumn, TableComponent, TableHead, TableModule, TableSorting, Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUD", function() { return CRUD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanderComponent", function() { return ExpanderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatPipe", function() { return FormatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastDirective", function() { return LastDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPipe", function() { return OrderPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableAction", function() { return TableAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColumn", function() { return TableColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHead", function() { return TableHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSorting", function() { return TableSorting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _logo_software_paging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @logo-software/paging */ "./node_modules/@logo-software/paging/fesm5/logo-software-paging.js");
/* harmony import */ var _logo_software_excel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @logo-software/excel */ "./node_modules/@logo-software/excel/fesm5/logo-software-excel.js");








/**
 * @fileoverview added by tsickle
 * Generated from: lib/expander.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExpanderComponent = /** @class */ (function () {
    function ExpanderComponent() {
    }
    ExpanderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'expander',
                    template: "\n    Expander status: {{expandable}}\n    <ng-container>\n      <ng-content></ng-content>\n    </ng-container>\n  "
                }] }
    ];
    ExpanderComponent.propDecorators = {
        expandable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ExpanderComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/util/util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */
/**
 * Util class for common javascript operations
 */
var  /**
 * Util class for common javascript operations
 */
Util = /** @class */ (function () {
    function Util() {
    }
    /**
     * https://gist.github.com/barlas/760cbf77b31c6922d159
     * This method returns turkish chars to english lowercase version
     * Usage: Util.turkishToLower("türkçeişğİIiıŞÜĞ");
     */
    /**
     * https://gist.github.com/barlas/760cbf77b31c6922d159
     * This method returns turkish chars to english lowercase version
     * Usage: Util.turkishToLower("türkçeişğİIiıŞÜĞ");
     * @param {?} value
     * @return {?}
     */
    Util.turkishToLower = /**
     * https://gist.github.com/barlas/760cbf77b31c6922d159
     * This method returns turkish chars to english lowercase version
     * Usage: Util.turkishToLower("türkçeişğİIiıŞÜĞ");
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var string = value;
        /** @type {?} */
        var letters = { 'İ': 'i', 'I': 'ı', 'Ş': 'ş', 'Ğ': 'ğ', 'Ü': 'ü', 'Ö': 'ö', 'Ç': 'ç' };
        string = string.replace(/(([İIŞĞÜÇÖ]))/g, (/**
         * @param {?} letter
         * @return {?}
         */
        function (letter) {
            return letters[letter];
        }));
        return string.toLowerCase();
    };
    /**
     * https://gist.github.com/barlas/760cbf77b31c6922d159
     * This method returns turkish chars to english uppercase version
     * Usage: Util.turkishToUpper("türkçeişğİIiıŞÜĞ");
     */
    /**
     * https://gist.github.com/barlas/760cbf77b31c6922d159
     * This method returns turkish chars to english uppercase version
     * Usage: Util.turkishToUpper("türkçeişğİIiıŞÜĞ");
     * @param {?} value
     * @return {?}
     */
    Util.turkishToUpper = /**
     * https://gist.github.com/barlas/760cbf77b31c6922d159
     * This method returns turkish chars to english uppercase version
     * Usage: Util.turkishToUpper("türkçeişğİIiıŞÜĞ");
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var string = value;
        /** @type {?} */
        var letters = { 'i': 'İ', 'ş': 'Ş', 'ğ': 'Ğ', 'ü': 'Ü', 'ö': 'Ö', 'ç': 'Ç', 'ı': 'I' };
        string = string.replace(/(([iışğüçö]))/g, (/**
         * @param {?} letter
         * @return {?}
         */
        function (letter) {
            return letters[letter];
        }));
        return string.toUpperCase();
    };
    /**
     * Usage: Util.convertToEnglishLetters('Şey BENİM ADIM ağa'); // output: Sey BENIM ADIM aga
     * @param value: string - Text will be converted to the English characters
     * return string
     */
    /**
     * Usage: Util.convertToEnglishLetters('Şey BENİM ADIM ağa'); // output: Sey BENIM ADIM aga
     * @param {?} value
     * @return {?}
     */
    Util.convertToEnglishLetters = /**
     * Usage: Util.convertToEnglishLetters('Şey BENİM ADIM ağa'); // output: Sey BENIM ADIM aga
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var letters = {
            'ı': 'i',
            'ş': 's',
            'ğ': 'g',
            'ü': 'u',
            'ç': 'c',
            'ö': 'o',
            'İ': 'I',
            'Ş': 'S',
            'Ğ': 'G',
            'Ü': 'U',
            'Ç': 'C',
            'Ö': 'O',
        };
        return value.replace(/(([ışğüçöİŞĞÜÇÖ]))/g, (/**
         * @param {?} letter
         * @return {?}
         */
        function (letter) {
            return letters[letter];
        }));
    };
    /**
     * This method returns Object type
     * @param value - The target data from which will learn the type.
     */
    /**
     * This method returns Object type
     * @param {?} value - The target data from which will learn the type.
     * @return {?}
     */
    Util.type = /**
     * This method returns Object type
     * @param {?} value - The target data from which will learn the type.
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var reg = new RegExp(/^\[object (.*)\]$/);
        return Object.prototype.toString.call(value).match(reg)[1];
    };
    /**
     * Copy any text to clipboard
     * @param text - The text which will be copied
     */
    /**
     * Copy any text to clipboard
     * @param {?} text - The text which will be copied
     * @return {?}
     */
    Util.copyToClipboard = /**
     * Copy any text to clipboard
     * @param {?} text - The text which will be copied
     * @return {?}
     */
    function (text) {
        /** @type {?} */
        var tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = text || ((/** @type {?} */ (event))).target.innerText;
        tempInput.select();
        document.execCommand('copy');
        tempInput.remove();
    };
    /**
     * Removes null and undefined props from object
     * var test  = {a:1,b:2,d:{c:null, d:4}}
     * test.clear(); // returns {a:1,b:2,d:{d:4}}
     *
     * @param  [value] - The object will be cleared
     * @param [hard=false] - this option require if clear all empty things as [], {}, '', null.
     * @param [clone=true] - If clone true default variable not effected
     * @returns any;
     */
    /**
     * Removes null and undefined props from object
     * var test  = {a:1,b:2,d:{c:null, d:4}}
     * test.clear(); // returns {a:1,b:2,d:{d:4}}
     *
     * @param {?} value
     * @param {?=} hard
     * @param {?=} clone
     * @return {?} any;
     */
    Util.clearNullAndUndefined = /**
     * Removes null and undefined props from object
     * var test  = {a:1,b:2,d:{c:null, d:4}}
     * test.clear(); // returns {a:1,b:2,d:{d:4}}
     *
     * @param {?} value
     * @param {?=} hard
     * @param {?=} clone
     * @return {?} any;
     */
    function (value, hard, clone) {
        if (hard === void 0) { hard = false; }
        if (clone === void 0) { clone = false; }
        /** @type {?} */
        var _this = clone ? JSON.parse(JSON.stringify(value)) : value;
        if (_this.constructor === Object && hard.constructor === Boolean) {
            Object.keys(_this).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (_this.hasOwnProperty(key)) {
                    /** @type {?} */
                    var nValue = _this[key];
                    if (nValue !== null && nValue.constructor === Object) {
                        Util.clearNullAndUndefined(nValue, hard);
                    }
                    if (nValue === null ||
                        (hard && nValue.constructor === Object && Util.isObjectNull(nValue)) ||
                        (hard && (nValue.constructor === String || nValue.constructor === Array) && nValue.length === 0)) {
                        delete _this[key];
                    }
                }
            }));
        }
        else if (_this.constructor === Array) {
            if (_this.length > 0) {
                return _this.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return !Util.isObjectNull(Util.clearNullAndUndefined(item, hard)); }));
            }
        }
        return _this;
    };
    /**
     * Creates the number of items requested from the defined starting number.
     * @param start - which number will be started
     * @param count - how many items will be added
     * @returns Array<number>;
     *
     * Usage:
     * Util.range(13, 4); // result: [13, 14, 15, 16]
     */
    /**
     * Creates the number of items requested from the defined starting number.
     * @param {?=} start - which number will be started
     * @param {?=} count - how many items will be added
     * @return {?} Array<number>;
     *
     * Usage:
     * Util.range(13, 4); // result: [13, 14, 15, 16]
     */
    Util.range = /**
     * Creates the number of items requested from the defined starting number.
     * @param {?=} start - which number will be started
     * @param {?=} count - how many items will be added
     * @return {?} Array<number>;
     *
     * Usage:
     * Util.range(13, 4); // result: [13, 14, 15, 16]
     */
    function (start, count) {
        if (start === void 0) { start = 0; }
        if (count === void 0) { count = 0; }
        /** @type {?} */
        var boost = (/**
         * @param {?} u
         * @param {?} i
         * @return {?}
         */
        function (u, i) { return start + i; });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(Array(count)).map(boost);
    };
    /**
     * Creates an array of unique values
     * @param array - The arrays to inspect
     */
    /**
     * Creates an array of unique values
     * @param {...?} array - The arrays to inspect
     * @return {?}
     */
    Util.union = /**
     * Creates an array of unique values
     * @param {...?} array - The arrays to inspect
     * @return {?}
     */
    function () {
        var array = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            array[_i] = arguments[_i];
        }
        /** @type {?} */
        var newFlatArray = ((/** @type {?} */ (Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(array)))).flat(Infinity);
        /** @type {?} */
        var filter = (/**
         * @param {?} item
         * @param {?} pos
         * @return {?}
         */
        function (item, pos) {
            return newFlatArray.indexOf(item) === pos;
        });
        return newFlatArray.filter(filter);
    };
    /**
     * Returns true if `value` is an array, else returns false.
     * @param value - The value to test.
     * @returns Boolean
     */
    /**
     * Returns true if `value` is an array, else returns false.
     * @param {?} value - The value to test.
     * @return {?} Boolean
     */
    Util.isArray = /**
     * Returns true if `value` is an array, else returns false.
     * @param {?} value - The value to test.
     * @return {?} Boolean
     */
    function (value) {
        return Object.prototype.toString.call(value) === '[object Array]';
    };
    /**
     * Returns true if `value` is an object (excluding null), else returns false.
     * @param value - The value to test.
     * @returns Boolean
     */
    /**
     * Returns true if `value` is an object (excluding null), else returns false.
     * @param {?} value - The value to test.
     * @return {?} Boolean
     */
    Util.isObject = /**
     * Returns true if `value` is an object (excluding null), else returns false.
     * @param {?} value - The value to test.
     * @return {?} Boolean
     */
    function (value) {
        return value !== null && Object.prototype.toString.call(value) === '[object Object]';
    };
    /**
     * Object is null check
     * @returns Boolean
     */
    /**
     * Object is null check
     * @param {?} value
     * @return {?} Boolean
     */
    Util.isObjectNull = /**
     * Object is null check
     * @param {?} value
     * @return {?} Boolean
     */
    function (value) {
        return value.constructor === Object && Object.keys(value).length === 0;
    };
    /**
     * Returns true if `value` is neither null nor undefined, else returns false.
     * @param value - The value to test.
     * @returns Boolean
     */
    /**
     * Returns true if `value` is neither null nor undefined, else returns false.
     * @param {?} value - The value to test.
     * @return {?} Boolean
     */
    Util.isNullOrUndef = /**
     * Returns true if `value` is neither null nor undefined, else returns false.
     * @param {?} value - The value to test.
     * @return {?} Boolean
     */
    function (value) {
        return value === null || typeof value === 'undefined';
    };
    /**
     * Returns a deep copy of `source` without keeping references on objects and arrays.
     * @param source - The value to clone.
     * @returns any
     */
    /**
     * Returns a deep copy of `source` without keeping references on objects and arrays.
     * @param {?} source - The value to clone.
     * @return {?} any
     */
    Util.clone = /**
     * Returns a deep copy of `source` without keeping references on objects and arrays.
     * @param {?} source - The value to clone.
     * @return {?} any
     */
    function (source) {
        if (Util.isArray(source)) {
            return source.map(Util.clone);
        }
        if (Util.isObject(source)) {
            /** @type {?} */
            var target = {};
            /** @type {?} */
            var keys = Object.keys(source);
            /** @type {?} */
            var kLength = keys.length;
            /** @type {?} */
            var k = 0;
            for (; k < kLength; ++k) {
                target[keys[k]] = Util.clone(source[keys[k]]);
            }
            return target;
        }
        return source;
    };
    /**
     * Find index of given value inside array
     * Usage:
     * @param array - source array
     * @param value - variable will be find index
     * @returns - Array<number>
     */
    /**
     * Find index of given value inside array
     * Usage:
     * @param {?} array - source array
     * @param {?} value - variable will be find index
     * @return {?} - Array<number>
     */
    Util.findAllIndex = /**
     * Find index of given value inside array
     * Usage:
     * @param {?} array - source array
     * @param {?} value - variable will be find index
     * @return {?} - Array<number>
     */
    function (array, value) {
        /** @type {?} */
        var method = (/**
         * @param {?} a
         * @param {?} e
         * @param {?} i
         * @return {?}
         */
        function (a, e, i) {
            if (e === value) {
                a.push(i);
            }
            return a;
        });
        return array.reduce(method, []);
    };
    /**
     * Returns matched result in the each array object with given filter object
     *
     * @param value: Object[] - The source object which will be searched inside
     * @param filter: Object - Given object will be find
     * @param exact: boolean - Compare for value as exactly same. Otherwise it will compare with Regexp
     * for more information look to the ObjectExtender.contains() method.
     * @returns Object
     */
    /**
     * Returns matched result in the each array object with given filter object
     *
     * @param {?} value
     * @param {?} filter
     * @param {?=} exact
     * @return {?} Object
     */
    Util.findAllObjectInArray = /**
     * Returns matched result in the each array object with given filter object
     *
     * @param {?} value
     * @param {?} filter
     * @param {?=} exact
     * @return {?} Object
     */
    function (value, filter, exact) {
        if (exact === void 0) { exact = false; }
        /** @type {?} */
        var result = [];
        value.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item !== null && typeof item !== 'undefined') {
                if (Util.type(item) === 'Object' && Util.isContained(item, filter, exact)) {
                    result.push(item);
                }
                else if (item.constructor.name === 'Array') {
                    return Util.isContained(item, filter, exact);
                }
            }
        }));
        return result;
    };
    /**
     * Remove character from given string with given count
     * Usage: Util.removeCharsBetween('serkan', 3, 2);
     * @param value - String value will be split
     * @param start - start position, 0 (zero) is first char
     * @param count - how much char will be get
     */
    /**
     * Remove character from given string with given count
     * Usage: Util.removeCharsBetween('serkan', 3, 2);
     * @param {?} value - String value will be split
     * @param {?} start - start position, 0 (zero) is first char
     * @param {?=} count - how much char will be get
     * @return {?}
     */
    Util.removeCharsBetween = /**
     * Remove character from given string with given count
     * Usage: Util.removeCharsBetween('serkan', 3, 2);
     * @param {?} value - String value will be split
     * @param {?} start - start position, 0 (zero) is first char
     * @param {?=} count - how much char will be get
     * @return {?}
     */
    function (value, start, count) {
        if (count === void 0) { count = 1; }
        /** @type {?} */
        var str = value.split('');
        str.splice(start, count);
        return str.join('');
    };
    /**
     * Add char string to specified position
     * @param data: string - Given string data will be replaced
     * @param value - Given string  data will be added
     * @param index - The start position of the inserted a new string
     */
    /**
     * Add char string to specified position
     * @param {?} data
     * @param {?} value - Given string  data will be added
     * @param {?} index - The start position of the inserted a new string
     * @return {?}
     */
    Util.addCharsBetween = /**
     * Add char string to specified position
     * @param {?} data
     * @param {?} value - Given string  data will be added
     * @param {?} index - The start position of the inserted a new string
     * @return {?}
     */
    function (data, value, index) {
        /** @type {?} */
        var str = data.split('');
        str[index] = value;
        return str.join('');
    };
    /**
     * Get value by given path of object
     * @example
     * var m = {a: {b:1, c: {d: {e: [1,2,3]}}}}
     * Util.getObjectPathValue(m, "a.c.d.e") // result is (3) [1, 2, 3]
     * @param value - The object from which to import data
     * @param path - String path of the target property
     */
    /**
     * Get value by given path of object
     * \@example
     * var m = {a: {b:1, c: {d: {e: [1,2,3]}}}}
     * Util.getObjectPathValue(m, "a.c.d.e") // result is (3) [1, 2, 3]
     * @param {?} value - The object from which to import data
     * @param {?} path - String path of the target property
     * @return {?}
     */
    Util.getObjectPathValue = /**
     * Get value by given path of object
     * \@example
     * var m = {a: {b:1, c: {d: {e: [1,2,3]}}}}
     * Util.getObjectPathValue(m, "a.c.d.e") // result is (3) [1, 2, 3]
     * @param {?} value - The object from which to import data
     * @param {?} path - String path of the target property
     * @return {?}
     */
    function (value, path) {
        /** @type {?} */
        var data = value;
        if (!!path && path.constructor === String) {
            path.split('.').forEach((/**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                data = (data !== null && typeof data !== 'undefined') ? data[val] : null;
            }));
        }
        return data;
    };
    /**
     * @param {?} obj
     * @param {?} path
     * @param {?} value
     * @return {?}
     */
    Util.setObjectPathValue = /**
     * @param {?} obj
     * @param {?} path
     * @param {?} value
     * @return {?}
     */
    function (obj, path, value) {
        /** @type {?} */
        var schema = obj;
        // a moving reference to internal objects within obj
        /** @type {?} */
        var pList = path.split('.');
        /** @type {?} */
        var len = pList.length;
        for (var i = 0; i < len - 1; i++) {
            /** @type {?} */
            var elem = pList[i];
            if (!schema[elem]) {
                schema[elem] = {};
            }
            schema = schema[elem];
        }
        schema[pList[len - 1]] = value;
        return schema;
    };
    /**
     * Convert dot separated string to object then assign the value to latest key
     * @param prop: string - Object property paths
     * @param value: any - The value will assign the path.
     * @returns Object;
     *
     * @Usage
     * Util.makeObject("a.b.c", 'some value');  will return {a: {b: {c: 'some value'}}};
     */
    /**
     * Convert dot separated string to object then assign the value to latest key
     * \@Usage
     * Util.makeObject("a.b.c", 'some value');  will return {a: {b: {c: 'some value'}}};
     * @param {?} prop
     * @param {?} value
     * @return {?} Object;
     *
     */
    Util.makeObject = /**
     * Convert dot separated string to object then assign the value to latest key
     * \@Usage
     * Util.makeObject("a.b.c", 'some value');  will return {a: {b: {c: 'some value'}}};
     * @param {?} prop
     * @param {?} value
     * @return {?} Object;
     *
     */
    function (prop, value) {
        /** @type {?} */
        var props = prop.split('.');
        /** @type {?} */
        var temp = {};
        props.reverse().forEach((/**
         * @param {?} key
         * @param {?} index
         * @return {?}
         */
        function (key, index) {
            if (index === 0) {
                temp[key] = !Util.isNullOrUndef(value) ? value : null;
            }
            else {
                /** @type {?} */
                var hold = temp;
                temp = {};
                temp[key] = hold;
            }
        }));
        return temp;
    };
    /**
     * Extract pre-defined keys from objects list, with ordering options
     * @param data - Object source
     * @param keys - Which properties will be exported
     * @returns Object - Exports given array keys as an object with values. // result: {s: [144, 10, 21], c:[3, 30, 23]}
     *
     * Usage:
     * let data, keys;
     * data = [{ s: 144, b: 2, c: 3 }, { s: 10, b: 20, c: 30 }, { s: 21, b: 22, c: 23 }];
     * keys = [ "s", "c"];
     *
     * const {s,c} = Util.objectKeysValues(data,keys);
     * console.log(s); // [144, 10, 21]
     */
    /**
     * Extract pre-defined keys from objects list, with ordering options
     * @param {?} data - Object source
     * @param {?} keys - Which properties will be exported
     * @return {?} Object - Exports given array keys as an object with values. // result: {s: [144, 10, 21], c:[3, 30, 23]}
     *
     * Usage:
     * let data, keys;
     * data = [{ s: 144, b: 2, c: 3 }, { s: 10, b: 20, c: 30 }, { s: 21, b: 22, c: 23 }];
     * keys = [ "s", "c"];
     *
     * const {s,c} = Util.objectKeysValues(data,keys);
     * console.log(s); // [144, 10, 21]
     */
    Util.getObjectKeysValues = /**
     * Extract pre-defined keys from objects list, with ordering options
     * @param {?} data - Object source
     * @param {?} keys - Which properties will be exported
     * @return {?} Object - Exports given array keys as an object with values. // result: {s: [144, 10, 21], c:[3, 30, 23]}
     *
     * Usage:
     * let data, keys;
     * data = [{ s: 144, b: 2, c: 3 }, { s: 10, b: 20, c: 30 }, { s: 21, b: 22, c: 23 }];
     * keys = [ "s", "c"];
     *
     * const {s,c} = Util.objectKeysValues(data,keys);
     * console.log(s); // [144, 10, 21]
     */
    function (data, keys) {
        /** @type {?} */
        var result = {};
        keys.map((/**
         * @param {?} prop
         * @param {?} propKey
         * @return {?}
         */
        function (prop, propKey) {
            result[prop] = (data.map((/**
             * @param {?} item
             * @param {?} itemKey
             * @return {?}
             */
            function (item, itemKey) {
                return item[prop];
            })));
        }));
        return result;
    };
    /**
     * This method extract object all properties path as a string with value
     * @param object: any - The object will be extracted
     *
     * Usage:
     * const obj = {c: {t: {b: 123, m: 43, d: 48, e: {z: 2}}}, a: 13, b: 34};
     * Util.extractObjectAllValues(obj); // returns {"c.t.b":123,"c.t.m":43,"c.t.d":48,"c.t.e.z":2,"a":13,"b":34}
     */
    /**
     * This method extract object all properties path as a string with value
     * @param {?} object
     * @param {?=} path
     * @param {?=} result
     * @param {?=} parent
     * @return {?}
     */
    Util.extractObjectAllValues = /**
     * This method extract object all properties path as a string with value
     * @param {?} object
     * @param {?=} path
     * @param {?=} result
     * @param {?=} parent
     * @return {?}
     */
    function (object, path, result, parent) {
        if (path === void 0) { path = []; }
        if (result === void 0) { result = {}; }
        if (!path) {
            path = [];
        }
        Object.keys(object).forEach((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) {
            if ((object[item]).constructor === Object) {
                path.push(item);
                Util.extractObjectAllValues(object[item], path, result, true);
            }
            else {
                path.push(item);
                /** @type {?} */
                var value = object[item];
                if (!parent) {
                    path = [item];
                }
                result[path.join('.')] = value;
                path.pop();
            }
        }));
        return result;
    };
    /**
     * Compare two multidimensional objects, check one of them is contains other.
     * @example
     * var one = {a:1, b:2, c: {d:1, e:2}};
     * var two = {b: 2, c: {d:1}}
     * one.isContained(two); // return false -> it includes two
     * @param value - The target object
     * @param filter - The object which will be looking for
     * @param exact - I can't remember why I add this feature
     * @param debug - If it is true, will generate output for debugging to the console
     */
    /**
     * Compare two multidimensional objects, check one of them is contains other.
     * \@example
     * var one = {a:1, b:2, c: {d:1, e:2}};
     * var two = {b: 2, c: {d:1}}
     * one.isContained(two); // return false -> it includes two
     * @param {?} value - The target object
     * @param {?} filter - The object which will be looking for
     * @param {?=} exact - I can't remember why I add this feature
     * @param {?=} debug - If it is true, will generate output for debugging to the console
     * @return {?}
     */
    Util.isContained = /**
     * Compare two multidimensional objects, check one of them is contains other.
     * \@example
     * var one = {a:1, b:2, c: {d:1, e:2}};
     * var two = {b: 2, c: {d:1}}
     * one.isContained(two); // return false -> it includes two
     * @param {?} value - The target object
     * @param {?} filter - The object which will be looking for
     * @param {?=} exact - I can't remember why I add this feature
     * @param {?=} debug - If it is true, will generate output for debugging to the console
     * @return {?}
     */
    function (value, filter, exact, debug) {
        if (exact === void 0) { exact = true; }
        if (debug === void 0) { debug = false; }
        /** @type {?} */
        var method = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var nValue = value[key];
            /** @type {?} */
            var nFilter = filter[key];
            if (nFilter !== null && typeof nFilter !== 'undefined' && Util.type(nFilter) !== 'Object' &&
                nValue !== null && typeof nValue !== 'undefined' && Util.type(nValue) !== 'Object') {
                if (Util.type(nFilter) === 'Array') {
                    return !Util.isContained(nFilter, exact);
                }
                else if (exact) {
                    return !(nValue === nFilter);
                }
                else {
                    nFilter = nFilter.constructor.name === 'String' ? Util.turkishToLower(nFilter) : nFilter;
                    nValue = nValue.constructor.name === 'String' ? Util.turkishToLower(nValue) : nValue;
                    if (!new RegExp(nFilter, 'gi').test(nValue) && debug) {
                        // tslint:disable-next-line:no-console
                        console.log('false: ', nValue, nFilter);
                    }
                    return !new RegExp(nFilter, 'gi').test(nValue);
                }
            }
            else {
                if (nValue !== null && typeof nValue !== 'undefined' && Util.type(nValue) === 'Object' &&
                    nFilter !== null && typeof nFilter !== 'undefined' && Util.type(nFilter) === 'Object') {
                    return !Util.isContained(nValue, nFilter, exact);
                }
                else {
                    if (nValue !== nFilter && debug) {
                        // tslint:disable-next-line:no-console
                        console.log('false: ', key, nValue, nFilter);
                    }
                    return !(nValue === nFilter);
                }
            }
        });
        return !Object.keys(filter).some(method);
    };
    /**
     * Check given date is valid
     * @param value - any value
     */
    /**
     * Check given date is valid
     * @param {?} value - any value
     * @return {?}
     */
    Util.isDateValid = /**
     * Check given date is valid
     * @param {?} value - any value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var date = new Date(value);
        return date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);
    };
    /**
     * @return {?}
     */
    Util.version = /**
     * @return {?}
     */
    function () {
        // tslint:disable-next-line:no-console
        console.log('v2');
    };
    return Util;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/util/order.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Example use
 * Basic Array of single type: *ngFor="let todo of todoService.todos | orderBy : '-'"
 * Multidimensional sort on single column: *ngFor="let todo of todoService.todos | orderBy : ['-status']"
 * Multidimensional sort on multiple columns: ngFor="let todo of todoService.todos | orderBy : ['status', '-title']"
 */
var OrderPipe = /** @class */ (function () {
    function OrderPipe() {
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    OrderPipe.comparator = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        a = !!a ? a : 0;
        b = !!b ? b : 0;
        /** @type {?} */
        var parsedA = parseFloat(a);
        /** @type {?} */
        var parsedB = parseFloat(b);
        if ((isNaN(parsedA) || !isFinite(a)) || (isNaN(parsedB) || !isFinite(b))) {
            /** @type {?} */
            var lowerA = Util.convertToEnglishLetters(a);
            // a.toLowerCase();
            /** @type {?} */
            var lowerB = Util.convertToEnglishLetters(b);
            if (lowerA < lowerB) { // Isn't a number so lowercase the string to properly compare
                return -1;
            }
            if (lowerA > lowerB) {
                return 1;
            }
        }
        else {
            if (parsedA < parsedB) { // Parse strings as numbers to compare properly
                return -1;
            }
            if (parsedA > parsedB) {
                return 1;
            }
        }
        return 0; // equal each other
    };
    /**
     * @param {?} list
     * @return {?}
     */
    OrderPipe.prototype.getElement = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        /** @type {?} */
        var temp = [];
        this.fields.forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            temp = temp[key] || list[key];
        }));
        return temp;
    };
    /**
     * @param {?} input
     * @param {?} sorting
     * @return {?}
     */
    OrderPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} sorting
     * @return {?}
     */
    function (input, sorting) {
        var _this = this;
        if (!sorting || !sorting.column || !sorting.status) {
            return input;
        }
        /** @type {?} */
        var value = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(input);
        this.fields = sorting.column.split('.');
        value.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            /** @type {?} */
            var first = _this.getElement(a);
            /** @type {?} */
            var second = _this.getElement(b);
            return OrderPipe.comparator(first, second);
        }));
        return (sorting.descending) ? value.reverse() : value;
    };
    OrderPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'orderBy', pure: false },] }
    ];
    return OrderPipe;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/util/last.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Emits method when ngFor loop is access to last item
 *
 * __Usage Example:__
 *
 * ```html
 * <ul>
 *   <li *ngFor="let item of data; let last=last;" [isLast]="last" (isLastEmitter)="isLastEmitter(item)">
 *     {{item.zone.name}}
 *   </li>
 * </ul>
 * ```
 *
 * __Component:__
 *
 * ```typescript
 * \@Component({
 *  selector: 'lbs-root',
 *  templateUrl: './app.component.html',
 *  styleUrls: ['./app.component.scss']
 * })
 * export class AppComponent {
 *   public data = ['İstanbul', 'Ankara', 'Çorum', 'Adana', 'Kırıkkale', 'Çankırı', 'Yozgat'];
 *
 *   isLastEmitter(item: any) {
 *    console.log(item);
 *  }
 * }
 * ```
 */
var LastDirective = /** @class */ (function () {
    function LastDirective() {
        this.isLastEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    LastDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isLast) {
            this.isLastEmitter.emit(true);
        }
    };
    LastDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[isLast]' },] }
    ];
    LastDirective.propDecorators = {
        isLast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isLastEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return LastDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/util/format.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @version 1.0.1
 * @desc This pipe used to format strings to given pattern
 * \@example: {{"2018-01-24T15:34:16+03:00" | format: 'date: dd.MM.yyyy HH:mm'}}
 * \@example: {{"34" | format: 'percentage'}}
 */
var FormatPipe = /** @class */ (function () {
    function FormatPipe() {
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US');
        this.decimalPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]('en-US');
        this.currencyPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]('en-US');
    }
    /**
     * @param {?} input
     * @param {?} args
     * @return {?}
     */
    FormatPipe.prototype.transform = /**
     * @param {?} input
     * @param {?} args
     * @return {?}
     */
    function (input, args) {
        /** @type {?} */
        var pipeArgs = args.split(':');
        /** @type {?} */
        var format = '';
        /** @type {?} */
        var parsedFloat = 0;
        for (var i = 0; i < pipeArgs.length; i++) {
            pipeArgs[i] = pipeArgs[i].trim(' ');
        }
        switch (pipeArgs[0].toLowerCase()) {
            case 'text':
                return input;
            case 'decimal':
                format = pipeArgs.length > 1 ? pipeArgs[1] : null;
                return this.decimalPipe.transform(input, format);
            case 'currency':
                format = pipeArgs.length > 1 ? pipeArgs[1] : null;
                return this.currencyPipe.transform(input, format);
            case 'number':
                parsedFloat = !isNaN(parseFloat(input)) ? parseFloat(input) : 0;
                format = pipeArgs.length > 1 ? pipeArgs[1] : null;
                return this.decimalPipe.transform(parsedFloat, format);
            case 'percent':
                parsedFloat = !isNaN(parseFloat(input)) ? parseFloat(input) : 0;
                format = pipeArgs.length > 1 ? pipeArgs[1] : null;
                return this.decimalPipe.transform(parsedFloat, format) + '%';
            case 'date':
                format = pipeArgs[2] ? pipeArgs[1] + ':' + pipeArgs[2] : pipeArgs[1] ? pipeArgs[1] : 'dd.MM.yyyy HH:mm';
                return (!!input) ? this.datePipe.transform(new Date(input), format) : null;
            case 'datetime':
                /** @type {?} */
                var date = !isNaN(parseInt(input, 10)) ? parseInt(input, 10) : new Date(input);
                format = 'MMM d, y h:mm:ss a';
                if (pipeArgs.length > 1) {
                    format = '';
                    for (var i = 1; i < pipeArgs.length; i++) {
                        format += pipeArgs[i];
                    }
                }
                return this.datePipe.transform(date, format);
            default:
                return input;
        }
    };
    FormatPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'format',
                },] }
    ];
    return FormatPipe;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types/event.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */
var Events = /** @class */ (function () {
    function Events(events) {
        this.drag = {
            start: (/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response; }),
            complete: (/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response; }),
        };
        if (events) {
            Object.assign(this, events);
        }
    }
    return Events;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types/table.column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * TableColumn class used for define table header properties
 *
 * __Usage Example__
 *
 * ```typescript
 * [
 * {display: 'ID', variablePath: 'id', filterType: 'text', hidden: false, editable: true},
 * {
 *   display: 'Secure ID',
 *   variablePath: (row: any) => 'id',
 *   filterType: 'text',
 *   sortable: true,
 *   sortingKey: 'id',
 *   editable: false,
 *  },
 * {
 *   display: 'path sample',
 *   variablePath: (row: any) => row.percentage > 9 ? 'percentage' : 'because',
 *   filterType: 'text',
 *   sortable: true,
 *   sortingKey: 'because',
 *   expand: true,
 *  },
 * {display: 'zone.name', variablePath: 'zone.name', filterType: 'text', sortable: true},
 * {
 *   display: 'percentage number',
 *   variablePath: 'percentage',
 *   filterType: 'currency',
 *   format: '',
 *   sortable: true,
 *  },
 * {
 *   display: 'percentage %',
 *   variablePath: 'percentage',
 *   filterType: 'percent',
 *   format: '1.1-3:"it"',
 *   sortable: true,
 *  },
 * {display: 'date', variablePath: 'hour', filterType: 'date', format: 'yyyy.MM.dd HH:mm', sortable: true},
 * {display: 'surname', variablePath: 'surname', filterType: 'custom'},
 * {display: 'because', variablePath: 'because', filterType: 'number', format: '4.2-3', sortable: true},
 * {
 *   display: 'Func Samp 1',
 *   variableFunction: (row: any) => row?.percentage >= 34 ? row?.zone?.name + ' <b>text</b>' : row?.id,
 *   className: 'total',
 *   classFunction: (row) => (row?.percentage >= 20 ? 'bigger' : 'smaller'),
 *   sortable: true,
 *   sortingKey: 'zone.name',
 *  },
 * {
 *   display: 'Func Samp 2',
 *   variableFunction: (row: any) => row?.percentage > 9 ? row?.percentage + ' <i>added</i>' : row?.because ? row.because : 'yok ' + '<b>not</b>',
 *   className: 'total',
 *   sortable: true,
 *   sortingKey: 'zone.name',
 *  },
 * ]
 * * ```
 */
var  /**
 * TableColumn class used for define table header properties
 *
 * __Usage Example__
 *
 * ```typescript
 * [
 * {display: 'ID', variablePath: 'id', filterType: 'text', hidden: false, editable: true},
 * {
 *   display: 'Secure ID',
 *   variablePath: (row: any) => 'id',
 *   filterType: 'text',
 *   sortable: true,
 *   sortingKey: 'id',
 *   editable: false,
 *  },
 * {
 *   display: 'path sample',
 *   variablePath: (row: any) => row.percentage > 9 ? 'percentage' : 'because',
 *   filterType: 'text',
 *   sortable: true,
 *   sortingKey: 'because',
 *   expand: true,
 *  },
 * {display: 'zone.name', variablePath: 'zone.name', filterType: 'text', sortable: true},
 * {
 *   display: 'percentage number',
 *   variablePath: 'percentage',
 *   filterType: 'currency',
 *   format: '',
 *   sortable: true,
 *  },
 * {
 *   display: 'percentage %',
 *   variablePath: 'percentage',
 *   filterType: 'percent',
 *   format: '1.1-3:"it"',
 *   sortable: true,
 *  },
 * {display: 'date', variablePath: 'hour', filterType: 'date', format: 'yyyy.MM.dd HH:mm', sortable: true},
 * {display: 'surname', variablePath: 'surname', filterType: 'custom'},
 * {display: 'because', variablePath: 'because', filterType: 'number', format: '4.2-3', sortable: true},
 * {
 *   display: 'Func Samp 1',
 *   variableFunction: (row: any) => row?.percentage >= 34 ? row?.zone?.name + ' <b>text</b>' : row?.id,
 *   className: 'total',
 *   classFunction: (row) => (row?.percentage >= 20 ? 'bigger' : 'smaller'),
 *   sortable: true,
 *   sortingKey: 'zone.name',
 *  },
 * {
 *   display: 'Func Samp 2',
 *   variableFunction: (row: any) => row?.percentage > 9 ? row?.percentage + ' <i>added</i>' : row?.because ? row.because : 'yok ' + '<b>not</b>',
 *   className: 'total',
 *   sortable: true,
 *   sortingKey: 'zone.name',
 *  },
 * ]
 * * ```
 */
TableColumn = /** @class */ (function () {
    function TableColumn() {
        /**
         * Visible text of the table column th of thead
         */
        this.display = '';
        /**
         * Format of the Pipe types for filtering. FilterType will be HTMLInput element type `<input type="filterType"` />
         * So which type want to use while filtering set the it can be set from here. Filter types are:
         * {'text' | 'range ' | 'decimal' | 'number' | 'datetime' | 'date' | 'time' | null | string}
         */
        this.filterType = 'text';
        /**
         * Angular formats, for example: `format: '1.1-3:"en-EN"'`
         */
        this.format = null;
        /**
         * if it is true filter of the thead will be disabled
         */
        this.filterDisable = false;
        /**
         * Hides the column
         */
        this.hidden = false;
        /**
         * If true column will be sortable, default value is false
         */
        this.sortable = false;
        /**
         * When set true the table cell will be expandable and there will be expand button, default value is false
         */
        this.expand = false;
        /**
         * When it is true cell will be editable, default is true
         */
        this.editable = true;
    }
    return TableColumn;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var CRUD = {
    CREATE: "CREATE",
    READ: "READ",
    UPDATE: "UPDATE",
    DELETE: "DELETE",
};
/**
 * Creates data grid table with many features
 *
 * \@stacked-example(Table Showcase, logo/table-sample/table-showcase/table-showcase.component)
 */
var TableComponent = /** @class */ (function () {
    function TableComponent(elementRef, api, changeDetectorRef, ngZone) {
        this.elementRef = elementRef;
        this.api = api;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.expanderStatus = [];
        /**
         * Make table editable when set true
         */
        this.editable = false;
        /**
         * Add new record will be visible when set true
         */
        this.create = false;
        /**
         * It will show reference table add and remove data buttons when set true and reference table set
         */
        this.refButtonStatus = true;
        /**
         * It defines the HTTP response data resource root path.
         * If the HTTP response data source path different then the response.data, `mapPath` set to the root resource path.
         * When the return response like the below example, wants to the show `id` and `name` properties on the table,
         * you must set the resource path to 'table.data.path'.
         *
         * ```JSON
         * {
         *  table:
         *    {data:
         *      {path:
         *        [{id: 4, name: 'Serkan'}, {id: 5: name: 'Sarp'}]
         *      }
         *    }
         * }
         * ```
         */
        this.mapPath = null;
        /**
         * Automatic load table automatically, default is true
         */
        this.automatic = true;
        /**
         * Activate multiple row selection, default is false
         */
        this.multiSelect = false;
        /**
         * It set externally added table th columns. Reference [TableHead](/#/docs/logo-business-solutions/table-module#tablehead)
         */
        this.heads = [];
        this.refresh = false;
        this.delete = true;
        this.hasPaging = true;
        this.hasFilter = true;
        this.index = false;
        this.indexStart = 0;
        this.sort = false; // table sorting feature parameter.
        // table sorting feature parameter.
        this.height = null;
        this.service = { url: null, method: 'GET' };
        this.excel = { status: true };
        this.draggable = false;
        this.events = new Events();
        this.paas = false;
        /**
         * This field define oDATA request identifier
         */
        this.oDataIdentityField = null;
        /**
         * oDataStatus
         */
        this.oDataStatus = false;
        /**
         * Parent table row
         */
        this.parentRow = null;
        /**
         * Parent table row Index
         */
        this.parentIndex = null;
        /**
         * This method accepts parameters and return values for create HttpParams values. Using this data will be generated HttpParams.
         * ?paging={"pageNumber":1,"pageSize":5}&filter=[{"path":"zone.name","value":"çorum","filterType":"text"}]&sorting={"zone":{"name":"DESC"}}
         * Parameters includes three type data.
         *  - Filters
         *  - Paging
         *  - Sorting
         *  For example:
         *  parameters = {
         *    'paging': {'pageNumber': 1, 'pageSize': 5},
         *    'filter': [{'path': 'zone.name', 'value': 'Çorum', 'filterType': 'text'}],
         *    'sorting': {'zone': {'name': 'ASC'}},
         *  };
         *
         *  If anybody wants to change or reformat this code, it is possible to do using this method.
         * @param parameters
         */
        this.onHttpParams = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * It changes HttpHeaders for HttpRequest
         */
        this.onHttpHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * It will necessary if data wants to change by client before the set table rows. Triggered when http request was completed.
         * This event triggered only if server-side set to true.
         */
        this.onHttpResponseModifier = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Triggered when http response with error.
         */
        this.onHttpError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTrClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTrDblClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * When last row displayed as an html this event will be fired
         * This method will send rows and last row to the defined function
         * Example:
         * <lbs- table (completed)= onCompleted({rows: this.rows, row}) ...>
         */
        this.onRenderCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Triggered when the data load completed. If server-side set true: Loaded triggered on http succeeded.
         * If server-side false it was triggered when rows imported on client-side.
         * <lbs-table (loaded)=onLoaded({rows: this.original, shows: this.showing});
         */
        this.onHttpSucceed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Triggered while content mode on and input value changed
         */
        this.onUpdateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Triggered when input element focus has been lost
         */
        this.onUpdateBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Triggered when input element focused
         */
        this.onUpdateFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Triggered when input change accept button clicked
         */
        this.onUpdateAccepted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Triggered when cancel button clicked
         */
        this.onUpdateCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Triggered when new record accept button clicked. This will send to client UpdatingDataType.
         * It also contain clear method for if prefer to clear row's data after
         */
        this.onCreateAccepted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Triggered when clicked delete table action button. It send to selected row as a parameter.
         */
        this.onDeleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * When row delete HttpRequest was succeed, this method emitted.
         */
        this.onDeleteHttpSucceed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * When row delete HttpRequest was error, this method emitted.
         */
        this.onDeleteHttpError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * When row information update HttpRequest succeed, this method triggered.
         */
        this.onUpdateHttpSucceed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * When row update HttpRequest was error, this method emitted.
         */
        this.onUpdateHttpError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * When new row information send then HttpRequest succeed, this method triggered.
         */
        this.onCreateHttpSucceed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * When new row information send then HttpRequest was error, this method emitted.
         */
        this.onCreateHttpError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Newly added records on table
         */
        this.creating = {};
        /**
         * Showing records on table
         */
        this.showing = null;
        /**
         * Original records
         */
        this.original = null;
        /**
         * Initial paging values
         */
        this.paging = {
            pageSize: this.pageSize || 10,
            pageNumber: this.pageNumber || 1,
            totalCount: 0,
            totalPages: 0,
        };
        /**
         * Selected records
         */
        this.list = [];
        /**
         * Initial sorting values
         */
        this.sorting = {
            column: null,
            descending: false,
            status: this.sort,
        };
        /**
         * Filter variable
         */
        this.filter = [];
        this.interval = { status: false, time: 1000 };
        this.drag = { start: false, list: [] };
        this._this = this;
        this.variablePathFilter = [];
        this.variableFunctionFilter = [];
        this.filterDelay = null;
        this.clickDelay = null;
        this.createClearTimeout = null;
        this.orderPipe = new OrderPipe();
        this._rows = [];
        /**
         * Start page index if set 2 and pageSize set to 10, table will show between 10-19 records
         */
        this._pageNumber = 1;
        /**
         * The number of records to be displayed per page
         */
        this._pageSize = 10;
        /**
         * to set true, table will get data from REST service.
         */
        this._serverSide = false; // table sorting side parameter
        /**
         * Table actions define table interaction from outside
         */
        this._actions = [];
        this._columns = [];
        this._selected = null;
    }
    Object.defineProperty(TableComponent.prototype, "rows", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rows;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._rows = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "pageNumber", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageNumber;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pageNumber = value;
            this.paging.pageNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "pageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._pageSize = value;
            this.paging.pageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "serverSide", {
        get: 
        // table sorting side parameter
        /**
         * @return {?}
         */
        function () {
            return this._serverSide;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._serverSide = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "actions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._actions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._actions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "columns", {
        get: /**
         * @return {?}
         */
        function () {
            return this._columns;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var options = new TableColumn();
            this._columns = value.map((/**
             * @param {?} column
             * @return {?}
             */
            function (column) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, options), column)); }));
            this.excel.columns = (/** @type {?} */ (value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.list.push(value);
            this._selected = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * When clicked outside of the table this will be triggered for clear cell focus
     */
    /**
     * When clicked outside of the table this will be triggered for clear cell focus
     * @return {?}
     */
    TableComponent.prototype.clickInside = /**
     * When clicked outside of the table this will be triggered for clear cell focus
     * @return {?}
     */
    function () {
        /** @type {?} */
        var status = event && this.elementRef.nativeElement.contains(((/** @type {?} */ (event.target))).closest('table'));
        if (!status) {
            this.elementRef.nativeElement
                .querySelectorAll('.edit-focus')
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.classList.remove('edit-focus');
            }));
        }
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // Object.keys(changes).forEach(item => this[item] = changes[item].currentValue);
        if (changes['rows']) {
            this.original = changes['rows'].currentValue;
            this.load();
            console.log('#### original data was changed');
        }
        // this.init();
    };
    /**
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    TableComponent.prototype.trackByMethod = /**
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    function (index, row) {
        return index;
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        // TODO this.loadingService.status(true, 'table init');
        this.sorting.status = this.sort;
        this.service.method = this.service.method || 'GET';
        this._columns = this._columns.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.filterType = item.filterType ? item.filterType : 'text';
            item.format = item.format ? item.format : '';
            return item;
        }));
        if (this.automatic && !this.reference) {
            this.load();
        }
        if (this.interval.status) {
            this.reloadInTime();
        }
        this.setExcelOptions();
    };
    /**
     * Table refresher or load all data again
     */
    /**
     * Table refresher or load all data again
     * @return {?}
     */
    TableComponent.prototype.load = /**
     * Table refresher or load all data again
     * @return {?}
     */
    function () {
        (this.serverSide && !!this.service.url) ? this.serverSideLoading() : this.clientSideLoading();
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.interval.status) {
            this.reloadCancel();
        }
        this.reset();
        this.onRenderCompleted.unsubscribe();
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.setExcelOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = {
            status: !!this.excel.status,
            columns: (/** @type {?} */ (this._columns)),
            name: !!this.excel.name ? this.excel.name : 'excel',
            data: this.rows,
            service: {
                url: this.service.url,
                method: this.service.method,
                body: {
                    data: this.filter,
                },
            },
            complete: this.excel.complete,
            type: this.excel.type || 'xls',
        };
        this.excel = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, this.excel), options);
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.reloadInTime = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        this.timeout = window.setInterval((/**
         * @return {?}
         */
        function () {
            _this_1.load();
        }), this.interval.time);
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.reloadCancel = /**
     * @return {?}
     */
    function () {
        clearInterval(this.timeout);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    TableComponent.prototype.htmlSetActionButtonClass = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        /** @type {?} */
        var classes = [];
        if (action.className) {
            classes.push(action.className);
        }
        if (!!action.classFunction) {
            /** @type {?} */
            var className = action.classFunction(this._this);
            if (className) {
                classes.push(className);
            }
        }
        return classes;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TableComponent.prototype.htmlSetTdColspan = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.columns.length + this.heads.length + (index ? 1 : 0);
    };
    /**
     * @param {?} column
     * @return {?}
     */
    TableComponent.prototype.htmlSetTheadClass = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        /** @type {?} */
        var classes = [];
        if (column.className) {
            classes.push(column.className);
        }
        if (this.sort) {
            if (column.variablePath === this.sorting.column || column.sortingKey === this.sorting.column) {
                classes.push("sort-" + (this.sorting.descending ? 'desc' : 'asc'));
            }
            else if (column.sortable) {
                classes.push("sort");
            }
        }
        return classes.join(' ');
    };
    /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    TableComponent.prototype.htmlSetTdClass = /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    function (row, column) {
        /** @type {?} */
        var classes = [];
        if (column.className) {
            classes.push(column.className);
        }
        if (!!column.classFunction) {
            /** @type {?} */
            var className = column.classFunction(row);
            if (className) {
                classes.push(className);
            }
        }
        if (this.editable && column.editable && !this.isFunction(column.variablePath || column.variableFunction)) {
            classes.push('editable');
        }
        return classes;
    };
    /**
     * @param {?} column
     * @return {?}
     */
    TableComponent.prototype.htmlChangeSortingByColumn = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (column.sortable) {
            /** @type {?} */
            var sort = this.sorting;
            if (sort.column === column.variablePath || sort.column === column.sortingKey) {
                sort.descending = !sort.descending;
            }
            else {
                sort.column = column.sortingKey ? column.sortingKey : column.variablePath;
                sort.descending = true;
            }
            this.load();
        }
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.htmlOrderBy = /**
     * @return {?}
     */
    function () {
        return (!this.serverSide && this.sort) ? this.sorting : false;
    };
    /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    TableComponent.prototype.getColumnPath = /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    function (row, column) {
        return (typeof (column.variablePath) === 'function') ? column.variablePath(row) : column.variablePath;
    };
    /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    TableComponent.prototype.htmlGetRowPathValue = /**
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    function (row, column) {
        return (column.variablePath) ? Util.getObjectPathValue(row, this.getColumnPath(row, column)) : (!!column.variableFunction) ? column.variableFunction(row) : null;
    };
    /**
     * @param {?} value
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    TableComponent.prototype.htmlSetRowPath = /**
     * @param {?} value
     * @param {?} row
     * @param {?} column
     * @return {?}
     */
    function (value, row, column) {
        Util.setObjectPathValue(row, this.getColumnPath(row, column), value);
    };
    /**
     * @param {?} column
     * @param {?} inputElement
     * @return {?}
     */
    TableComponent.prototype.htmlFilterAdd = /**
     * @param {?} column
     * @param {?} inputElement
     * @return {?}
     */
    function (column, inputElement) {
        var _this_1 = this;
        window.clearTimeout(this.filterDelay);
        // column = Util.type(column.variableFunction) === 'Function' ? column.variableFunction(this.rows[0]) : column;
        this.filterGenerate(column, inputElement.value);
        this.filterDelay = window.setTimeout((/**
         * @return {?}
         */
        function () {
            _this_1.pageNumber = 1;
            _this_1.load();
        }), 800);
    };
    /**
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    TableComponent.prototype.filterGenerate = /**
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    function (column, value) {
        /** @type {?} */
        var search = { path: column.variableFunction || column.variablePath, value: value, filterType: column.filterType };
        if (this.isFunction(column.variablePath)) {
            /** @type {?} */
            var index = this.variablePathFilter.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.path === search.path; }));
            index >= 0 ? search.value.length <= 0 ? this.variablePathFilter.splice(index, 1) : Object.assign(this.variablePathFilter[index], search) : this.variablePathFilter.push(search);
        }
        else if (this.isFunction(column.variableFunction)) {
            /** @type {?} */
            var index = this.variableFunctionFilter.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.path === search.path; }));
            index >= 0 ? search.value.length <= 0 ? this.variableFunctionFilter.splice(index, 1) : Object.assign(this.variableFunctionFilter[index], search) : this.variableFunctionFilter.push(search);
        }
        else {
            /** @type {?} */
            var index = this.filter.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.path === search.path; }));
            index >= 0 ? search.value.length <= 0 ? this.filter.splice(index, 1) : Object.assign(this.filter[index], search) : this.filter.push(search);
        }
    };
    /**
     * @param {?} filter
     * @param {?=} row
     * @return {?}
     */
    TableComponent.prototype.makeFilterToObject = /**
     * @param {?} filter
     * @param {?=} row
     * @return {?}
     */
    function (filter, row) {
        var _this_1 = this;
        return filter.reduce((/**
         * @param {?} p
         * @param {?} c
         * @param {?} i
         * @return {?}
         */
        function (p, c, i) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, p), Util.makeObject(_this_1.isFunction(c.path) ? c.path(row) : (/** @type {?} */ (c.path)), c.value))); }), {});
    };
    /**
     * @param {?} filtered
     * @return {?}
     */
    TableComponent.prototype.runPathFilter = /**
     * @param {?} filtered
     * @return {?}
     */
    function (filtered) {
        var _this_1 = this;
        if (this.variablePathFilter.length > 0) {
            filtered = filtered.filter((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                return Util.isContained(row, _this_1.makeFilterToObject(_this_1.variablePathFilter, row), false);
            }));
        }
        if (this.variableFunctionFilter.length > 0) {
            filtered = filtered.filter((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return _this_1.variableFunctionFilter.every((/**
             * @param {?} item
             * @param {?} i
             * @return {?}
             */
            function (item, i) {
                return Util.turkishToLower(String(item.path(row))).includes(Util.turkishToLower(item.value));
            })); }));
        }
        return filtered;
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.clientSideLoading = /**
     * @return {?}
     */
    function () {
        this.original = JSON.parse(JSON.stringify(this.original || this.rows || []));
        this.showing = JSON.parse(JSON.stringify(this.rows));
        this.clientSideFilter();
        this.onHttpSucceed.emit({ rows: this.original, shows: this.showing });
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.clientSideFilter = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var startIndex = (this.pageNumber - 1) * this.pageSize;
        /** @type {?} */
        var filter = this.makeFilterToObject(this.filter);
        Util.clearNullAndUndefined(filter, true);
        /** @type {?} */
        var filtered = JSON.parse(JSON.stringify(this.original && Util.findAllObjectInArray(this.original, filter, false)));
        filtered = this.runPathFilter(this.orderPipe.transform(filtered, this.sorting));
        this.rows = filtered.slice(startIndex, startIndex + this.paging.pageSize);
        this.paging.totalCount = filtered.length;
        return this.rows;
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.serverSideLoading = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        // TODO this.loadingService.status(true, `${this.service.url} - table start`);
        this.api.request(this.service.method, this.service.url, {
            params: this.manageQueryParams(),
            headers: this.generateHttpHeaders(),
        }).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return _this_1.onLoadSuccessHandler(response); }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this_1.onLoadErrorHandler(error); }));
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.manageQueryParams = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        /** @type {?} */
        var sorting = this.sorting.column ? Util.makeObject((/** @type {?} */ (this.sorting.column)), this.sorting.descending ? 'desc' : 'asc') : null;
        /** @type {?} */
        var filter = this.filter.length > 0 ? this.filter : null;
        /** @type {?} */
        var paging = { pageNumber: this.pageNumber, pageSize: this.pageSize };
        /** @type {?} */
        var queryParameter = {};
        /** @type {?} */
        var reformat = {
            sorting: (/**
             * @return {?}
             */
            function () {
                if (sorting) {
                    sorting = Util.extractObjectAllValues(sorting);
                    /** @type {?} */
                    var sort = Object.keys(sorting).map((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return item + " " + sorting[item]; }));
                    if (!_this_1.oDataStatus) {
                        queryParameter.sort = sort.join(',');
                    }
                    else {
                        queryParameter.$orderby = sort.join(',');
                    }
                }
            }),
            paging: (/**
             * @return {?}
             */
            function () {
                if (!_this_1.oDataStatus) {
                    queryParameter.limit = paging.pageSize;
                    queryParameter.offset = _this_1.paas ? (paging.pageNumber - 1) * paging.pageSize : paging.pageNumber;
                }
                else {
                    queryParameter.$top = paging.pageSize;
                    queryParameter.$skip = _this_1.paas ? (paging.pageNumber - 1) * paging.pageSize : paging.pageNumber;
                }
            }),
            filter: (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var text = [];
                if (filter && _this_1.oDataStatus) {
                    filter.map((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        if (item && item.value) {
                            if (item['filterType'] === 'number') {
                                text.push(item.path + " eq " + item.value);
                            }
                            else if (item['filterType'] === 'date') {
                                text.push(item.path + " eq " + item.value);
                            }
                            else if (item['filterType'] === 'custom') {
                                text.push("startswith(" + item.path + ", '" + item.value + "') eq true");
                            }
                            else {
                                text.push("startswith(" + item.path + ", '" + item.value + "') eq true");
                            }
                        }
                    }));
                }
                else if (filter && _this_1.paas) {
                    filter.map((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        if (item && item.value) {
                            if (item['filterType'] === 'number') {
                                text.push(item.path + "=" + item.value);
                            }
                            else if (item['filterType'] === 'date') {
                                text.push(item.path + "=" + item.value);
                            }
                            else if (item['filterType'] === 'custom') {
                                text.push(item.path + " '" + item.value + "'");
                            }
                            else {
                                text.push(item.path + " like '%" + item.value + "%'");
                            }
                        }
                    }));
                }
                else {
                    filter && filter.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return item.value && text.push(item.filterType === 'custom' ? item.path + " '" + item.value + "'" : item.path + "=" + item.value); }));
                }
                if (!_this_1.oDataStatus) {
                    queryParameter.q = _this_1.paas ? text.join(' And ') : text.join('|');
                }
                else {
                    queryParameter.$filter = text.join(' and ');
                }
            }),
        };
        Object.keys(reformat).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            reformat[key]();
        }));
        Util.clearNullAndUndefined(queryParameter, true);
        return this.generateHttpParams(queryParameter);
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.generateHttpHeaders = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var header = {};
        this.onHttpHeaders.emit(header);
        /** @type {?} */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        Object.keys(header).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            headers = headers.append(key, header[key]);
        }));
        return headers;
    };
    /**
     * @param {?=} queryParameter
     * @return {?}
     */
    TableComponent.prototype.generateHttpParams = /**
     * @param {?=} queryParameter
     * @return {?}
     */
    function (queryParameter) {
        queryParameter = queryParameter || {};
        this.onHttpParams.emit(queryParameter);
        /** @type {?} */
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.keys(queryParameter).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            params = params.append(key, queryParameter[key]);
        }));
        return params;
    };
    /**
     * @param {?=} row
     * @return {?}
     */
    TableComponent.prototype.htmlRendered = /**
     * @param {?=} row
     * @return {?}
     */
    function (row) {
        // TODO this.loadingService.status(false, `${this.service.url} - table complete - rows: ${row}`);
        this.onRenderCompleted.emit({ rows: this.rows, row: row });
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.getSort = /**
     * @return {?}
     */
    function () {
        // TODO: ileride this.sorting bir array olmali
        /** @type {?} */
        var sortList = {};
        if (this.sorting !== null && this.sorting.status && this.sorting.column) {
            sortList["" + this.sorting.column] = this.sorting.descending ? 'DESC' : 'ASC';
        }
        return sortList;
    };
    /**
     * @param {?} response
     * @return {?}
     */
    TableComponent.prototype.convertToTableDataSet = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        return this.mapPath && Util.getObjectPathValue(response, this.mapPath) || null;
    };
    /**
     * @param {?} response
     * @return {?}
     */
    TableComponent.prototype.onLoadSuccessHandler = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (this.mapPath) {
            /** @type {?} */
            var tableDataSet = this.convertToTableDataSet(response);
            this.onHttpResponseModifier.emit(response);
            this.rows = tableDataSet ? tableDataSet : [];
        }
        else if (response.data) {
            this.onHttpResponseModifier.emit(response);
            this.rows = response.data;
        }
        else if (Util.type(response) === 'Array') {
            response = {
                data: response,
                totalCount: ((/** @type {?} */ (response))).length,
                totalPages: Math.floor((((/** @type {?} */ (response))).length / this.pageSize)),
            };
            this.onHttpResponseModifier.emit(response);
            this.rows = response.data;
        }
        else {
            this.reset();
        }
        if (this.hasPaging && this.serverSide) {
            if (response) {
                if (typeof response.totalCount !== 'undefined') {
                    this.paging.totalCount = response.totalCount;
                }
                if (typeof response.totalPages !== 'undefined') {
                    this.paging.totalPages = response.totalPages;
                }
            }
        }
        this.original = JSON.parse(JSON.stringify(this.original || this.rows));
        this.showing = JSON.parse(JSON.stringify(this.rows));
        this.rows = this.runPathFilter(this.rows);
        this.onHttpSucceed.emit({ rows: this.original, shows: this.showing });
        if (this.rows.length <= 0) {
            this.htmlRendered(null);
        }
        this.setExcelOptions();
    };
    /**
     * @param {?} error
     * @return {?}
     */
    TableComponent.prototype.onLoadErrorHandler = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.onHttpError.emit(error);
        if (this.rows.length <= 0) {
            this.htmlRendered(null);
        }
    };
    /**
     * @param {?} page
     * @return {?}
     */
    TableComponent.prototype.htmlOnPageNumberChangeHandler = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageNumber = page.pageNumber;
        this.load();
    };
    /**
     * @param {?} page
     * @return {?}
     */
    TableComponent.prototype.htmlOnPageSizeChangeHandler = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageNumber = this.paging.pageSize < page.pageSize ? 1 : this.pageNumber;
        this.pageSize = page.pageSize;
        this.load();
    };
    /**
     * @param {?} row
     * @return {?}
     */
    TableComponent.prototype.htmlIsInSelectedList = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        return !!this.list.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return Util.isContained(row, item); }));
    };
    /**
     * @param {?} row
     * @param {?} $event
     * @param {?} i
     * @return {?}
     */
    TableComponent.prototype.htmlOnClick = /**
     * @param {?} row
     * @param {?} $event
     * @param {?} i
     * @return {?}
     */
    function (row, $event, i) {
        var _this_1 = this;
        clearTimeout(this.clickDelay);
        this.clickDelay = window.setTimeout((/**
         * @return {?}
         */
        function () {
            if ($event.detail === 1) {
                if (_this_1.multiSelect) {
                    /** @type {?} */
                    var index = _this_1.list.indexOf(row);
                    if (index < 0) {
                        _this_1._selected = row;
                        _this_1.list.push(row);
                    }
                    else {
                        _this_1._selected = null;
                        _this_1.list.splice(index, 1);
                    }
                }
                else {
                    _this_1.list = [];
                    if (_this_1._selected === row) {
                        _this_1._selected = null;
                    }
                    else {
                        _this_1._selected = row;
                        _this_1.list.push(row);
                    }
                }
                _this_1.onTrClicked.emit({ row: row, event: $event, index: i });
            }
        }), 260);
    };
    /**
     * @param {?} row
     * @param {?} $event
     * @param {?} i
     * @return {?}
     */
    TableComponent.prototype.htmlOnDblClick = /**
     * @param {?} row
     * @param {?} $event
     * @param {?} i
     * @return {?}
     */
    function (row, $event, i) {
        window.clearTimeout(this.clickDelay);
        this.onTrDblClicked.emit({ row: row, event: $event, index: i });
    };
    /**
     * Reload the table data again, it triggers to this.load();
     */
    /**
     * Reload the table data again, it triggers to this.load();
     * @return {?}
     */
    TableComponent.prototype.actionHtmlLoad = /**
     * Reload the table data again, it triggers to this.load();
     * @return {?}
     */
    function () {
        this.load();
    };
    /**
     * This table action deletes the selected row from reference table and send it to current table
     */
    /**
     * This table action deletes the selected row from reference table and send it to current table
     * @return {?}
     */
    TableComponent.prototype.actionHtmlAddReference = /**
     * This table action deletes the selected row from reference table and send it to current table
     * @return {?}
     */
    function () {
        var _this_1 = this;
        this.rows = Util.union(this.rows, this.reference.list);
        this.reference.list.forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this_1.reference.rows.splice(_this_1.reference.rows.indexOf(value), 1);
        }));
        this.list = this.reference.list;
        this.reference.list = [];
        if (this.events.drag && this.events.drag.complete) {
            this.events.drag.complete(this);
            this.dragReset();
        }
    };
    /**
     * This table action deletes the selected row from current table and send it to reference table
     */
    /**
     * This table action deletes the selected row from current table and send it to reference table
     * @return {?}
     */
    TableComponent.prototype.actionHtmlRemoveReference = /**
     * This table action deletes the selected row from current table and send it to reference table
     * @return {?}
     */
    function () {
        var _this_1 = this;
        this.list.forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this_1.rows.splice(_this_1.rows.indexOf(value), 1);
        }));
        this.reference.rows = Util.union(this.reference.rows, this.list);
        this.reference.list = this.list;
        this.list = [];
        if (this.reference.events.drag && this.reference.events.drag.complete) {
            this.reference.events.drag.complete(this.reference);
            this.dragReset();
        }
    };
    /**
     * @param {?} row
     * @return {?}
     */
    TableComponent.prototype.actionHtmlDeleteRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.oDataHandler(CRUD.DELETE, row);
        this.onDeleteClicked.emit(row);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TableComponent.prototype.htmlDragOver = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
    };
    /**
     * @param {?} row
     * @param {?} $event
     * @param {?} index
     * @return {?}
     */
    TableComponent.prototype.htmlDragStart = /**
     * @param {?} row
     * @param {?} $event
     * @param {?} index
     * @return {?}
     */
    function (row, $event, index) {
        this.drag.start = true;
        if (this.list.indexOf(row) < 0) {
            this.htmlOnClick(row, $event, index);
        }
        /** @type {?} */
        var element = (/** @type {?} */ ($event.target));
        /** @type {?} */
        var found = element.querySelectorAll('object');
        if (found.length > 0) {
            found[0].remove();
        }
        $event.dataTransfer.effectAllowed = 'copy';
        $event.dataTransfer.setDragImage(element, 0, 0);
        $event.dataTransfer.setData('text', JSON.stringify(this.list));
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    TableComponent.prototype.htmlDrop = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        if (!this.drag.start) {
            /** @type {?} */
            var list = JSON.parse($event.dataTransfer.getData('text'));
            this.rows = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(this.rows, list);
            this.reference.dragCompleted();
            this.list = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])(this.list, list);
            if (this.events.drag && this.events.drag.complete) {
                this.events.drag.complete(this);
            }
        }
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.dragCompleted = /**
     * @return {?}
     */
    function () {
        var _this_1 = this;
        this.list.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var index = _this_1.rows.indexOf(item);
            _this_1.rows.splice(index, 1);
            _this_1.list.splice(_this_1.list.indexOf(item), 1);
        }));
        this.dragReset();
        this.drag.start = false;
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.dragReset = /**
     * @return {?}
     */
    function () {
        this.reference._selected = null;
        this._selected = null;
        this.reference.list = [];
        this.list = [];
    };
    /**
     * @param {?} status
     * @return {?}
     */
    TableComponent.prototype.changeActionStatus = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        var e_1, _a;
        if (status !== null && status.getType() === 'Array') {
            for (var key in this.actions) {
                if (this.actions.hasOwnProperty(key)) {
                    this.actions[key].disable = status[key];
                }
            }
        }
        else if (status !== null && status.getType() === 'Boolean') {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(this.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    item.disable = status;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.paging = {
            pageSize: this.paging.pageSize,
            pageNumber: 1,
            totalCount: 0,
            totalPages: 0,
        };
        this.filter = [];
        this.rows = [];
        this.creating = {};
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    TableComponent.prototype.htmlExpanderOpen = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        event.preventDefault();
        event.stopPropagation();
        this.expanderStatus[cell.index] = !this.expanderStatus[cell.index];
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.htmlUpdateFocus = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        ((/** @type {?} */ (event.target))).closest('tbody').querySelectorAll('.edit-focus').forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.classList.remove('edit-focus'); }));
        ((/** @type {?} */ (event.target))).closest('td').classList.add('edit-focus');
        this.onUpdateFocus.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.htmlUpdateChange = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        ((/** @type {?} */ (event.target))).closest('td').classList.add('editing');
        this.onUpdateChange.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.htmlUpdateBlur = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // (event.target as HTMLInputElement).parentElement.parentElement.classList.remove('edit-focus');
        this.onUpdateBlur.emit(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.htmlUpdateAccept = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this_1 = this;
        ((/** @type {?} */ (event.target)))
            .closest('tr')
            .querySelectorAll('.editing')
            .forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.classList.remove('editing', 'edit-focus'); }));
        this.oDataHandler(CRUD.UPDATE, data.row);
        this.onUpdateAccepted.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, data), { row: JSON.parse(JSON.stringify(data.row)), clear: (/**
             * @param {?} status
             * @param {?} updateDataType
             * @return {?}
             */
            function (status, updateDataType) { return _this_1.htmlUpdateCompleteClear(status, updateDataType); }) }));
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    TableComponent.prototype.htmlUpdateCancel = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var column = _a.column, row = _a.row, showingCurrently = _a.showingCurrently, showingOriginal = _a.showingOriginal, fullOriginal = _a.fullOriginal, index = _a.index, parentRow = _a.parentRow, parentIndex = _a.parentIndex;
        /** @type {?} */
        var path = this.getColumnPath(row, column);
        /** @type {?} */
        var value = Util.getObjectPathValue(this.showing[index], path);
        Util.setObjectPathValue(row, path, value);
        ((/** @type {?} */ (event.target))).closest('td').classList.remove('editing', 'edit-focus');
        this.onUpdateCancel.emit({
            column: column,
            row: row,
            showingCurrently: showingCurrently,
            showingOriginal: showingOriginal,
            fullOriginal: fullOriginal,
            index: index,
            parentRow: this.parentRow,
            parentIndex: this.parentIndex,
        });
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.htmlUpdateStart = /**
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (event.target))).parentElement.querySelector('input').focus();
    };
    /**
     * @param {?} column
     * @return {?}
     */
    TableComponent.prototype.htmlCreateCanceled = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        Util.setObjectPathValue(this.creating, column.variablePath, '');
        Util.clearNullAndUndefined(this.creating, true);
        ((/** @type {?} */ (event.target)))
            .closest('tr').querySelectorAll('.editing')
            .forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.classList.remove('editing', 'edit-focus'); }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TableComponent.prototype.htmlCreateAccepted = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this_1 = this;
        ((/** @type {?} */ (event.target)))
            .closest('tr').querySelectorAll('.editing')
            .forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.classList.remove('editing', 'edit-focus'); }));
        this.oDataHandler(CRUD.CREATE, data.row);
        window.clearTimeout(this.createClearTimeout);
        this.createClearTimeout = window.setTimeout((/**
         * @return {?}
         */
        function () { return _this_1.htmlCreateCompletedClear(true); }), 2000);
        this.onCreateAccepted.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, data), { row: JSON.parse(JSON.stringify(data.row)), clear: (/**
             * @param {?} status
             * @return {?}
             */
            function (status) { return _this_1.htmlCreateCompletedClear(status); }) }));
    };
    /**
     * @param {?=} status
     * @param {?=} updateDataType
     * @return {?}
     */
    TableComponent.prototype.htmlUpdateCompleteClear = /**
     * @param {?=} status
     * @param {?=} updateDataType
     * @return {?}
     */
    function (status, updateDataType) {
        if (status === void 0) { status = true; }
        if (status && updateDataType) {
            this.rows[updateDataType.index] = JSON.parse(JSON.stringify(this.showing[updateDataType.index]));
        }
        else if (status && !updateDataType) {
            console.log('Please, send "TableUpdateDataType" to htmlUpdateCompleteClear(status: boolean = true, updateDataType: TableUpdateDataType) method as second parameter');
        }
    };
    /**
     * @param {?=} status
     * @return {?}
     */
    TableComponent.prototype.htmlCreateCompletedClear = /**
     * @param {?=} status
     * @return {?}
     */
    function (status) {
        var _this_1 = this;
        if (status === void 0) { status = true; }
        window.clearTimeout(this.createClearTimeout);
        this.ngZone.run((/**
         * @return {?}
         */
        function () { return _this_1.creating = (status) ? _this_1.creating = {} : JSON.parse(JSON.stringify(_this_1.creating)); }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TableComponent.prototype.isFunction = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (typeof (value) === 'function');
    };
    /**
     * @param {?} type
     * @param {?} row
     * @return {?}
     */
    TableComponent.prototype.oDataHandler = /**
     * @param {?} type
     * @param {?} row
     * @return {?}
     */
    function (type, row) {
        if (this.oDataStatus) {
            switch (type) {
                case CRUD.CREATE:
                    this.oDataCreate(row);
                    return null;
                case CRUD.DELETE:
                    this.oDataDelete(row);
                    return null;
                case CRUD.UPDATE:
                    this.oDataUpdate(row);
                    return null;
            }
        }
    };
    /**
     * @param {?} row
     * @return {?}
     */
    TableComponent.prototype.oDataDelete = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var _this_1 = this;
        if (row && row[this.oDataIdentityField]) {
            this.api.delete(this.service.url + "(" + row[this.oDataIdentityField] + ")", {
                params: this.generateHttpParams(),
                headers: this.generateHttpHeaders(),
            }).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this_1.onDeleteHttpSucceed.emit(response);
                _this_1.load();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this_1.onDeleteHttpError.emit(error);
            }));
        }
    };
    /**
     * @param {?} row
     * @return {?}
     */
    TableComponent.prototype.oDataUpdate = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var _this_1 = this;
        if (row && row[this.oDataIdentityField]) {
            this.api.put(this.service.url + "(" + row[this.oDataIdentityField] + ")", row, {
                params: this.generateHttpParams(),
                headers: this.generateHttpHeaders(),
            }).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this_1.onUpdateHttpSucceed.emit(response);
                _this_1.load();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this_1.onUpdateHttpError.emit(error);
                _this_1.load();
            }));
        }
    };
    /**
     * @param {?} row
     * @return {?}
     */
    TableComponent.prototype.oDataCreate = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var _this_1 = this;
        if (row) {
            this.api.post("" + this.service.url, row, {
                params: this.generateHttpParams(),
                headers: this.generateHttpHeaders(),
            }).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this_1.onCreateHttpSucceed.emit(response);
                _this_1.load();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this_1.onCreateHttpError.emit(error);
            }));
        }
    };
    TableComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'logo-table',
                    template: "<!--\n/**\n * @license\n * Copyright LOGO YAZILIM SANAY\u0130 VE T\u0130CARET A.\u015E. All Rights Reserved.\n *\n * Save to the extent permitted by law, you may not use, copy, modify,\n * distribute or create derivative works of this material or any part\n * of it without the prior written consent of LOGO YAZILIM SANAY\u0130 VE T\u0130CARET A.\u015E. Limited.\n * Any reproduction of this material must contain this notice.\n */\n-->\n<div class=\"table-actions\">\n  <button (click)=\"actionHtmlAddReference()\" *ngIf=\"!!reference && refButtonStatus\" class=\"add\"></button>\n  <button (click)=\"actionHtmlRemoveReference()\" *ngIf=\"!!reference && refButtonStatus\" class=\"remove\"></button>\n  <button (click)=\"actionHtmlLoad()\" *ngIf=\"!!refresh\" class=\"refresh\"></button>\n  <button (click)=\"create=!create\" *ngIf=\"editable\" [ngClass]=\"{'button-selected': create}\" class=\"add\"></button>\n  <button (click)=\"editable = !editable\" [ngClass]=\"{'button-selected': editable}\" class=\"edit\"></button>\n  <button (click)=\"actionHtmlDeleteRow(selected)\" *ngIf=\"delete\" class=\"bin\"></button>\n  <ng-container *ngFor=\"let action of actions\">\n    <button\n      (click)=\"action.click && action.click(_this)\" [disabled]=\"action.disable\"\n      [ngClass]=\"htmlSetActionButtonClass(action)\"\n    >\n      {{action.display}}\n    </button>\n  </ng-container>\n  <logo-excel\n    (complete)=\"excel.complete($event)\"\n    [columns]=\"excel.columns\"\n    [data]=\"rows\"\n    [header]=\"excel.header\"\n    [name]=\"excel.name\"\n    [status]=\"excel.status\"\n    class=\"excel-export\"\n  >\n    <button class=\"excel\"></button>\n  </logo-excel>\n</div>\n\n<div [ngStyle]=\"{'max-height': height ? height : 'auto'}\" class=\"table-container\">\n  <table [ngClass]=\"{'table-editing': editable}\" class=\"table\">\n    <thead>\n    <tr>\n      <th *ngIf=\"index\" class=\"index\"></th>\n      <th\n        (click)=\"htmlChangeSortingByColumn(column)\"\n        *ngFor=\"let column of columns\"\n        [hidden]=\"column.hidden\"\n        [ngClass]=\"htmlSetTheadClass(column)\"\n        [title]=\"column.display\"\n        class=\"dotted\"\n      >\n        {{column.display}}\n      </th>\n      <th\n        *ngFor=\"let thead of heads\"\n        [ngClass]=\"[thead.className ? thead.className : '']\"\n        [title]=\"thead.display\"\n      >\n        {{thead.display}}\n      </th>\n    </tr>\n    <tr *ngIf=\"!reference && hasFilter\">\n      <th *ngIf=\"index\" class=\"index filter\"></th>\n      <th *ngFor=\"let column of columns\" [hidden]=\"column.hidden ? column.hidden : false\" class=\"filter\">\n        <label>\n          <!-- (change)=\"filterAdd(column, $event.target)\" @TODO also added to input, inputa eklenmi\u015Fti sildim-->\n          <input\n            (input)=\"htmlFilterAdd(column, $event.target)\"\n            *ngIf=\"!column.filterDisable\"\n            [type]=\"['percent' , 'range', 'custom', 'currency'].includes(column.filterType) ? 'text' : column.filterType\"\n          />\n          <input *ngIf=\"column.filterDisable\" disabled/>\n        </label>\n      </th>\n      <th *ngFor=\"let thead of heads\" class=\"filter\">\n        <label><input disabled/></label>\n      </th>\n    </tr>\n    </thead>\n    <tbody (dragover)=\"htmlDragOver($event)\" (drop)=\"htmlDrop($event)\">\n    <ng-container *ngIf=\"rows.length > 0\">\n      <ng-container\n        *ngFor=\"let row of (this.serverSide ? rows : this.clientSideFilter());trackBy: trackByMethod; index as i; let isOdd = odd; let isEven = even;  let isLast= last; let isFirst = first;\"\n      >\n        <tr\n          (click)=\"htmlOnClick(row, $event, i)\"\n          (dblclick)=\"htmlOnDblClick(row, $event, i)\"\n          (dragstart)=\"htmlDragStart(row, $event, i)\"\n          (isLastEmitter)=\"htmlRendered(row)\"\n          [draggable]=\"draggable\"\n          [isLast]=\"isLast\"\n          [ngClass]=\"{'selected':htmlIsInSelectedList(row), 'odd': isOdd, 'even': isEven}\"\n        >\n          <td *ngIf=\"index\" class=\"index\">{{indexStart + i + 1}}</td>\n          <td\n            *ngFor=\"let column of columns; let columnIndex = index\"\n            [hidden]=\"column.hidden\"\n            [ngClass]=\"htmlSetTdClass(row, column)\"\n          >\n            <div class=\"content-container\">\n              <ng-container\n                *ngIf=\"!editable || !column.editable || column.variableFunction || isFunction(column.variablePath); else editableRef\">\n                <button\n                  (click)=\"htmlExpanderOpen({row: row, index: i , isLast: isLast, isFirst: isFirst})\"\n                  *ngIf=\"(column.expand && (!expanderComponent ? expanderTemplateRef : expanderComponent.expandable({row: row, i: index , isLast: isLast, isFirst: isFirst})))\"\n                  class=\"expander\"\n                  [ngClass]=\"expanderStatus[i] ? 'expander-remove' : 'expander-add'\"\n                >\n                </button>\n                <span\n                  [innerHTML]=\"htmlGetRowPathValue(row, column) | format : column.filterType + ':' + column.format\"\n                  class=\"content\"\n                >\n                </span>\n              </ng-container>\n              <ng-template #editableRef>\n                <button\n                  (click)=\"htmlExpanderOpen({row: row, index: i , isLast: isLast, isFirst: isFirst})\"\n                  *ngIf=\"(column.expand && (!expanderComponent ? expanderTemplateRef : expanderComponent.expandable({row: row, i: index , isLast: isLast, isFirst: isFirst})))\"\n                  class=\"expander\"\n                  [ngClass]=\"expanderStatus[i] ? 'expander-remove' : 'expander-add'\"\n                >\n                </button>\n                <span class=\"content\">\n                  <input\n                    (blur)=\"htmlUpdateBlur({column: column, row: row, showingCurrently: this.rows, showingOriginal: this.showing, fullOriginal: this.original, index: i, parentRow: parentRow, parentIndex: parentIndex})\"\n                    (change)=\"htmlUpdateChange({column: column, row: row, showingCurrently: this.rows, showingOriginal: this.showing, fullOriginal: this.original, index: i, parentRow: parentRow, parentIndex: parentIndex})\"\n                    (focus)=\"htmlUpdateFocus({column: column, row: row, showingCurrently: this.rows, showingOriginal: this.showing, fullOriginal: this.original, index: i, parentRow: parentRow, parentIndex: parentIndex})\"\n                    (ngModelChange)=\"htmlSetRowPath($event, row, column)\"\n                    [ngModel]=\"htmlGetRowPathValue(row, column)\"\n                    [type]=\"column.filterType === 'custom' ? 'text' : column.filterType\"\n                  />\n                  <button (click)=\"htmlUpdateStart()\" class=\"edit-pen\"></button>\n                  <button\n                    (click)=\"htmlUpdateCancel({column: column, row: row, showingCurrently: this.rows, showingOriginal: this.showing, fullOriginal: this.original, index: i, parentRow: parentRow, parentIndex: parentIndex})\"\n                    class=\"edit-cancel\"\n                  >\n                  </button>\n                  <button\n                    (click)=\"htmlUpdateAccept({column: column, row: row, showingCurrently: this.rows, showingOriginal: this.showing, fullOriginal: this.original, index: i, parentRow: parentRow, parentIndex: parentIndex})\"\n                    class=\"edit-accept\"\n                  >\n                  </button>\n                </span>\n              </ng-template>\n            </div>\n          </td>\n          <!-- Column template -->\n          <ng-container\n            [ngTemplateOutletContext]=\"{row: row, index: i, isLast: isLast, isFirst: isFirst, isOdd: isOdd, columns: columns, heads: heads, filter: filter, sorting: sorting, actions: actions}\"\n            [ngTemplateOutlet]=\"templateRef\"\n          >\n          </ng-container>\n        </tr>\n        <!-- Expander template -->\n        <tr *ngIf=\"expanderStatus[i]\" class=\"expanded\">\n          <td [colSpan]=\"htmlSetTdColspan(index)\" class=\"expanded-td\">\n            <ng-container\n              [ngTemplateOutletContext]=\"{row: row, index: i, isLast: isLast, isFirst: isFirst, isOdd: isOdd, columns: columns, heads: heads, filter: filter, sorting: sorting, actions: actions, isOpen: expanderStatus[i]}\"\n              [ngTemplateOutlet]=\"expanderTemplateRef\"\n            >\n            </ng-container>\n          </td>\n        </tr>\n      </ng-container>\n    </ng-container>\n    <!-- No Data Were Found -->\n    <tr (isLastEmitter)=\"htmlRendered(null)\" *ngIf=\"rows.length <= 0\" [isLast]=\"true\">\n      <td [colSpan]=\"columns.length + heads.length + (index ? 1 : 0)\" class=\"no-data\">\n        {{\"no_data_were_found\"}}\n      </td>\n    </tr>\n    <!-- Adding New Row -->\n    <tr *ngIf=\"editable && create\" class=\"new-line\">\n      <td *ngIf=\"index\" class=\"index\">{{rows.length + 1}}</td>\n      <td\n        *ngFor=\"let column of columns; let columnIndex = index\"\n        [hidden]=\"column.hidden\"\n        [ngClass]=\"htmlSetTdClass(creating, column)\"\n      >\n        <div class=\"content-container\">\n          <span *ngIf=\"editable && column.editable && !column.variableFunction && !isFunction(column.variablePath)\"\n                class=\"content\">\n            <input\n              (blur)=\"htmlUpdateBlur({column: column, row: creating, showingCurrently: this.rows, showingOriginal: this.showing, fullOriginal: this.original, index: rows.length + 1, parentRow: parentRow, parentIndex: parentIndex})\"\n              (change)=\"htmlUpdateChange({column: column, row: creating, showingCurrently: this.rows, showingOriginal: this.showing, fullOriginal: this.original, index: rows.length + 1, parentRow: parentRow, parentIndex: parentIndex})\"\n              (focus)=\"htmlUpdateFocus({column: column, row: creating, showingCurrently: this.rows, showingOriginal: this.showing, fullOriginal: this.original, index: rows.length + 1, parentRow: parentRow, parentIndex: parentIndex})\"\n              (ngModelChange)=\"htmlSetRowPath($event, creating, column)\"\n              [ngModel]=\"htmlGetRowPathValue(creating, column)\"\n              [type]=\"column.filterType === 'custom' ? 'text' : column.filterType\"\n              placeholder=\"add new\"\n            />\n            <button (click)=\"htmlUpdateStart()\" class=\"edit-pen\"></button>\n            <button (click)=\"htmlCreateCanceled(column)\" class=\"edit-cancel\"></button>\n            <button\n              (click)=\"htmlCreateAccepted({column: column, row: creating, showingCurrently: this.rows, showingOriginal: this.showing, fullOriginal: this.original, index: rows.length + 1, parentRow: parentRow, parentIndex: parentIndex})\"\n              class=\"edit-accept\"\n            >\n            </button>\n          </span>\n          <span\n            *ngIf=\"column.variableFunction\"\n            [innerHTML]=\"htmlGetRowPathValue(creating, column) | format : column.filterType + ':' + column.format\"\n            class=\"content\"\n          >\n          </span>\n        </div>\n      </td>\n      <ng-container\n        [ngTemplateOutletContext]=\"{row: creating, index: rows.length + 1, isLast: true, isFirst: false, columns: columns, heads: heads, filter: filter, sorting: sorting, actions: actions, createHead: true}\"\n        [ngTemplateOutlet]=\"templateRef\"\n      >\n      </ng-container>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n<div *ngIf=\"!hasPaging && rows.length >= 0\" class=\"app-paging\">\n  <div class=\"row\">\n    <div class=\"flex-grow total-count\">\n      <strong>{{rows.length}}</strong> {{\"record_found\"}}\n    </div>\n  </div>\n</div>\n\n<!--*ngIf=\"!reference && hasPaging && paging.totalCount > 0\"-->\n<logo-paging\n  (pageNumberChange)=\"htmlOnPageNumberChangeHandler($event)\"\n  (pageSizeChange)=\"htmlOnPageSizeChangeHandler($event)\"\n  *ngIf=\"hasPaging && paging.totalCount > 0\"\n  [pageNumber]=\"paging.pageNumber\"\n  [pageSize]=\"paging.pageSize\"\n  [totalCount]=\"paging.totalCount\">\n</logo-paging>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: ["@charset \"UTF-8\";:host ::ng-deep{color:#44586c;display:block;font-size:12px}:host ::ng-deep .table-container{position:relative;overflow:auto;border-bottom:1px solid rgba(0,144,255,.1);font-family:Nunito,sans-serif!important;font-size:14px}:host ::ng-deep .table-container table{border-collapse:separate;border-spacing:0;width:100%;position:relative}:host ::ng-deep .table-container table thead tr th{position:-webkit-sticky;position:sticky;top:0;z-index:0;padding:2px 5px;background-color:#0090ff;border-right:1px solid #0076ff;cursor:pointer;white-space:nowrap;text-align:left;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:12px;font-weight:800;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#fff}:host ::ng-deep .table-container table thead tr th.index{min-width:20px;text-align:center}:host ::ng-deep .table-container table thead tr th.sort-asc::before{content:\"\uF0D7\";display:inline-block;-webkit-transition:.1s linear;transition:.1s linear}:host ::ng-deep .table-container table thead tr th.sort-desc::before{content:\"\uF0D7\";display:inline-block}:host ::ng-deep .table-container table thead tr th.filter{background-color:#0069e3;border-right:1px solid #0090ff;text-align:center;height:42px}:host ::ng-deep .table-container table thead tr th.filter label{display:block}:host ::ng-deep .table-container table thead tr th.filter label input{border:none;padding:0;width:100%;text-indent:5px;font-size:14px;height:32px;border-radius:2px;background-color:#f2f4f9;color:#8c92a1;font-family:Nunito,sans-serif!important;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal}:host ::ng-deep .table-container table thead tr th.filter label input:disabled{opacity:.4}:host ::ng-deep .table-container table thead tr th:last-child{border:none}:host ::ng-deep .table-container table thead tr:first-child th{z-index:1}:host ::ng-deep .table-container table tbody tr td{color:#4a4a4a;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;height:32px;padding:0;vertical-align:middle}:host ::ng-deep .table-container table tbody tr td.index{text-align:center;background-color:rgba(0,144,255,.8);color:#fff}:host ::ng-deep .table-container table tbody tr td button{min-width:24px;height:24px;margin:0 2px;outline:0;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:2px;border:1px solid #e5e5e5;background-position:center;background-color:#fff}:host ::ng-deep .table-container table tbody tr td div.content-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:4px 0}:host ::ng-deep .table-container table tbody tr td div.content-container button.expander{-ms-flex-negative:1;flex-shrink:1;min-width:24px;height:24px;padding:0;background:0 0;margin-left:5px;outline:0;cursor:pointer;border:1px solid #e5e5e5;border-radius:2px}:host ::ng-deep .table-container table tbody tr td div.content-container button.expander.visible{opacity:1}:host ::ng-deep .table-container table tbody tr td div.content-container button.expander.expander-add{background:url(assets/icons/add.svg) center center no-repeat #fff}:host ::ng-deep .table-container table tbody tr td div.content-container button.expander.expander-remove{background:url(assets/icons/remove.svg) center center no-repeat #fff}:host ::ng-deep .table-container table tbody tr td div.content-container span.content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;padding-left:5px;position:relative}:host ::ng-deep .table-container table tbody tr td div.content-container span.content input{width:100%;height:100%;margin:0;padding:0;background-color:transparent;border:none;outline:0;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#4a4a4a;font-family:Nunito,sans-serif!important;cursor:pointer}:host ::ng-deep .table-container table tbody tr td div.content-container span.content button{display:none;position:absolute;z-index:2;right:0;background:0 0;padding:0}:host ::ng-deep .table-container table tbody tr td div.content-container span.content button:last-child{margin-right:4px}:host ::ng-deep .table-container table tbody tr td.editable{min-width:100px}:host ::ng-deep .table-container table tbody tr td.editable div.content-container{-webkit-box-sizing:border-box;box-sizing:border-box}:host ::ng-deep .table-container table tbody tr td.editable div.content-container:hover{-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,.2);box-shadow:0 0 4px 0 rgba(0,0,0,.2)}:host ::ng-deep .table-container table tbody tr td.editable div.content-container:hover .content input~button.edit-pen{display:inline-block;margin-right:4px;background:url(assets/icons/edit-pen.svg) center center no-repeat #fff;border:1px solid #e5e5e5}:host ::ng-deep .table-container table tbody tr td.edit-focus,:host ::ng-deep .table-container table tbody tr td:focus{-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,.2);box-shadow:0 0 4px 0 rgba(0,0,0,.2)}:host ::ng-deep .table-container table tbody tr td.edit-focus div.content-container .content input,:host ::ng-deep .table-container table tbody tr td:focus div.content-container .content input{margin-right:60px}:host ::ng-deep .table-container table tbody tr td.edit-focus div.content-container .content input~button.edit-accept,:host ::ng-deep .table-container table tbody tr td:focus div.content-container .content input~button.edit-accept{display:inline-block;right:0;background:url(assets/icons/small-check.svg) center center no-repeat #01cc78}:host ::ng-deep .table-container table tbody tr td.edit-focus div.content-container .content input~button.edit-cancel,:host ::ng-deep .table-container table tbody tr td:focus div.content-container .content input~button.edit-cancel{display:inline-block;right:30px;background:url(assets/icons/small-cross.svg) center center no-repeat #fff;border:1px solid #e5e5e5}:host ::ng-deep .table-container table tbody tr td.edit-focus div.content-container .content input~button.edit,:host ::ng-deep .table-container table tbody tr td:focus div.content-container .content input~button.edit{display:none}:host ::ng-deep .table-container table tbody tr.selected td{background:rgba(0,144,255,.3)}:host ::ng-deep .table-container table tbody tr.even{background-color:#fff}:host ::ng-deep .table-container table tbody tr.odd{background-color:#f9f9ff}:host ::ng-deep .table-container table tbody tr:last-child td{border-bottom:none}:host ::ng-deep .table-container table tbody tr:hover{background:rgba(0,144,255,.1)}:host ::ng-deep .table-container table tbody tr.new-line{background-color:rgba(255,255,0,.2)}:host ::ng-deep .table-container table tbody tr.expanded{background-color:#dddde8}:host ::ng-deep .table-container table tbody tr.expanded td.expanded-td{padding:10px}:host ::ng-deep .table-container table .no-data{text-align:center}:host.no-bootstrap .table{margin-bottom:0}:host.no-bootstrap .table thead th{border-top:0;border-bottom:0;vertical-align:inherit}:host ::ng-deep table.table-editing tbody tr td{border-bottom:1px dotted rgba(255,0,0,.21)}:host ::ng-deep table.table-editing tbody tr td.editable{border-right:1px dotted rgba(0,0,0,.21);border-bottom:1px dotted rgba(0,0,0,.21)}:host ::ng-deep table.table-editing tbody tr td.editing{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:rgba(0,180,94,.2)}:host ::ng-deep table.table-editing tbody tr td.editable+:host ::ng-deep table.table-editing tbody tr td.editable{border-left:1px solid transparent}:host ::ng-deep table.table-editing tbody tr td:not(.editable)+.editable{border-left:1px dotted rgba(0,0,0,.21)}:host ::ng-deep .table-actions{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px 0;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;background-color:#fff}:host ::ng-deep .table-actions button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:32px!important;height:32px!important;margin-right:10px;background-repeat:no-repeat;background-position:center;border:1px solid #e5e5e5;border-radius:2px;cursor:pointer;outline:0;padding:0;background-color:#fff}:host ::ng-deep .table-actions button.three-dot-ver{background-image:url(assets/icons/3-dots-ver.svg)}:host ::ng-deep .table-actions button.add{background-image:url(assets/icons/add.svg)}:host ::ng-deep .table-actions button.add-new{background-image:url(assets/icons/add-new.svg)}:host ::ng-deep .table-actions button.arrow-down{background-image:url(assets/icons/arrow-down.svg)}:host ::ng-deep .table-actions button.bin{background-image:url(assets/icons/bin.svg)}:host ::ng-deep .table-actions button.copy{background-image:url(assets/icons/copy.svg)}:host ::ng-deep .table-actions button.double-chevron-left{background-image:url(assets/icons/double-chevron-left.svg)}:host ::ng-deep .table-actions button.double-chevron-right{background-image:url(assets/icons/double-chevron-right.svg)}:host ::ng-deep .table-actions button.edit{background-image:url(assets/icons/edit.svg)}:host ::ng-deep .table-actions button.edit-pen{background-image:url(assets/icons/edit-pen.svg)}:host ::ng-deep .table-actions button.eye{background-image:url(assets/icons/eye.svg)}:host ::ng-deep .table-actions button.filter{background-image:url(assets/icons/filter.svg)}:host ::ng-deep .table-actions button.large-chevron-left{background-image:url(assets/icons/large-chevron-left.svg)}:host ::ng-deep .table-actions button.large-chevron-right{background-image:url(assets/icons/large-chevron-right.svg)}:host ::ng-deep .table-actions button.link{background-image:url(assets/icons/link.svg)}:host ::ng-deep .table-actions button.new{background-image:url(assets/icons/new.svg)}:host ::ng-deep .table-actions button.org{background-image:url(assets/icons/org.svg)}:host ::ng-deep .table-actions button.person{background-image:url(assets/icons/person.svg)}:host ::ng-deep .table-actions button.print{background-image:url(assets/icons/print.svg)}:host ::ng-deep .table-actions button.refresh{background-image:url(assets/icons/refresh.svg)}:host ::ng-deep .table-actions button.remove{background-image:url(assets/icons/remove.svg)}:host ::ng-deep .table-actions button.selection{background-image:url(assets/icons/selection.svg)}:host ::ng-deep .table-actions button.small-check{background-image:url(assets/icons/selection.svg)}:host ::ng-deep .table-actions button.small-cross{background-image:url(assets/icons/selection.svg)}:host ::ng-deep .table-actions button.excel{background-image:url(assets/icons/print.svg)}:host ::ng-deep .table-actions button:hover{background-color:#fafafa}:host ::ng-deep .table-actions button.button-selected{border:2px solid #0090ff}:host ::ng-deep .table-actions :last-child{margin-right:0}"]
                }] }
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    TableComponent.propDecorators = {
        templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['columns' || false, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
        expanderTemplateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: ['expander', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
        expanderComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [ExpanderComponent, { static: true },] }],
        editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        create: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        reference: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        refButtonStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        mapPath: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        automatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        multiSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        heads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        delete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hasPaging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hasFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        indexStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        service: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        excel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        paas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        oDataIdentityField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        oDataStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        parentRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        parentIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onHttpParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onHttpHeaders: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onHttpResponseModifier: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onHttpError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onTrClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onTrDblClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onRenderCompleted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onHttpSucceed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onUpdateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onUpdateBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onUpdateFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onUpdateAccepted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onUpdateCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onCreateAccepted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onDeleteClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onDeleteHttpSucceed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onDeleteHttpError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onUpdateHttpSucceed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onUpdateHttpError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onCreateHttpSucceed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onCreateHttpError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        serverSide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        actions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clickInside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click',] }]
    };
    return TableComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Import Table Module to module which will be used. Import it to `import` section of the desired module's NgModule:
 *
 * ```typescript
 * import { LanguageModule } from '\@logo-software/table';
 *
 * \@NgModule({
 *  imports: [
 *    CommonModule,
 *    TableModule,
 *  ],
 * })
 * export class AppModule {
 * }
 * ```
 */
var TableModule = /** @class */ (function () {
    function TableModule(parentModule, http) {
        this.http = http;
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    TableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _logo_software_paging__WEBPACK_IMPORTED_MODULE_5__["PagingModule"], _logo_software_excel__WEBPACK_IMPORTED_MODULE_6__["ExcelModule"]],
                    declarations: [TableComponent, OrderPipe, LastDirective, FormatPipe, ExpanderComponent],
                    exports: [TableComponent, ExpanderComponent],
                },] }
    ];
    /** @nocollapse */
    TableModule.ctorParameters = function () { return [
        { type: TableModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    return TableModule;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types/table.action.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * You can set table actions from another component with this.table.actions
 *
 * __Usage Example__
 *
 * ```typescript
 * this.table.actions = [{
 *   display: 'new',
 *   click: (table: TableComponent) => this.openSaveModal(table),
 *   className: 'prm',
 *   disable: false
 * }]
 * ```
 */
var  /**
 * You can set table actions from another component with this.table.actions
 *
 * __Usage Example__
 *
 * ```typescript
 * this.table.actions = [{
 *   display: 'new',
 *   click: (table: TableComponent) => this.openSaveModal(table),
 *   className: 'prm',
 *   disable: false
 * }]
 * ```
 */
TableAction = /** @class */ (function () {
    function TableAction() {
        /**
         * Action button status. Default status is false.
         */
        this.disable = false;
    }
    return TableAction;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types/table.filter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Table filter interface must be the this properties
 * @record
 * @template T
 */
function TableFilter() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types/table.head.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This input adds custom extra thead to and tbody columns to table.
 * If custom coded html need to be inserted between table columns, this is the solution.
 * Add some HTML to between app-table tag using
 * '<template let-i="index" let-row="row" let-last="isLast" let-odd="isOdd">' tags.
 *
 * 2 options can be set
 * "thead.className" is used for set style class name
 * "thead.display" is for thead visible text
 *
 * __Usage Example__
 *
 * <sub>typescript</sub>
 * ```typescript
 *    this.unassigned.theads: [{display: 'Onay', className:'some-class-name'}]
 *  ```
 *
 * <sub>html</sub>
 * ```html
 * <logo-table
 *  [automatic]="false"
 *  [columns]="unassigned.columns"
 *  [heads]="unassigned.theads"
 *  [hasFilter]="false"
 *  [hasPaging]="false"
 *  [height]="'600px'"
 *  #unassignedTable
 * >
 * <ng-template
 *   #columns
 *   let-actions="actions"
 *   let-columns="columns"
 *   let-filter="filter"
 *   let-first="isFirst"
 *   let-heads="heads"
 *   let-createHead="createHead"
 *   let-i="index"
 *   let-last="isLast"
 *   let-odd="isOdd"
 *   let-row="row"
 * >
 *  <td>
 *    current row: {{row | json}}, rowIndex: {{i}},  isLast: {{last}}, isOdd: {{odd}} etc.
 *  </td>
 *  </ng-template>
 * </logo-table>
 * ```
 */
var  /**
 * This input adds custom extra thead to and tbody columns to table.
 * If custom coded html need to be inserted between table columns, this is the solution.
 * Add some HTML to between app-table tag using
 * '<template let-i="index" let-row="row" let-last="isLast" let-odd="isOdd">' tags.
 *
 * 2 options can be set
 * "thead.className" is used for set style class name
 * "thead.display" is for thead visible text
 *
 * __Usage Example__
 *
 * <sub>typescript</sub>
 * ```typescript
 *    this.unassigned.theads: [{display: 'Onay', className:'some-class-name'}]
 *  ```
 *
 * <sub>html</sub>
 * ```html
 * <logo-table
 *  [automatic]="false"
 *  [columns]="unassigned.columns"
 *  [heads]="unassigned.theads"
 *  [hasFilter]="false"
 *  [hasPaging]="false"
 *  [height]="'600px'"
 *  #unassignedTable
 * >
 * <ng-template
 *   #columns
 *   let-actions="actions"
 *   let-columns="columns"
 *   let-filter="filter"
 *   let-first="isFirst"
 *   let-heads="heads"
 *   let-createHead="createHead"
 *   let-i="index"
 *   let-last="isLast"
 *   let-odd="isOdd"
 *   let-row="row"
 * >
 *  <td>
 *    current row: {{row | json}}, rowIndex: {{i}},  isLast: {{last}}, isOdd: {{odd}} etc.
 *  </td>
 *  </ng-template>
 * </logo-table>
 * ```
 */
TableHead = /** @class */ (function () {
    function TableHead() {
        this.display = '';
        this.className = '';
    }
    return TableHead;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types/table.meta.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The Table Meta class is used for type definition.
 * @record
 * @template T
 */
function TableMeta() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types/table.sorting.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Sorting requirements
 */
var  /**
 * Sorting requirements
 */
TableSorting = /** @class */ (function () {
    function TableSorting() {
    }
    return TableSorting;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/types/table.update-data-type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Data editing variable interface
 * @record
 */
function TableUpdateDataType() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: logo-software-table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=logo-software-table.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/samples/src/app/logo/table-sample/table-showcase/table-showcase.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/samples/src/app/logo/table-sample/table-showcase/table-showcase.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<logo-table\n  #districtTable\n  class=\"no-bootstrap\"\n  [actions]=\"actions\"\n  [automatic]=\"true\"\n  (onCreateAccepted)=\"onCreateAccepted($event)\"\n  [pageSize]=\"5\"\n  [columns]=\"tableDummyData.columns\"\n  [draggable]=\"false\"\n  [events]=\"tableDummyData.events\"\n  [excel]=\"tableDummyData.excel\"\n  [hasFilter]=\"true\"\n  [hasPaging]=\"true\"\n  [heads]=\"tableDummyData.heads\"\n  [multiSelect]=\"false\"\n  [pageNumber]=\"3\"\n  [rows]=\"tableDummyData.rows\"\n  [refresh]=\"true\"\n  [delete]=\"true\"\n  [serverSide]=\"serverSide\"\n  [service]=\"{url: 'http://localhost:4300/assets/dummy/table.json?expandLevel=1&expand=Tenant', method: 'GET'}\"\n  [sort]=\"true\"\n  [height]=\"'100%'\"\n  [index]=\"true\"\n  [create]=\"true\"\n  [editable]=\"false\"\n  [oDataIdentityField]=\"'id'\"\n  [oDataStatus]=\"false\"\n  [paas]=\"false\"\n  (onCreateHttpError)=\"onCreateHttpError($event)\"\n  [mapPath]=\"'data'\"\n  (onCreateHttpSucceed)=\"onCreateHttpSucceed($event)\"\n  (onDeleteClicked)=\"onDeleteClicked($event)\"\n  (onDeleteHttpError)=\"onDeleteHttpError($event)\"\n  (onDeleteHttpSucceed)=\"onDeleteHttpSucceed($event)\"\n  (onHttpError)=\"onHttpError($event)\"\n  (onHttpHeaders)=\"onHttpHeaders($event)\"\n  (onHttpParams)=\"onHttParams($event)\"\n  (onHttpResponseModifier)=\"onHttpResponseModifier($event)\"\n  (onHttpSucceed)=\"onHttpSucceed($event)\"\n  (onTrClicked)=\"onTrClicked($event)\"\n  (onRenderCompleted)=\"onRenderCompleted($event)\"\n  (onTrDblClicked)=\"onTrDblClicked($event)\"\n  (onUpdateAccepted)=\"onUpdateAccepted($event)\"\n  (onUpdateBlur)=\"onUpdateBlur($event)\"\n  (onUpdateCancel)=\"onUpdateCancel($event)\"\n  (onUpdateChange)=\"onUpdateChange($event)\"\n  (onUpdateFocus)=\"onUpdateFocus($event)\"\n  (onUpdateHttpError)=\"onUpdateHttpError($event)\"\n  (onUpdateHttpSucceed)=\"onUpdateHttpSucceed($event)\"\n>\n  <!--  [rows]=\"tableDummyData.rows\" -->\n  <ng-template\n    #columns\n    let-actions=\"actions\"\n    let-columns=\"columns\" let-filter=\"filter\" let-first=\"isFirst\" let-heads=\"heads\"\n    let-createHead=\"createHead\" let-i=\"index\" let-last=\"isLast\" let-odd=\"isOdd\" let-row=\"row\"\n  >\n    <td>\n      <button>{{createHead ? 'great' : row?.zone?.name || 'No Data'}}</button>\n    </td>\n    <td>\n      <ng-container *ngIf=\"last; else b\" [ngTemplateOutlet]=\"a\"></ng-container>\n    </td>\n  </ng-template>\n  <ng-template\n    #expander\n    let-actions=\"actions\"\n    let-columns=\"columns\" let-filter=\"filter\" let-first=\"isFirst\" let-heads=\"heads\" let-i=\"index\"\n    let-last=\"isLast\" let-odd=\"isOdd\" let-open=\"isOpen\" let-row=\"row\"\n  >\n    <logo-table\n      [columns]=\"tableDummyData.columns\"\n      [rows]=\"tableDummyData.rows\"\n      (onTrClicked)=\"onTrClickedChild($event)\"\n      [pageSize]=\"5\"\n      [parentIndex]=\"i\"\n      [parentRow]=\"row\"\n      [service]=\"{url: 'http://localhost:4300/assets/dummy/table.json?id='+row.percentage+'&expandLevel=1&expand=Tenant', method: 'GET'}\"\n      [serverSide]=\"false\"\n    >\n    </logo-table>\n  </ng-template>\n  <expander [expandable]=\"expanderEmitter\"></expander>\n</logo-table>\n<ng-template #a>a</ng-template>\n<ng-template #b>b</ng-template>\n"

/***/ }),

/***/ "./projects/samples/src/app/logo/table-sample/table-sample-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./projects/samples/src/app/logo/table-sample/table-sample-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: TableSampleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSampleRoutingModule", function() { return TableSampleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _table_showcase_table_showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-showcase/table-showcase.component */ "./projects/samples/src/app/logo/table-sample/table-showcase/table-showcase.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'table-showcase/table-showcase.component',
        component: _table_showcase_table_showcase_component__WEBPACK_IMPORTED_MODULE_2__["TableShowcaseComponent"],
    },
];
var TableSampleRoutingModule = /** @class */ (function () {
    function TableSampleRoutingModule() {
    }
    TableSampleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], TableSampleRoutingModule);
    return TableSampleRoutingModule;
}());



/***/ }),

/***/ "./projects/samples/src/app/logo/table-sample/table-sample.module.ts":
/*!***************************************************************************!*\
  !*** ./projects/samples/src/app/logo/table-sample/table-sample.module.ts ***!
  \***************************************************************************/
/*! exports provided: TableSampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSampleModule", function() { return TableSampleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _table_sample_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-sample-routing.module */ "./projects/samples/src/app/logo/table-sample/table-sample-routing.module.ts");
/* harmony import */ var _table_showcase_table_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-showcase/table-showcase.component */ "./projects/samples/src/app/logo/table-sample/table-showcase/table-showcase.component.ts");
/* harmony import */ var _logo_software_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @logo-software/table */ "./node_modules/@logo-software/table/fesm5/logo-software-table.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TableSampleModule = /** @class */ (function () {
    function TableSampleModule() {
    }
    TableSampleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_table_showcase_table_showcase_component__WEBPACK_IMPORTED_MODULE_3__["TableShowcaseComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _table_sample_routing_module__WEBPACK_IMPORTED_MODULE_2__["TableSampleRoutingModule"], _logo_software_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"]],
            exports: [_table_showcase_table_showcase_component__WEBPACK_IMPORTED_MODULE_3__["TableShowcaseComponent"]],
        })
    ], TableSampleModule);
    return TableSampleModule;
}());



/***/ }),

/***/ "./projects/samples/src/app/logo/table-sample/table-showcase/table-showcase.component.scss":
/*!*************************************************************************************************!*\
  !*** ./projects/samples/src/app/logo/table-sample/table-showcase/table-showcase.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zYW1wbGVzL3NyYy9hcHAvbG9nby90YWJsZS1zYW1wbGUvdGFibGUtc2hvd2Nhc2UvdGFibGUtc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./projects/samples/src/app/logo/table-sample/table-showcase/table-showcase.component.ts":
/*!***********************************************************************************************!*\
  !*** ./projects/samples/src/app/logo/table-sample/table-showcase/table-showcase.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TableShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableShowcaseComponent", function() { return TableShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _logo_software_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @logo-software/table */ "./node_modules/@logo-software/table/fesm5/logo-software-table.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableShowcaseComponent = /** @class */ (function () {
    function TableShowcaseComponent(http, cd, ngZone) {
        this.http = http;
        this.cd = cd;
        this.ngZone = ngZone;
        this.actions = [
            {
                click: function (table) {
                    table.serverSide = !table.serverSide;
                    table.load();
                },
                display: "",
                className: 'person',
                classFunction: function (table) { return table.serverSide ? 'button-selected' : 'person'; },
                disable: false,
            },
        ];
        this.tableDummyData = {
            status: true,
            list: [],
            columns: [
                { display: 'ID', variablePath: 'id', filterType: 'text', hidden: false, editable: true },
                {
                    display: 'Secure ID',
                    variablePath: function (row) { return 'id'; },
                    filterType: 'text',
                    sortable: true,
                    sortingKey: 'id',
                    editable: false,
                },
                {
                    display: 'path sample',
                    variablePath: function (row) { return row.percentage > 9 ? 'percentage' : 'because'; },
                    filterType: 'text',
                    sortable: true,
                    sortingKey: 'because',
                    expand: true,
                },
                { display: 'zone.name', variablePath: 'zone.name', filterType: 'text', sortable: true },
                {
                    display: 'percentage number',
                    variablePath: 'percentage',
                    filterType: 'currency',
                    format: '',
                    sortable: true,
                },
                {
                    display: 'percentage %',
                    variablePath: 'percentage',
                    filterType: 'percent',
                    format: '1.1-3:"it"',
                    sortable: true,
                },
                { display: 'date', variablePath: 'hour', filterType: 'date', format: 'yyyy.MM.dd HH:mm', sortable: true },
                { display: 'surname', variablePath: 'surname', filterType: 'custom' },
                { display: 'because', variablePath: 'because', filterType: 'number', format: '4.2-3', sortable: true },
                {
                    display: 'Func Samp 1',
                    variableFunction: function (row) { return row.percentage >= 34 ? row.zone && row.zone.name + ' <b>text</b>' : row.id; },
                    className: 'total',
                    classFunction: function (row) { return (row.percentage >= 20 ? 'bigger' : 'smaller'); },
                    sortable: true,
                    sortingKey: 'zone.name',
                },
                {
                    display: 'Func Samp 2',
                    variableFunction: function (row) { return row.percentage > 9 ? row.percentage + ' <i>added</i>' : row.because ? row.because : 'yok ' + '<b>not</b>'; },
                    className: 'total',
                    sortable: true,
                    sortingKey: 'zone.name',
                },
            ],
            heads: [
                {
                    display: 'Custom Head 1',
                    className: 'cus01',
                },
                {
                    display: 'Custom Head 2',
                    className: 'cus02',
                },
            ],
            rows: [
                { id: 0, zone: { name: 'Çorum' }, percentage: 0.133191, hour: '2019-01-13', surname: 'konakcı', because: 2132131 },
                { id: 1, zone: { name: 'Adana' }, percentage: 633, hour: '2019-12-22', surname: 'meydancı', because: 1235 },
                { id: 2, zone: { name: 'İstanbul' }, percentage: 314, hour: '2018-03-13', surname: 'uyar', because: 54466 },
                { id: 3, zone: { name: 'Samsun' }, percentage: 554, hour: '2017-06-15', surname: 'güler', because: 65467 },
                { id: 4, zone: { name: 'Çorum' }, percentage: 219, hour: '2019-12-31', surname: 'sevim', because: 9876543 },
                { id: 5, zone: { name: 'Ceyhan' }, percentage: 641, hour: '2013-05-11', surname: 'çakmak', because: 4556132 },
                { id: 6, zone: { name: 'Şile' }, percentage: 134, hour: '2014-06-05', surname: 'duran', because: 543567 },
                { id: 7, zone: { name: 'Konya' }, percentage: 455, hour: '2019-05-23', surname: 'güleç', because: 743567 },
                { id: 8, zone: { name: 'Diyarbakır' }, percentage: 148, hour: '2019-07-05', surname: 'toraman', because: 98723567 },
                { id: 9, zone: { name: 'Malatya' }, percentage: 316, hour: '2019-03-15', surname: 'kandır', because: 43787654 },
                { id: 10, zone: { name: 'Kastamonu' }, percentage: 334, hour: '2019-08-13', surname: 'misafir', because: 123824 },
                { id: 11, zone: { name: 'Bitlis' }, percentage: 545, hour: '2019-02-03', surname: 'deneme', because: 234567 },
                { id: 12, zone: { name: 'Polatlı' }, percentage: 195, hour: '2019-09-21', surname: 'deneme', because: 23589 },
                { id: 13, zone: { name: 'Van' }, percentage: 161, hour: '2011-11-19', surname: 'deneme', because: 354353 },
                { id: 14, zone: { name: 'Bartın' }, percentage: 314, hour: '2011-03-23', surname: 'deneme', because: 34539 },
                { id: 15, zone: { name: 'Kadıköy' }, percentage: 13425, hour: '2016-02-27', surname: 'deneme', because: 93922 },
            ],
            events: {
                drag: {
                    start: function () { return console.log('dragged started'); },
                    complete: function () { return console.log('dragged completed'); },
                },
            },
            excel: {
                status: true,
                complete: function (data) {
                    console.log('trigger excel');
                    console.log('excel, table: ', data);
                },
            },
        };
        this.serverSide = false;
        this.getUser();
    }
    TableShowcaseComponent.prototype.getUser = function () {
        this.http.get('http://localhost:3100/user/123').subscribe(function (data) { return console.log('####data: ', data); });
    };
    TableShowcaseComponent.prototype.action = function (label, table) {
        console.log(label, table);
    };
    TableShowcaseComponent.prototype.expanderEmitter = function (data) {
        return data.row.percentage > 5;
    };
    TableShowcaseComponent.prototype.onTrClicked = function (_a) {
        var row = _a.row, event = _a.event, index = _a.index;
        console.log('clicked', row);
    };
    TableShowcaseComponent.prototype.onTrDblClicked = function (_a) {
        var row = _a.row, event = _a.event, index = _a.index;
        console.log('clicked', row);
    };
    TableShowcaseComponent.prototype.onRenderCompleted = function (data) {
        console.log('completed: ', data);
    };
    TableShowcaseComponent.prototype.onHttpSucceed = function (data) {
        console.log('loaded: ', data);
    };
    TableShowcaseComponent.prototype.onUpdateFocus = function (data) {
        console.log('sample focus: ', data);
    };
    TableShowcaseComponent.prototype.onUpdateBlur = function (data) {
        console.log('sample blur: ', data);
    };
    TableShowcaseComponent.prototype.onUpdateChange = function (data) {
        console.log('sample editing: ', data);
    };
    TableShowcaseComponent.prototype.onUpdateAccepted = function (data) {
        console.log('sample accept: ', data);
        this.tableDummyData.rows[data.row.id] = data.row;
        // data.clear(false, data);
    };
    TableShowcaseComponent.prototype.onUpdateCancel = function (data) {
        console.log('sample cancel: ', data);
    };
    TableShowcaseComponent.prototype.onCreateAccepted = function (data) {
        // data.clear(true);
        console.log('sample new accept: ', data);
        // const newData = JSON.parse(JSON.stringify(this.tableDummyData.rows));
        // newData.push(data.row);
        // this.tableDummyData.rows = newData;
        this.tableDummyData.rows.push(data.row);
        this.tableDummyData.rows = this.tableDummyData.rows.slice();
        // data.clear(true);
    };
    TableShowcaseComponent.prototype.onHttParams = function (param) {
        param['newValuetoParam'] = 333;
    };
    TableShowcaseComponent.prototype.onHttpHeaders = function (headers) {
        headers['Content-Type'] = 'application/json';
        headers['Authorization'] = 'Bearer application/json';
        headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0;) Gecko/20100101 Firefox/68.0';
    };
    TableShowcaseComponent.prototype.onHttpResponseModifier = function (response) {
        Object.assign(response, { totalCount: 333334 });
        response.totalCount = 3333;
    };
    TableShowcaseComponent.prototype.onHttpError = function (error) {
        console.log(error);
    };
    TableShowcaseComponent.prototype.onDeleteClicked = function (row) {
        console.log(row);
    };
    TableShowcaseComponent.prototype.onDeleteHttpSucceed = function (response) {
        console.log(response);
    };
    TableShowcaseComponent.prototype.onDeleteHttpError = function (error) {
        console.log(error);
    };
    TableShowcaseComponent.prototype.onUpdateHttpSucceed = function (response) {
        console.log(response);
    };
    TableShowcaseComponent.prototype.onUpdateHttpError = function (error) {
        console.log(error);
    };
    TableShowcaseComponent.prototype.onCreateHttpSucceed = function (response) {
        console.log(response);
    };
    TableShowcaseComponent.prototype.onCreateHttpError = function (error) {
        console.log(error);
    };
    TableShowcaseComponent.prototype.onTrClickedChild = function (row) {
        console.log(row);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_logo_software_table__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], { static: true }),
        __metadata("design:type", Object)
    ], TableShowcaseComponent.prototype, "tableComponent", void 0);
    TableShowcaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'logo-table-showcase',
            template: __webpack_require__(/*! raw-loader!./table-showcase.component.html */ "./node_modules/raw-loader/index.js!./projects/samples/src/app/logo/table-sample/table-showcase/table-showcase.component.html"),
            styles: [__webpack_require__(/*! ./table-showcase.component.scss */ "./projects/samples/src/app/logo/table-sample/table-showcase/table-showcase.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], TableShowcaseComponent);
    return TableShowcaseComponent;
}());



/***/ })

}]);
//# sourceMappingURL=table-sample-table-sample-module.js.map