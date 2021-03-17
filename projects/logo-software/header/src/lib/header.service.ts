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

/**
 * Header service will be replace current header component setting to page specific values.
 */
@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  /**
   * it will open mobile menu. default is false. if set true mobile menu will be visible
   */
  public mobileMenu: boolean = false;
  /**
   * adds custom class to header component's tag to default. So header component can be stylized with this class
   */
  public startTheme = HeaderTheme.START;
  /**
   * adds custom class to header component's tag while scroll. So header component can be stylized with this class
   */
  public scrollTheme = HeaderTheme.SCROLL;
  /**
   * currently activated class. So header component can be stylized with this class programmatically
   */
  public activeTheme: HeaderTheme = this.startTheme;
  /**
   * it refactor header component scrollPont with given value
   */
  public scrollPoint: number = 100;
  /**
   * it will refactor sticky header. Default is `true`. If set false header component will not be sticky
   */
  public isScrollSpy: boolean = true;
  /**
   * header theme change listener. when theme changed it will be triggered
   */
  headerThemeChange: Subject<HeaderTheme> = new Subject<HeaderTheme>();

  /**
   * add class to header component
   * @param cssClass
   */
  setDefaultTheme(cssClass: HeaderTheme) {
    setTimeout(() => {
      this.headerThemeChange.next(cssClass);
    }, 10);
  }
}
