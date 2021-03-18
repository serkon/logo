/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, Input } from '@angular/core';

/**
 * Hero areas are key points for marketing and catch the user attentions. With Hero Component you can easily add hero model to your page.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-hero
 *  [containerStatus]="true"
 *  [bgImage]="'https://cdn-nq.logo.com.tr/assets/images/banners/banner-cover-muhasebe-web.jpg'"
 *  [cssClasses]="'my-hero-area'"
 * >
 *   <!-- Your content goes here. Below code is a sample of usage. -->
 *   <div class="content">
 *     <h1>Welcome to my page</h1>
 *     <p>My description of marketing</p>
 *   </div>
 * </logo-hero>
 * ```
 */
@Component({
  selector: 'logo-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  /**
   * adds custom CSS class to hero area. By this way you can customize area for your theme. Also you can customize overlay section with your custom class.
   */
  @Input() cssClasses: string = 'hero-main';
  /**
   * if sets true, add 'container' CSS class to area. You can use with bootstrap or other css frameworks.
   */
  @Input() containerStatus: boolean = false;
  /**
   * Dynamically add background image of the hero area.
   */
  @Input() bgImage?: string;
}
