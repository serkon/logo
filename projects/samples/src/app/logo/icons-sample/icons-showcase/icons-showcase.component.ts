import { Component, OnInit } from '@angular/core';
import { LOGO_ICONS } from '@logo-software/icons';

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
  selector: 'logo-icons-sample',
  templateUrl: './icons-showcase.component.html',
  styleUrls: ['./icons-showcase.component.scss'],
})
export class IconsShowcaseComponent implements OnInit {
  icons: string[];
  filter: string;
  filtered: string[];
  clipboard: string;

  constructor() {
    /**
     * LOGO_ICONS is an array of list of icons
     */
    this.icons = LOGO_ICONS;
    this.filtered = this.icons;
  }

  ngOnInit(): void {
  }

  onFilter(value: string) {
    this.filtered = this.icons.filter(item => item.includes(value));
    console.log(this.filtered);
  }

  /**
   * Copy any text to clipboard
   * @param text - The text which will be copied
   */
  copyToClipboard(text: any) {
    this.clipboard = text;
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = text || (<any> event).target.innerText;
    tempInput.select();
    document.execCommand('copy');
    tempInput.remove();
  }
}
