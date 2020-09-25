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

/**
 * This component just usage example of icon module.
 * You can easily apply it with importing to component scss
 *
 * __Usage Example__
 *
 * <sub>app.component.scss</sub>
 * ```scss
 * // import icon style here
 * @import "~@logo-software/theme/style";
 * :host{
 *   // component custom css goes here
 * }
 * ```
 * <sub>app.component.html</sub>
 * ```html
 *  // this will add search icon to input to right side of it.
 * <div>
 *   Three type form size exist `large | medium | small`:<br/>
 *   <input class="large"/> <input class="medium"/> <input class="small"/>
 * </div>
 * <div>
 *   Three type form display exist `fill | outline | ghost`:<br/>
 *   <input class="fill"/> <input class="outline"/> <input class="ghost"/>
 * </div>
 * ```
 * @stacked-example(Theme Showcase, logo/theme-sample/theme-showcase/theme-showcase.component)
 */
@Component({
  selector: 'logo-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent {
  statuses = ['brand', 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'gray'];
  states = ['hover', 'active', 'focus'];
  types = ['fill', 'outline', 'ghost'];
  shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  sizes = ['large', 'medium', 'small'];
}
