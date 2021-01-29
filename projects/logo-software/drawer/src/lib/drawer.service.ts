import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  public menu: boolean = true;
  public $changeTitle = new Subject();
  public headerText = '';
  public isOpenerActive: boolean = true;

  setHeaderTitle(text, changeTitle = true) {
    this.headerText = text;
    if (changeTitle) {
      this.$changeTitle.next(text);
    }
  }
}
