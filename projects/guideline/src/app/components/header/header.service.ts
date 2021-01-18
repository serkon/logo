import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HeaderService {
  public $changeTitle = new Subject();
  public headerText = '';

  constructor() {
  }

  setHeaderTitle(text, changeTitle = true) {
    this.headerText = text;
    if (changeTitle) {
      this.$changeTitle.next(text);
    }
  }
}
