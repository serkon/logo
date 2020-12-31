import { Component, OnInit } from '@angular/core';

/**
 * This component just usage example of icon module.
 * You can easily apply using import in SCSS.
 *
 * __Usage Example__
 *
 * <sub>app.component.scss</sub>
 * ```scss
 * // import icon style here
 * @import "~@logo-software/icons/style";
 * :host{
 *   // component custom css goes here
 * }
 * ```
 * <sub>app.component.html</sub>
 * ```html
 * <!-- this will add search icon to input to right side of it.-->
 * <button class="le-search icon-right">Right</button>
 * <!-- this code add search icon to the left side-->
 * <button class="le-search icon-left">Left</button
 * <!-- this code add search icon to the center (default)-->
 * <button class="le-save">Center</button>
 * ```
 * @stacked-example(Icons Showcase, logo/icons-sample/icons-showcase/icons-showcase.component)
 */
@Component({
  selector: 'logo-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent {
  constructor() {
  }
}
