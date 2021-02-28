import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Drawer Service manage drawer options
 */
@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  /**
   * Manage left menu status, default: false. If false menu will be closed.
   */
  public menu: boolean = false;
  /**
   * Title changer
   */
  public changeTitle$ = new Subject();
  /**
   * Set left menu width
   */
  public setMenuWidth$ = new Subject();
  /**
   * Set header text
   */
  public headerText = '';
  /**
   * Hamburger menu status, default is true
   */
  public isOpenerActive: boolean = true;
  /**
   * It is hides header, default is false
   */
  public hideHeader: boolean = false;

  /**
   * Drawer title changer
   * @param text
   * @param changeTitle
   */
  setHeaderTitle(text, changeTitle = true) {
    this.headerText = text;
    if (changeTitle) {
      this.changeTitle$.next(text);
    }
  }
}
