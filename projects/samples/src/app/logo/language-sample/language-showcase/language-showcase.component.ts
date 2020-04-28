import { Component } from '@angular/core';
import { LanguageService } from '@logo-software/language';

@Component({
  selector: 'logo-language-showcase',
  templateUrl: './language-showcase.component.html',
  styleUrls: ['./language-showcase.component.scss'],
})
export class LanguageShowcaseComponent {

  constructor(private language: LanguageService) {
    this.addLanguage();
    this.language.onLoadComplete.subscribe(() => {
      console.log(this.language.translate('hello_world'));
    });
  }

  change() {
    this.language.setLanguage('en');
  }

  setLanguage(lang: string = 'tr') {
    this.language.setLanguage(lang);
  }

  addLanguage() {
    this.language.addLanguage({abbr: 'ro', code: 'ro-RO', display: 'Romain'});
  }
}
