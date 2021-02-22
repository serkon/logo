import { AfterContentChecked, ChangeDetectorRef, Component, QueryList } from '@angular/core';

import { HeaderTheme } from '@logo-software/header';
import { TabComponent } from '@logo-software/tabs/lib/tab.component';

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

  public toggleSearch() {
    console.log('Search Screen');
  }

  public toggleHoverMenu(b, e: HTMLElement) {
    const leftPosition = Math.round(b.target.offsetLeft - 50);
    e.className.search('opened') <= 0 ? e.className = 'hover-menu opened' : e.className = 'hover-menu';
    e.className.search('opened') > -1 ? e.style.left = leftPosition + 'px' : e.style.left = '';
  }

  tabChange(tab: TabComponent) {
    console.log('tab change: ', tab);
  }

  tabInit(tab: TabComponent) {
    console.log('Tabs initialized: ', tab);
  }

  tabClick(tab) {
    console.log('clicked', tab);
  }

  tabEvent(c: QueryList<TabComponent>) {
    console.log('event', c.toArray());
  }

  addTab() {
    this.items.push({});
  }
}
