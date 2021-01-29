import { AfterViewInit, Component, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { HeaderService } from './header.service';

@Component({
  selector: 'logo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  @Input() defaultTheme: string = 'default';
  @Input() scrolledTheme: string = 'scrolled';
  @Input() watchElement: string = 'drawer-right';
  @Input() isMobilized: boolean = true;
  @Input() scrollSpy: boolean = true;
  @Input() scrollPoint: number = 100;
  public mobileSupport: string = this.isMobilized ? 'mobilized' : 'standart';

  constructor(public headerService: HeaderService) {
  }

  ngAfterViewInit(): void {
    this.headerService.startTheme = this.defaultTheme;
    this.headerService.scrollTheme = this.scrolledTheme;
    this.headerService.catchPoint = this.scrollPoint;
    this.headerService.isScrollSpy = this.scrollSpy;

    if (this.headerService.isScrollSpy) {
      const content = document.querySelector('.' + this.watchElement);
      const scroll$ = fromEvent(content, 'scroll');
      scroll$.subscribe(dir => {
        if (content.scrollTop >= this.headerService.catchPoint) {
          this.headerService.settedTheme = this.headerService.scrollTheme;
        } else if (content.scrollTop < this.headerService.catchPoint) {
          this.headerService.settedTheme = this.headerService.startTheme;
        }
      });
    }
  }

  toggleMobileMenu() {
    return this.headerService.mobileMenu = !this.headerService.mobileMenu;
  }
}
