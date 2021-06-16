/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { AfterViewInit, ChangeDetectorRef, Component, HostBinding, HostListener, Input } from '@angular/core';
import { fromEvent } from 'rxjs';

import { HeaderService, HeaderTheme } from './header.service';

/**
 * Headers are navigation components that display information and actions relating to the current screen. Add the below code to your code stack and give initializer parameters.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-header
 *  [containerStatus]="true"
 *  [defaultTheme]="headerTheme.START"
 *  [isMobilized]="true"
 *  [menuPosition]="'left'"
 *  [scrollPoint]="75"
 *  [scrollSpy]="true"
 *  [scrolledTheme]="headerTheme.SCROLL"
 *  [watchElement]="'body'"
 * >
 *   <!-- Your content goes here. Below code is a sample of usage. -->
 *   <div class="nav">
 *     <logo-link [classes]="'ghost large'" [url]="'/products'">Products</logo-link>
 *     <logo-link [classes]="'ghost large'" [fragment]="'solutions'" [url]="'/'">Solutions</logo-link>
 *     <logo-link [classes]="'ghost large'" [url]="'/info/about'">About Us</logo-link>
 *     <logo-link [classes]="'ghost large'" [url]="'/blog'">Blog</logo-link>
 *     <logo-link [classes]="'ghost large'" [url]="'/contact'">Contact</logo-link>
 *   </div>
 * </logo-header>
 * ```
 */
@Component({
  selector: 'logo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  /**
   * Header left logo link display text. It also accept html string.
   */
  @Input() logoLinkText: string;
  /**
   * Header left logo link target. Default is `/`.
   */
  @Input() logoLinkTarget: string = '/';
  /**
   * Header left logo link class. Default is empty.
   */
  @Input() logoLinkClasses: string = '';
  /**
   * Header left logo image if needed. You can use logoImage and logoLinkText property at the same time but logoLinkText will be alt text of the logo image in that case.
   */
  @Input() logoImage: string;
  /**
   * adds 'default' class to header component's tag to default. It will also make header background to transparent.
   */
  @Input() defaultTheme: HeaderTheme = HeaderTheme.START;
  /**
   * adds 'scroll' class to header component's tag while scrolling.  It will also make header background to white.
   */
  @Input() scrolledTheme: HeaderTheme = HeaderTheme.SCROLL;
  /**
   * the class name of the which scrolling element will be watched to be made sticky to the header component to the top of the page. Default is `drawer-right`.
   * It also accepts `body` or `html` so it will watch window's scroll.
   */
  @Input() watchElement: string = 'drawer-right';
  /**
   * Add mobile responsive support
   */
  @Input() isMobilized: boolean = true;
  /**
   * Lets developers to add their own logo HTML at the place of logo in header.
   */
  @Input() hasCustomLogo: boolean = false;
  /**
   * sticky header support. Default is `true`. If set false header component will not be sticky
   */
  @Input() scrollSpy: boolean = true;
  /**
   * header component will be sticky after given pixel has been scrolled. Default is `100`
   */
  @Input() scrollPoint: number = 100;
  /**
   * Menu alignment. Default is `right`
   */
  @Input() menuPosition: 'left' | 'center' | 'right' = 'right';
  /**
   * if set to default it will add bootstrap `container` class to `"div.header-content"`. So it will be full width or inside a container.
   */
  @Input() containerStatus: boolean = false;

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
    this.headerService.scrollPoint = this.scrollPoint;
    this.headerService.isScrollSpy = this.scrollSpy;
    const content = this.watchElement === 'body' || this.watchElement === 'html' ? window : document.querySelector('.' + this.watchElement);
    const scroll$ = fromEvent(content, 'scroll');
    scroll$.subscribe(dir => {
      const scrollPos = this.watchElement === 'body' || this.watchElement === 'html' ? window.pageYOffset : dir.target['scrollTop'];
      if (this.headerService.isScrollSpy) {
        this.headerService.activeTheme = (scrollPos >= this.headerService.scrollPoint) ? this.headerService.scrollTheme : this.headerService.startTheme;
      }
    });
  }

  toggleMobileMenu() {
    return this.headerService.mobileMenu = !this.headerService.mobileMenu;
  }

  checkMobileMenu() {
    if(this.isMobilized && this.headerService.mobileMenu) {
      this.toggleMobileMenu();
    }
  }
}
