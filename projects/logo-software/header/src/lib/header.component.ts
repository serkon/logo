import { Component, Input, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'logo-header',
  template: `
    <div class="header {{headerTheme}}" [ngClass]="headerFunction">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @Input() headerDefaultTheme: string = 'default';
  @Input() headerScrolledTheme: string = 'scrolled';
  @Input() watchElement: string = 'drawer-right';
  public headerFunction: string = 'spied';
  public headerTheme = this.headerDefaultTheme;

  constructor() {
  }

  ngAfterViewInit(): void {
    const content = document.querySelector('.drawer-right');
    const scroll$ = fromEvent(content, 'scroll');
    scroll$.subscribe(dir => {
      if (content.scrollTop >= 100) {
        this.headerTheme = this.headerScrolledTheme;
      } else if (content.scrollTop < 100) {
        this.headerTheme = this.headerDefaultTheme;
      }
    });
  }
}
