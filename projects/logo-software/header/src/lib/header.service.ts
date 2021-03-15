/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

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
