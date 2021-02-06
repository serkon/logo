import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum HeaderTheme {
  START = 'default',
  SCROLL = 'scroll',
}

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public mobileMenu: boolean = false;
  public startTheme = HeaderTheme.START;
  public scrollTheme = HeaderTheme.SCROLL;
  public activeTheme: HeaderTheme = this.startTheme;
  public catchPoint: number = 100;
  public isScrollSpy: boolean = true;

  headerThemeChange: Subject<HeaderTheme> = new Subject<HeaderTheme>();

  setDefaultTheme(cssClass: HeaderTheme) {
    setTimeout(() => {
      this.headerThemeChange.next(cssClass);
    }, 10);
  }
}
