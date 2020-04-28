import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from './lib/language';
import { LanguageConfiguration } from './lib/language.configuration';

interface LanguageFile {
  [key: string]: string;
}

declare var require: any;

function readFile(file) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = x => resolve(fr.result);
    fr.readAsText(file);
  });
}

@Injectable()
export class LanguageStoreService {
  public onLoadComplete: EventEmitter<Language> = new EventEmitter();
  public file: LanguageFile = {};

  constructor(private http: HttpClient, private config: LanguageConfiguration) {
    this.changeLanguage();
  }

  changeLanguage() {
    const method = this.config.readFromFile ?
      () => this.getLanguageFromPath(this.config.default) :
      () => this.getLanguageOverHttp(this.config.default);
    window.setTimeout(() => method(), 0);
  }

  getLanguageOverHttp(language: Language) {
    const path = `assets/${this.config.assetsPath}/${language.code || this.config.default.code}.${this.config.extension}`;
    (this.http.get(path) as Observable<LanguageFile>).subscribe((item: LanguageFile) => {
      this.file = item;
      this.onLoadComplete.emit();
    });
  }

  async getLanguageFromPath(language: Language) {
    // import(`../../../../src/assets/languages/${this.config.default.code}.${this.config.extension}`)
    // console.log(readFile(`../../../../src/assets/${this.config.assetsPath}/${this.config.default.code}.${this.config.extension}`));
    import(`../../../../src/assets/${this.config.assetsPath}/${this.config.default.code}.${this.config.extension}`)
      .then((file) => {
          this.file = file;
          this.onLoadComplete.emit();
        },
      );
  }
}
