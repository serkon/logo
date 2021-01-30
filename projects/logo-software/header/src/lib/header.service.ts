import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public mobileMenu: boolean = false;
  public startTheme: string = 'default';
  public scrollTheme: string = 'scrolled';
  public catchPoint: number = 100;
  public isScrollSpy: boolean = true;
  public settedTheme: string = this.startTheme;

  headerThemeChange: Subject<string> = new Subject<string>();

  constructor() {
    this.headerThemeChange.subscribe((val) => {
      this.settedTheme = val;
    });
  }

  setDefaultTheme(cssClass: string) {
    this.headerThemeChange.next(cssClass);
  }
}
