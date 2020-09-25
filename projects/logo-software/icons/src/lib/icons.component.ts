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
 *  // this will add search icon to input to right side of it.
 * <div>
 *   To add icon to right:<br/>
 *   <input class="logo-i-search icon-right"/>
 * </div>
 * <div>
 *   To add icon to left:<br/>
 *   <input class="logo-i-search icon-left"/>
 * </div>
 * <div>
 *   button with icon (the default is center):<br/>
 *   <button class="logo-i-save"></button>
 * </div>
 * <div>
 *   button with icon and text:<br/>
 *   <button class="logo-i-save large icon-left">SAVE</button>
 * </div>
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
