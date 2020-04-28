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
export class Language {
  /**
   * [ISO Language Codes](https://www.w3schools.com/tags/ref_language_codes.asp) like 'en', 'tr' or 'ru'.
   */
  abbr: string;
  /**
   * Language code is contains [ISO Language Codes](https://www.w3schools.com/tags/ref_language_codes.asp) and
   * [ISO Country Codes](https://www.w3schools.com/tags/ref_country_codes.asp) like 'en-GB'
   * Click [here](https://en.wikipedia.org/wiki/Language_localisation) to show complete list
   */
  code: string;
  /**
   * The language name displayed on the screen.
   */
  display: string;
}

/**
 * Before AppModule bootstrap, LanguageInitSetting object must be defined.
 * Example:
 * ```typescript
 * const lang = {code: 'en-GB', extension: 'xyz', abbr: 'en', path:'/path/of/lang'}
 * ```
 * HTTP request will be send to the `http(s)://..../assets/lang/en-GB.xyz` address
 */
export class LanguageInitSetting {
  /**
   * Codes for the Representation of Names of Languages are described at
   * [ISO 639-1](http://www.loc.gov/standards/iso639-2/php/code_list.php) Code.
   */
  abbr: string;
  /**
   * HTTP request path that contains language files.
   * **Note:** When **readFromFile** is **true**, you must put your language files under
   * your `src/assets/languages` folder. And this property will not effect the project.
   * If **readFromFile** is **false**, You can set your language files path anywhere you request with path option.
   */
  path?: string;
  /**
   * If set readFromFile to true data will be load from file system and HTTP request will not call.
   * Otherwise data will be requested over HTTP protocol. Default value is false.
   */
  readFromFile?: boolean;
  /**
   * The file extension will be download. Default is **json**.
   * If change to another it will add to end of line this extension.
   */
  extension?: string;
}
