import { AfterViewInit, Component, NgZone } from '@angular/core';

@Component({
  selector: 'logo-theme-showcase',
  templateUrl: './theme-showcase.component.html',
  styleUrls: ['./theme-showcase.component.scss'],
})
export class ThemeShowcaseComponent implements AfterViewInit {
  statuses = ['brand', 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'gray'];
  states = ['hover', 'active', 'focus'];
  types = ['fill', 'outline', 'ghost'];
  shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  constructor(private ngZone: NgZone) {
  }

  ngAfterViewInit() {
  }

  getColor(item) {
    console.log(item);
    return getComputedStyle(document.documentElement).getPropertyValue(item);
  }
}
