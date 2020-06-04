/*
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'logo-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent {
  statuses = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'gray'];
  states = ['hover', 'active', 'focus'];
  types = ['fill', 'outline', 'ghost'];
  shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
}
