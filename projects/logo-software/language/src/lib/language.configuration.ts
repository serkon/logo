/*
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Language, LanguageInitSetting } from './language';

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
 * @NgModule({
 *  declarations: [AppComponent],
 *  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, LANG],
 *  providers: [],
 *  bootstrap: [AppComponent]
 * })
 * export class AppModule {}
 */
export class LanguageConfiguration {
  public list: Language[] = [
    {abbr: 'en', code: 'en-EN', display: 'English'},
    {abbr: 'tr', code: 'tr-TR', display: 'Türkçe'},
  ];
  public default = this.list[0];
  public assetsPath = 'languages';
  public extension = 'json';
  public readFromFile = false;

  findLanguage(value: string): Language {
    return this.list.find(language => language.abbr === value || language.code === value) || null;
  }

  setReadFromFile(value: boolean) {
    this.readFromFile = !!value;
  }

  setDefault(value: string) {
    this.default = this.findLanguage(value) || this.list[0];
  }

  setPath(path: string) {
    this.assetsPath = path;
  }

  setExtension(extension: string) {
    this.extension = extension;
  }

  addLanguage(language: Language) {
    const getLang = this.findLanguage(language.abbr);
    if (!getLang) {
      this.list.push(language);
    } else {
      const index = this.list.indexOf(getLang);
      if (index > -1) {
        this.list[index] = language;
      }
    }
  }
}

export function LanguageConfigurationFactory(initSetting: LanguageInitSetting) {
  const languageConfiguration = new LanguageConfiguration();
  languageConfiguration.setDefault(initSetting && initSetting.abbr ? initSetting.abbr : 'en');
  languageConfiguration.setPath(initSetting && initSetting.path ? initSetting.path : '/assets/languages');
  languageConfiguration.setReadFromFile(!!initSetting && !!initSetting.readFromFile);
  if (initSetting && initSetting.extension) {
    languageConfiguration.setExtension(initSetting.extension);
  }
  return languageConfiguration;
}
