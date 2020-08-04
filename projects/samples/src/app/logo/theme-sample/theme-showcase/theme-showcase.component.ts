import { Component } from '@angular/core';

@Component({
  selector: 'logo-theme-showcase',
  templateUrl: './theme-showcase.component.html',
  styleUrls: ['./theme-showcase.component.scss'],
})
export class ThemeShowcaseComponent {
  statuses = ['brand', 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'gray'];
  states = ['hover', 'active', 'focus'];
  types = ['fill', 'outline', 'ghost'];
  shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
}
