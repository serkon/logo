(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["language-sample-language-sample-module"],{

/***/ "./node_modules/@logo-software/language/fesm5/logo-software-language.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@logo-software/language/fesm5/logo-software-language.js ***!
  \******************************************************************************/
/*! exports provided: Language, LanguageConfiguration, LanguageConfigurationFactory, LanguageHttpLoader, LanguageHttpLoaderFactory, LanguageInitSetting, LanguageLoader, LanguageModule, LanguagePipe, LanguageService, LanguageStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageConfiguration", function() { return LanguageConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageConfigurationFactory", function() { return LanguageConfigurationFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageHttpLoader", function() { return LanguageHttpLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageHttpLoaderFactory", function() { return LanguageHttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageInitSetting", function() { return LanguageInitSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageLoader", function() { return LanguageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageModule", function() { return LanguageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePipe", function() { return LanguagePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageStoreService", function() { return LanguageStoreService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");





/**
 * @fileoverview added by tsickle
 * Generated from: lib/language.configuration.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */
/**
 * Creates LanguageConfiguration object which is used at LanguageService
 * This class added to LanguageModule and it accept config file as a provider
 * You can set configuration from your app.module.ts
 *
 * Example:
 * const LANG = [LanguageModule.forRoot({abbr: 'tr'})];
 * // or const MODULES = [LanguageModule.forRoot({abbr: 'tr', readFromFile: false'})];
 * // or const MODULES = [LanguageModule.forRoot({abbr: 'tr', readFromFile: false, path: '/assets/languages'})];
 * // or const MODULES = [LanguageModule.forRoot({abbr: 'tr', readFromFile: true'})];
 *
 * \@NgModule({
 *  declarations: [AppComponent],
 *  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, LANG],
 *  providers: [],
 *  bootstrap: [AppComponent]
 * })
 * export class AppModule {}
 */
var  /**
 * Creates LanguageConfiguration object which is used at LanguageService
 * This class added to LanguageModule and it accept config file as a provider
 * You can set configuration from your app.module.ts
 *
 * Example:
 * const LANG = [LanguageModule.forRoot({abbr: 'tr'})];
 * // or const MODULES = [LanguageModule.forRoot({abbr: 'tr', readFromFile: false'})];
 * // or const MODULES = [LanguageModule.forRoot({abbr: 'tr', readFromFile: false, path: '/assets/languages'})];
 * // or const MODULES = [LanguageModule.forRoot({abbr: 'tr', readFromFile: true'})];
 *
 * \@NgModule({
 *  declarations: [AppComponent],
 *  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, LANG],
 *  providers: [],
 *  bootstrap: [AppComponent]
 * })
 * export class AppModule {}
 */
LanguageConfiguration = /** @class */ (function () {
    function LanguageConfiguration() {
        this.list = [
            { abbr: 'en', code: 'en-EN', display: 'English' },
            { abbr: 'tr', code: 'tr-TR', display: 'Türkçe' },
        ];
        this.default = this.list[0];
        this.assetsPath = 'languages';
        this.extension = 'json';
        this.readFromFile = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    LanguageConfiguration.prototype.findLanguage = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.list.find((/**
         * @param {?} language
         * @return {?}
         */
        function (language) { return language.abbr === value || language.code === value; })) || null;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LanguageConfiguration.prototype.setReadFromFile = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.readFromFile = !!value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LanguageConfiguration.prototype.setDefault = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.default = this.findLanguage(value) || this.list[0];
    };
    /**
     * @param {?} path
     * @return {?}
     */
    LanguageConfiguration.prototype.setPath = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        this.assetsPath = path;
    };
    /**
     * @param {?} extension
     * @return {?}
     */
    LanguageConfiguration.prototype.setExtension = /**
     * @param {?} extension
     * @return {?}
     */
    function (extension) {
        this.extension = extension;
    };
    /**
     * @param {?} language
     * @return {?}
     */
    LanguageConfiguration.prototype.addLanguage = /**
     * @param {?} language
     * @return {?}
     */
    function (language) {
        /** @type {?} */
        var getLang = this.findLanguage(language.abbr);
        if (!getLang) {
            this.list.push(language);
        }
        else {
            /** @type {?} */
            var index = this.list.indexOf(getLang);
            if (index > -1) {
                this.list[index] = language;
            }
        }
    };
    return LanguageConfiguration;
}());
if (false) {}
/**
 * @param {?} initSetting
 * @return {?}
 */
function LanguageConfigurationFactory(initSetting) {
    /** @type {?} */
    var languageConfiguration = new LanguageConfiguration();
    languageConfiguration.setDefault(initSetting && initSetting.abbr ? initSetting.abbr : 'en');
    languageConfiguration.setPath(initSetting && initSetting.path ? initSetting.path : '/assets/languages');
    languageConfiguration.setReadFromFile(!!initSetting && !!initSetting.readFromFile);
    if (initSetting && initSetting.extension) {
        languageConfiguration.setExtension(initSetting.extension);
    }
    return languageConfiguration;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/language.loader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
LanguageLoader = /** @class */ (function () {
    function LanguageLoader() {
    }
    return LanguageLoader;
}());
if (false) {}
var LanguageHttpLoader = /** @class */ (function () {
    function LanguageHttpLoader(http) {
        this.http = http;
    }
    /**
     * @param {?} lang
     * @param {?} configuration
     * @return {?}
     */
    LanguageHttpLoader.prototype.getTranslation = /**
     * @param {?} lang
     * @param {?} configuration
     * @return {?}
     */
    function (lang, configuration) {
        return this.http.get(configuration.assetsPath + "/" + (lang || configuration.default.code) + "." + configuration.extension);
    };
    return LanguageHttpLoader;
}());
if (false) {}
/**
 * @param {?} http
 * @return {?}
 */
function LanguageHttpLoaderFactory(http) {
    return new LanguageHttpLoader(http);
}

/**
 * @fileoverview added by tsickle
 * Generated from: language.store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function LanguageFile() { }
/**
 * @param {?} file
 * @return {?}
 */
function readFile(file) {
    return new Promise((/**
     * @param {?} resolve
     * @param {?} reject
     * @return {?}
     */
    function (resolve, reject) {
        /** @type {?} */
        var fr = new FileReader();
        fr.onload = (/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return resolve(fr.result); });
        fr.readAsText(file);
    }));
}
var LanguageStoreService = /** @class */ (function () {
    function LanguageStoreService(http, config) {
        this.http = http;
        this.config = config;
        this.onLoadComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.file = {};
        this.changeLanguage();
    }
    /**
     * @return {?}
     */
    LanguageStoreService.prototype.changeLanguage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var method = this.config.readFromFile ?
            (/**
             * @return {?}
             */
            function () { return _this.getLanguageFromPath(_this.config.default); }) :
            (/**
             * @return {?}
             */
            function () { return _this.getLanguageOverHttp(_this.config.default); });
        window.setTimeout((/**
         * @return {?}
         */
        function () { return method(); }), 0);
    };
    /**
     * @param {?} language
     * @return {?}
     */
    LanguageStoreService.prototype.getLanguageOverHttp = /**
     * @param {?} language
     * @return {?}
     */
    function (language) {
        var _this = this;
        /** @type {?} */
        var path = "assets/" + this.config.assetsPath + "/" + (language.code || this.config.default.code) + "." + this.config.extension;
        ((/** @type {?} */ (this.http.get(path)))).subscribe((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            _this.file = item;
            _this.onLoadComplete.emit();
        }));
    };
    /**
     * @param {?} language
     * @return {?}
     */
    LanguageStoreService.prototype.getLanguageFromPath = /**
     * @param {?} language
     * @return {?}
     */
    function (language) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__generator"])(this, function (_a) {
                // import(`../../../../src/assets/languages/${this.config.default.code}.${this.config.extension}`)
                // console.log(readFile(`../../../../src/assets/${this.config.assetsPath}/${this.config.default.code}.${this.config.extension}`));
                __webpack_require__("./src/assets lazy recursive ^\\.\\/.*$")("./" + this.config.assetsPath + "/" + this.config.default.code + "." + this.config.extension)
                    .then((/**
                 * @param {?} file
                 * @return {?}
                 */
                function (file) {
                    _this.file = file;
                    _this.onLoadComplete.emit();
                }));
                return [2 /*return*/];
            });
        });
    };
    LanguageStoreService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
    ];
    /** @nocollapse */
    LanguageStoreService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: LanguageConfiguration }
    ]; };
    return LanguageStoreService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/language.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Language Service need for translation operation. It is injectable.
 *
 * ```typescript
 * import {Component} from '\@angular/core';
 * import {LanguageService} from '~/shared/services/language/language.service';
 * \@Component({
 *  selector: 'app-home',
 *  templateUrl: 'home.page.html',
 *  styleUrls: ['home.page.scss'],
 *  })
 * export class HomePage {
 *    constructor(private language: LanguageService) {
 *      this.language.onLoadComplete.subscribe(() => {
 *        console.log(this.language.translate('hello_world'));
 *      });
 *    }
 *    change() {
 *      this.language.setLanguage('en');
 *    }
 *  }
 * ```
 *
 * \@stacked-example(LanguageModule, logo/language/language-showcase/language-showcase.component)
 */
var LanguageService = /** @class */ (function () {
    function LanguageService(configuration, store) {
        this.configuration = configuration;
        this.store = store;
        /**
         * This method triggered when data received
         */
        this.onLoadComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.language = this.configuration.default;
        this.onLoadComplete = this.store.onLoadComplete;
    }
    Object.defineProperty(LanguageService.prototype, "language", {
        /**
         * Returns default Language
         */
        get: /**
         * Returns default Language
         * @return {?}
         */
        function () {
            return this._language;
        },
        /**
         * Sets default language
         * @param lang language parameter setter
         */
        set: /**
         * Sets default language
         * @param {?} lang language parameter setter
         * @return {?}
         */
        function (lang) {
            this._language = lang;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets default language
     * @param value Default language file will be set to this value
     */
    /**
     * Sets default language
     * @param {?} value Default language file will be set to this value
     * @return {?}
     */
    LanguageService.prototype.setLanguage = /**
     * Sets default language
     * @param {?} value Default language file will be set to this value
     * @return {?}
     */
    function (value) {
        if (this.language.abbr !== value && this.language.code !== value) {
            this.configuration.setDefault(value);
            this.language = this.configuration.default;
            this.store.changeLanguage();
        }
    };
    /**
     * Reload current language
     */
    /**
     * Reload current language
     * @param {?=} value
     * @return {?}
     */
    LanguageService.prototype.reload = /**
     * Reload current language
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        this.configuration.setDefault(value || this.configuration.default.abbr);
        this.language = this.configuration.default;
        this.store.changeLanguage();
    };
    /**
     * Adds new language to scope
     * @param language
     */
    /**
     * Adds new language to scope
     * @param {?} language
     * @return {?}
     */
    LanguageService.prototype.addLanguage = /**
     * Adds new language to scope
     * @param {?} language
     * @return {?}
     */
    function (language) {
        this.configuration.addLanguage(language);
    };
    /**
     * Returns Language of given abbr code
     * @param value
     */
    /**
     * Returns Language of given abbr code
     * @param {?} value
     * @return {?}
     */
    LanguageService.prototype.findLanguage = /**
     * Returns Language of given abbr code
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.configuration.findLanguage(value);
    };
    /**
     * Returns all Languages as an Array<Language>
     */
    /**
     * Returns all Languages as an Array<Language>
     * @return {?}
     */
    LanguageService.prototype.list = /**
     * Returns all Languages as an Array<Language>
     * @return {?}
     */
    function () {
        return this.configuration.list;
    };
    /**
     * Manually translate given key to default language with parameters. __Example:__
     * ```typescript
     * this.languageService.translate('user_info_text', ['Serkan', 'Logo Software', 2]);
     * ```
     * **en-En.json**
     * ```JSON
     * {  ...,
     *    "user_info_text": "Dear, {0} thanks for be a part of {1} for {3} year(s)",
     *    ...
     * }
     * ```
     * This will render ~~"Dear Serkan, thanks for be a part of Logo Software for 2 years"~~
     * @param key
     * @param params
     */
    /**
     * Manually translate given key to default language with parameters. __Example:__
     * ```typescript
     * this.languageService.translate('user_info_text', ['Serkan', 'Logo Software', 2]);
     * ```
     * **en-En.json**
     * ```JSON
     * {  ...,
     *    "user_info_text": "Dear, {0} thanks for be a part of {1} for {3} year(s)",
     *    ...
     * }
     * ```
     * This will render ~~"Dear Serkan, thanks for be a part of Logo Software for 2 years"~~
     * @param {?} key
     * @param {?=} params
     * @return {?}
     */
    LanguageService.prototype.translate = /**
     * Manually translate given key to default language with parameters. __Example:__
     * ```typescript
     * this.languageService.translate('user_info_text', ['Serkan', 'Logo Software', 2]);
     * ```
     * **en-En.json**
     * ```JSON
     * {  ...,
     *    "user_info_text": "Dear, {0} thanks for be a part of {1} for {3} year(s)",
     *    ...
     * }
     * ```
     * This will render ~~"Dear Serkan, thanks for be a part of Logo Software for 2 years"~~
     * @param {?} key
     * @param {?=} params
     * @return {?}
     */
    function (key, params) {
        /** @type {?} */
        var translatedString = this.store.file[key] || key;
        /** @type {?} */
        var type = params !== null && typeof params !== 'undefined' ? params.constructor.name : null;
        if (type === 'Array') {
            params.forEach((/**
             * @param {?} param
             * @param {?} paramIndex
             * @return {?}
             */
            function (param, paramIndex) {
                translatedString = translatedString.replace(new RegExp("{" + paramIndex + "}", 'g'), param);
            }));
        }
        else if (type === 'Object') {
            Object.keys(params).forEach((/**
             * @param {?} keyName
             * @param {?} index
             * @return {?}
             */
            function (keyName, index) {
                translatedString = translatedString.replace(new RegExp("{" + keyName + "}", 'g'), params[keyName]);
            }));
        }
        return translatedString;
    };
    /**
     * Returns the language code name from the browser, e.g. "de"
     */
    /**
     * Returns the language code name from the browser, e.g. "de"
     * @return {?}
     */
    LanguageService.prototype.getBrowserLang = /**
     * Returns the language code name from the browser, e.g. "de"
     * @return {?}
     */
    function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        /** @type {?} */
        var browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserLang = browserLang || window.navigator.language;
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    };
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     */
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     * @return {?}
     */
    LanguageService.prototype.getBrowserCultureLang = /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     * @return {?}
     */
    function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        /** @type {?} */
        var browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserCultureLang = browserCultureLang || window.navigator.language;
        return browserCultureLang;
    };
    LanguageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
    ];
    /** @nocollapse */
    LanguageService.ctorParameters = function () { return [
        { type: LanguageConfiguration },
        { type: LanguageStoreService }
    ]; };
    return LanguageService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/language.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Translate any text in html to defined language property.
 *
 * ```html
 * <p>{{"hello_world_with_param"| translate:['Mars']}}</p>
 * ```
 * In language file it contains `hello_world_with_param`. If not it would display key value.
 *
 * ```json
 * {
 *   "hello_world_with_param": "Merhaba Dünyalı!, Ben {0}'tan sesleniyorum."
 * }
 * ```
 */
var LanguagePipe = /** @class */ (function () {
    function LanguagePipe(language) {
        this.language = language;
    }
    /**
     * @param {?} value
     * @param {?=} params
     * @return {?}
     */
    LanguagePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} params
     * @return {?}
     */
    function (value, params) {
        return this.language.translate(value, params);
    };
    LanguagePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"], args: [{
                    name: 'translate',
                    pure: false,
                },] }
    ];
    /** @nocollapse */
    LanguagePipe.ctorParameters = function () { return [
        { type: LanguageService }
    ]; };
    return LanguagePipe;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/language.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */
/**
 * Language file definition class
 */
var  /**
 * Language file definition class
 */
Language = /** @class */ (function () {
    function Language() {
    }
    return Language;
}());
if (false) {}
/**
 * Before AppModule bootstrap, LanguageInitSetting object must be defined.
 * Example:
 * ```typescript
 * const lang = {code: 'en-GB', extension: 'xyz', abbr: 'en', path:'/path/of/lang'}
 * ```
 * HTTP request will be send to the `http(s)://..../assets/lang/en-GB.xyz` address
 */
var  /**
 * Before AppModule bootstrap, LanguageInitSetting object must be defined.
 * Example:
 * ```typescript
 * const lang = {code: 'en-GB', extension: 'xyz', abbr: 'en', path:'/path/of/lang'}
 * ```
 * HTTP request will be send to the `http(s)://..../assets/lang/en-GB.xyz` address
 */
LanguageInitSetting = /** @class */ (function () {
    function LanguageInitSetting() {
    }
    return LanguageInitSetting;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/language.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PIPES = [LanguagePipe];
/**
 * Import Language Module to your main module. For example, import section on you NgModule:
 *
 * ```typescript
 * import { LanguageModule } from '\@logo-software/language';
 *
 * \@NgModule({
 *  imports: [
 *    CommonModule,
 *    LanguageModule.forRoot({ abbr: 'en', readFromFile: false, extension: 'json', path: '/assets/languages' }),
 *  ],
 * })
 * export class AppModule {
 * }
 * ```
 */
var LanguageModule = /** @class */ (function () {
    function LanguageModule(parentModule) {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    LanguageModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: LanguageModule,
            providers: [
                LanguageStoreService,
                LanguageService,
                { provide: LanguageLoader, useFactory: LanguageHttpLoaderFactory, deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]] },
                { provide: LanguageInitSetting, useValue: config },
                { provide: LanguageConfiguration, useFactory: LanguageConfigurationFactory, deps: [LanguageInitSetting] },
            ],
        };
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    LanguageModule.forChild = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return (/** @type {?} */ ({
            ngModule: LanguageModule,
            providers: [LanguageService],
        }));
    };
    LanguageModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    providers: [],
                    declarations: [LanguagePipe],
                    exports: [LanguagePipe],
                },] }
    ];
    /** @nocollapse */
    LanguageModule.ctorParameters = function () { return [
        { type: LanguageModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"] }] }
    ]; };
    return LanguageModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: logo-software-language.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=logo-software-language.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/samples/src/app/logo/language-sample/language-showcase/language-showcase.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/samples/src/app/logo/language-sample/language-showcase/language-showcase.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Translate text sample: <span [innerHTML]=\"'login-info' | translate | safeHTML\"></span>\n  </nb-card-header>\n  <nb-card-body class=\"example-items-rows\">\n    <button (click)=\"setLanguage('tr')\" nbButton>Tr</button>\n    <button (click)=\"setLanguage('en')\" nbButton>En</button>\n    <button (click)=\"setLanguage('ro')\" nbButton>Ro</button>\n    <button (click)=\"setLanguage('ru')\" disabled nbButton>Ru</button>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./projects/samples/src/app/logo/language-sample/language-sample-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./projects/samples/src/app/logo/language-sample/language-sample-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: LanguageSampleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSampleRoutingModule", function() { return LanguageSampleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _language_showcase_language_showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language-showcase/language-showcase.component */ "./projects/samples/src/app/logo/language-sample/language-showcase/language-showcase.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'language-showcase/language-showcase.component',
        component: _language_showcase_language_showcase_component__WEBPACK_IMPORTED_MODULE_2__["LanguageShowcaseComponent"],
    },
];
var LanguageSampleRoutingModule = /** @class */ (function () {
    function LanguageSampleRoutingModule() {
    }
    LanguageSampleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], LanguageSampleRoutingModule);
    return LanguageSampleRoutingModule;
}());



/***/ }),

/***/ "./projects/samples/src/app/logo/language-sample/language-sample.module.ts":
/*!*********************************************************************************!*\
  !*** ./projects/samples/src/app/logo/language-sample/language-sample.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LanguageSampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSampleModule", function() { return LanguageSampleModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _logo_software_language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @logo-software/language */ "./node_modules/@logo-software/language/fesm5/logo-software-language.js");
/* harmony import */ var _logo_software_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @logo-software/core */ "./node_modules/@logo-software/core/fesm5/logo-software-core.js");
/* harmony import */ var _language_sample_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./language-sample-routing.module */ "./projects/samples/src/app/logo/language-sample/language-sample-routing.module.ts");
/* harmony import */ var _language_showcase_language_showcase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./language-showcase/language-showcase.component */ "./projects/samples/src/app/logo/language-sample/language-showcase/language-showcase.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var languageConf = {
    abbr: 'ro', readFromFile: false, extension: 'json', path: 'languages',
};
var LanguageSampleModule = /** @class */ (function () {
    function LanguageSampleModule() {
    }
    LanguageSampleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_language_showcase_language_showcase_component__WEBPACK_IMPORTED_MODULE_6__["LanguageShowcaseComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _language_sample_routing_module__WEBPACK_IMPORTED_MODULE_5__["LanguageSampleRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
                _logo_software_language__WEBPACK_IMPORTED_MODULE_3__["LanguageModule"].forRoot(languageConf),
                _logo_software_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"].forRoot(),
            ],
        })
    ], LanguageSampleModule);
    return LanguageSampleModule;
}());



/***/ }),

/***/ "./projects/samples/src/app/logo/language-sample/language-showcase/language-showcase.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./projects/samples/src/app/logo/language-sample/language-showcase/language-showcase.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zYW1wbGVzL3NyYy9hcHAvbG9nby9sYW5ndWFnZS1zYW1wbGUvbGFuZ3VhZ2Utc2hvd2Nhc2UvbGFuZ3VhZ2Utc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./projects/samples/src/app/logo/language-sample/language-showcase/language-showcase.component.ts":
/*!********************************************************************************************************!*\
  !*** ./projects/samples/src/app/logo/language-sample/language-showcase/language-showcase.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: LanguageShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageShowcaseComponent", function() { return LanguageShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logo_software_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @logo-software/language */ "./node_modules/@logo-software/language/fesm5/logo-software-language.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguageShowcaseComponent = /** @class */ (function () {
    function LanguageShowcaseComponent(language) {
        var _this = this;
        this.language = language;
        this.addLanguage();
        this.language.onLoadComplete.subscribe(function () {
            console.log(_this.language.translate('hello_world'));
        });
    }
    LanguageShowcaseComponent.prototype.change = function () {
        this.language.setLanguage('en');
    };
    LanguageShowcaseComponent.prototype.setLanguage = function (lang) {
        if (lang === void 0) { lang = 'tr'; }
        this.language.setLanguage(lang);
    };
    LanguageShowcaseComponent.prototype.addLanguage = function () {
        this.language.addLanguage({ abbr: 'ro', code: 'ro-RO', display: 'Romain' });
    };
    LanguageShowcaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'logo-language-showcase',
            template: __webpack_require__(/*! raw-loader!./language-showcase.component.html */ "./node_modules/raw-loader/index.js!./projects/samples/src/app/logo/language-sample/language-showcase/language-showcase.component.html"),
            styles: [__webpack_require__(/*! ./language-showcase.component.scss */ "./projects/samples/src/app/logo/language-sample/language-showcase/language-showcase.component.scss")]
        }),
        __metadata("design:paramtypes", [_logo_software_language__WEBPACK_IMPORTED_MODULE_1__["LanguageService"]])
    ], LanguageShowcaseComponent);
    return LanguageShowcaseComponent;
}());



/***/ }),

/***/ "./src/assets lazy recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./src/assets lazy ^\.\/.*$ namespace object ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./languages/en-EN.json": [
		"./src/assets/languages/en-EN.json",
		0
	],
	"./languages/ro-RO.json": [
		"./src/assets/languages/ro-RO.json",
		1
	],
	"./languages/tr-TR.json": [
		"./src/assets/languages/tr-TR.json",
		2
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/assets lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=language-sample-language-sample-module.js.map