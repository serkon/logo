import { AfterContentChecked, ChangeDetectorRef, Component, QueryList } from '@angular/core';

import { HeaderTheme } from '@logo-software/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked {
  public headerTheme = HeaderTheme;
  items = [];

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }
}
