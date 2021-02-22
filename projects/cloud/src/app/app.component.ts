import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';

import { HeaderTheme } from '@logo-software/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked {
  public headerTheme = HeaderTheme;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  public toggleSearch() {
    console.log('Search Screen');
  }

  public toggleHoverMenu(b, e: HTMLElement) {
    const leftPosition = Math.round(b.target.offsetLeft - 50);
    e.className.search('opened') <= 0 ? e.className = 'hover-menu opened' : e.className = 'hover-menu';
    e.className.search('opened') > -1 ? e.style.left = leftPosition + 'px' : e.style.left = '';
  }
}
