import { Component } from '@angular/core';
import { HeaderTheme } from '@logo-software/header';

@Component({
  selector: 'logo-header-showcase',
  templateUrl: './header-showcase.component.html',
  styleUrls: ['./header-showcase.component.scss'],
})
export class HeaderShowcaseComponent {
  public headerTheme = HeaderTheme;
}
