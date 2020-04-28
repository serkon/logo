import { EventEmitter, Injectable } from '@angular/core';
import { Language } from './language';
import { LanguageConfiguration } from './language.configuration';
import { LanguageStoreService } from '../language.store';

/**
 * Language Service need for translation operation. It is injectable.
 *
 * ```typescript
 * import {Component} from '@angular/core';
 * import {LanguageService} from '~/shared/services/language/language.service';
 * @Component({
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
 *```
 *
 * @stacked-example(LanguageModule, logo/language-sample/language-showcase/language-showcase.component)
 */

@Injectable()
export class LanguageService {
  /**
   * This method triggered when data received
   */
  public onLoadComplete: EventEmitter<Language> = new EventEmitter();

  constructor(private configuration: LanguageConfiguration, public store: LanguageStoreService) {
    this.language = this.configuration.default;
    this.onLoadComplete = this.store.onLoadComplete;
  }

  private _language: Language;

  /**
   * Returns default Language
   */
  get language(): Language {
    return this._language;
  }

  /**
   * Sets default language
   * @param lang language parameter setter
   */
  set language(lang: Language) {
    this._language = lang;
  }

  /**
   * Sets default language
   * @param value Default language file will be set to this value
   */
  setLanguage(value: string): void {
    if (this.language.abbr !== value && this.language.code !== value) {
      this.configuration.setDefault(value);
      this.language = this.configuration.default;
      this.store.changeLanguage();
    }
  }

  /**
   * Reload current language
   */
  reload(value?: string) {
    this.configuration.setDefault(value || this.configuration.default.abbr);
    this.language = this.configuration.default;
    this.store.changeLanguage();
  }

  /**
   * Adds new language to scope
   * @param language
   */
  addLanguage(language: Language) {
    this.configuration.addLanguage(language);
  }

  /**
   * Returns Language of given abbr code
   * @param value
   */
  findLanguage(value: string): Language {
    return this.configuration.findLanguage(value);
  }

  /**
   * Returns all Languages as an Array<Language>
   */
  list(): Language[] {
    return this.configuration.list;
  }

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
  translate(key: string, params?: any) {
    let translatedString = this.store.file[key] || key;
    const type = params !== null && typeof params !== 'undefined' ? params.constructor.name : null;
    if (type === 'Array') {
      params.forEach((param: any, paramIndex: number) => {
        translatedString = translatedString.replace(new RegExp(`{${paramIndex}}`, 'g'), param);
      });
    } else if (type === 'Object') {
      Object.keys(params).forEach((keyName: string, index: number) => {
        translatedString = translatedString.replace(new RegExp(`{${keyName}}`, 'g'), params[keyName]);
      });
    }
    return translatedString;
  }

  /**
   * Returns the language code name from the browser, e.g. "de"
   */
  public getBrowserLang(): string {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return undefined;
    }
    let browserLang: any = window.navigator.languages ? window.navigator.languages[0] : null;
    browserLang = browserLang || window.navigator.language;
    if (browserLang.indexOf('-') !== -1) {
      browserLang = browserLang.split('-')[0];
    }
    if (browserLang.indexOf('_') !== -1) {
      browserLang = browserLang.split('_')[0];
    }
    return browserLang;
  }

  /**
   * Returns the culture language code name from the browser, e.g. "de-DE"
   */
  public getBrowserCultureLang(): string {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return undefined;
    }
    let browserCultureLang: any = window.navigator.languages ? window.navigator.languages[0] : null;
    browserCultureLang = browserCultureLang || window.navigator.language;
    return browserCultureLang;
  }
}
