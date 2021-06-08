import { Component } from '@angular/core';

import { HeaderTheme } from '@logo-software/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public headerTheme = HeaderTheme;

  public languages = [
    {
      name: 'Türkçe',
      value: 'tr',
    },
    {
      name: 'English',
      value: 'en',
    },
  ]

  public theLanguage = this.languages[0];

  public onLangSelect(e) {
    console.log('Selected Language', e);
  }

  public logMeIn() {
    console.log('IDM Login Action');
  }
}
