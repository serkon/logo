import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  public menu: boolean = false;
  public changeTitle$ = new Subject();
  public setMenuWidth$ = new Subject();
  public headerText = '';
  public isOpenerActive: boolean = true;
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
