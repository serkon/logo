import { AfterContentChecked, ChangeDetectorRef, Component, QueryList } from '@angular/core';

import { HeaderTheme } from '@logo-software/header';
import { IdmService } from '@logo-software/idm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked {
  public headerTheme = HeaderTheme;
  items = [];

  constructor(private cdr: ChangeDetectorRef, public idmService: IdmService) {
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }
}
