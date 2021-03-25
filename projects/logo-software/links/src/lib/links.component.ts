import { Component, Input } from '@angular/core';

import { Link } from './link';

/**
 * It creates external or internal links. Add the below code to your code stack and give initializer parameters.
 *
 * <sub>header.component.ts</sub>
 *
 * ```typescript
 * items = [{
 *  icon: '/assets/images/home/section-03/user.svg',
 *  abbr: 'IDM',
 *  title: 'Centeral Identitiy Management',
 *  description: 'Uygulamaların kullanıcı veritabanını tutarak, kullanıcı kayıt ve giriş işlemleri güvenli olarak yönetir',
 *  url: 'home',
 *  classes: '',
 *  onHover: (event)=> console.log(event),
 *  onLeave: (event)=> console.log(event),
 *  relativeTo: false,
 *  redirection: true,
 *  delay: 0
 * }]
 * ```
 *
 * <sub>header.component.html</sub>
 *
 * ```html
 * <logo-links [classes]="['light', 'large', 'ghost']" [links]="items">
 *   <!-- add also manually the link -->
 *   <logo-link [url]="items[0].url" [classes]="['light', 'large', 'ghost']"></logo-link>
 * </logo-links>
 * ```
 */
@Component({
  selector: 'logo-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent {
  /**
   * add css classes to links
   */
  @Input() classes = [];

  private _links: Link[] = [];

  get links(): Link[] {
    return this._links;
  }

  /**
   * add link list to component.
   */
  @Input() set links(value: Link[]) {
    this._links = value || [];
  }

  setClasses(classes = []) {
    return [...classes, ...this.classes];
  }

}
