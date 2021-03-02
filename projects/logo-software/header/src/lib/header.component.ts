import { AfterViewInit, ChangeDetectorRef, Component, HostBinding, HostListener, Input } from '@angular/core';
import { fromEvent } from 'rxjs';

import { HeaderService, HeaderTheme } from './header.service';

@Component({
  selector: 'logo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @Input() defaultTheme: HeaderTheme = HeaderTheme.START;
  @Input() scrolledTheme: HeaderTheme = HeaderTheme.SCROLL;
  @Input() watchElement: string = 'drawer-right';
  @Input() isMobilized: boolean = true;
  @Input() scrollSpy: boolean = true;
  @Input() scrollPoint: number = 100;
  @Input() menuPosition: 'left' | 'center' | 'right' = 'right';
  @Input() containerStatus: boolean = false;

  public mobileSupport: string = this.isMobilized ? 'mobilized' : 'standart';

  constructor(public headerService: HeaderService, private cd: ChangeDetectorRef) {
    this.headerService.headerThemeChange.subscribe((val) => {
      this.headerService.activeTheme = val;
    });
  }

  @HostBinding('class.scroll') get scroll() {
    return this.headerService.activeTheme === this.headerService.scrollTheme;
  }

  @HostBinding('class.default') get default() {
    return this.headerService.activeTheme === this.headerService.startTheme;
  }

  @HostBinding('class.opened') get opened() {
    return this.headerService.mobileMenu;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.headerService.mobileMenu = false;
  }

  ngAfterViewInit(): void {
    this.headerService.startTheme = this.defaultTheme;
    this.headerService.scrollTheme = this.scrolledTheme;
    this.headerService.catchPoint = this.scrollPoint;
    this.headerService.isScrollSpy = this.scrollSpy;

    const content = this.watchElement === 'body' || this.watchElement === 'html' ? window : document.querySelector('.' + this.watchElement);
    const scroll$ = fromEvent(content, 'scroll');
    scroll$.subscribe(dir => {
      const scrollPos = this.watchElement === 'body' || this.watchElement === 'html' ? window.pageYOffset : dir.target['scrollTop'];
      if (this.headerService.isScrollSpy) {
        this.headerService.activeTheme = (scrollPos >= this.headerService.catchPoint) ? this.headerService.scrollTheme : this.headerService.startTheme;
      }
    });
  }

  toggleMobileMenu() {
    return this.headerService.mobileMenu = !this.headerService.mobileMenu;
  }
}
