import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageConfiguration } from './language.configuration';

export abstract class LanguageLoader {
  abstract getTranslation(lang: string, configuration: LanguageConfiguration): Observable<any>;
}

export class LanguageHttpLoader implements LanguageLoader {
  constructor(private http: HttpClient) {
  }

  public getTranslation(lang: string, configuration: LanguageConfiguration): Observable<Object> {
    return this.http.get(
      `${configuration.assetsPath}/${lang || configuration.default.code}.${configuration.extension}`,
    );
  }
}

export function LanguageHttpLoaderFactory(http: HttpClient) {
  return new LanguageHttpLoader(http);
}
