/*
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { LanguageConfiguration, LanguageConfigurationFactory } from './language.configuration';
import { LanguageHttpLoaderFactory, LanguageLoader } from './language.loader';
import { LanguagePipe } from './language.pipe';
import { LanguageInitSetting } from './language';
import { LanguageService } from './language.service';
import { LanguageStoreService } from '../language.store';

/**
 * With this module you can easily translate any text to specified language on the fly.
 * Set configuration properties, if default language is different from English.
 * For example, import section on you NgModule and set configuration
 *
 * @stacked-example(LanguageModule, logo/language-sample/language-showcase/language-showcase.component)
 *
 * ### Installation
 *
 * All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
 * install Language Module:
 *
 * ```bash
 * $ npm set registry https://registry.npmjs.org/
 * $ npm install @logo-software/language -s
 * ```
 *
 * Just import it to your project of `@NgModule` import section.
 *
 * ```typescript
 * @NgModule({
 *  imports: [
 *    CommonModule,
 *    LanguageModule.forRoot({ abbr: 'en', readFromFile: false, extension: 'json', path: 'languages' }),
 *  ],
 * })
 * export class AppModule {
 * }
 * ```
 *
 * There are three steps:
 *
 * - Install package using `npm install @logo-software/language`
 * - add it to your AppModule imports code block using `LanguageModule.forRoot(languageConf)`
 * - Put your language files to your `src/assets/languages` folder (`src/assets/language/en-En.json` etc.).
 *
 * ### Configuration
 *
 * Before AppModule bootstrap, configuration constants must be set. The configuration file type is a [LanguageInitSetting](docs/logo-business-solutions/language-module#languageinitsetting) object type. There are several parameters for configuration:
 *
 * - **abbr**: Codes for the Representation of Names of Languages are described at [ISO 639-1](http://www.loc.gov/standards/iso639-2/php/code_list.php) Code.
 * - **path**: HTTP request path that contains language files. **Note:** When **readFromFile** is **true**, you must put your language files under your `src/assets/languages` folder. And this property will not effect the project. If **readFromFile** is **false**, You can set your language files path anywhere you request with path option.
 * - **readFromFile**: If set readFromFile to true data will be load from file system and HTTP request will not call. Otherwise data will be requested over HTTP protocol. Default value is false.
 * - **extension**: The file extension will be download. Default is **json**. If change to another it will add to end of line this extension. With Following code, HTTP request will be send to the `http(s)://.../path/of/lang/en-GB.xyz` address.
 *
 * ```typescript
 * // path will look to 'src/assets/`languages`' with this option
 * const lang = {abbr: 'ro', readFromFile: false, extension: 'json', path: 'languages',}
 * ```
 */
@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations: [LanguagePipe],
  exports: [LanguagePipe],
})
export class LanguageModule {
  constructor(@Optional() @SkipSelf() parentModule: LanguageModule) {
  }

  static forRoot(config?: LanguageInitSetting): ModuleWithProviders<LanguageModule> {
    return {
      ngModule: LanguageModule,
      providers: [
        LanguageStoreService,
        LanguageService,
        {provide: LanguageLoader, useFactory: LanguageHttpLoaderFactory, deps: [HttpClient]},
        {provide: LanguageInitSetting, useValue: config},
        {provide: LanguageConfiguration, useFactory: LanguageConfigurationFactory, deps: [LanguageInitSetting]},
      ],
    };
  }

  static forChild(config?: LanguageInitSetting): ModuleWithProviders<LanguageModule> {
    return <ModuleWithProviders<any>> {
      ngModule: LanguageModule,
      providers: [LanguageService],
    };
  }
}
