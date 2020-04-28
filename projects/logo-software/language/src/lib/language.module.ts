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

const PIPES = [LanguagePipe];

/**
 * Import Language Module to your main module. For example, import section on you NgModule:
 *
 * ```typescript
 * import { LanguageModule } from '@logo-software/language';
 *
 * @NgModule({
 *  imports: [
 *    CommonModule,
 *    LanguageModule.forRoot({ abbr: 'en', readFromFile: false, extension: 'json', path: '/assets/languages' }),
 *  ],
 * })
 * export class AppModule {
 * }
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

  static forRoot(config?: LanguageInitSetting): ModuleWithProviders {
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

  static forChild(config?: LanguageInitSetting): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: LanguageModule,
      providers: [LanguageService],
    };
  }
}
