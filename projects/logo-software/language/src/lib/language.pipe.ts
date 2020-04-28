/*
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from './language.service';

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
@Pipe({
  name: 'translate',
  pure: false,
})
export class LanguagePipe implements PipeTransform {
  constructor(private language: LanguageService) {
  }

  transform(value: string, params?: any): string {
    return this.language.translate(value, params);
  }
}
