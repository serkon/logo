import { AfterViewChecked, Component, Input, OnDestroy } from '@angular/core';
import { Router, Scroll } from '@angular/router';

import { Link } from './link';

/**
 * It creates external or internal links
 *
 * __Usage Example__
 *
 * <sub>header.component.ts</sub>
 * ```typescript
 * items = [{
 *  icon: '/assets/images/home/section-03/user.svg',
 *  abbr: 'IDM',
 *  title: 'Centeral Identitiy Management',
 *  description: 'Uygulamaların kullanıcı veritabanını tutarak, kullanıcı kayıt ve giriş işlemleri güvenli olarak yönetir',
 *  link: '',
 *  class: '',
 *  onClick: (event)=> console.log(event)
 * }]
 * ```
 *
 * <sub>header.component.html</sub>
 * ```html
 * <logo-links [classes]="['light', 'large', 'ghost']" [links]="items">
 * <!-- add also manually the link --> <logo-link [link]="links[0]" [classes]="['light', 'large', 'ghost']"></logo-link></logo-links>
 * ```
 * @stacked-example(Table Showcase, logo/link-sample/link-showcase/link-showcase.component)
 */
@Component({
  selector: 'logo-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements AfterViewChecked, OnDestroy {
  /**
   * add css classes to links
   */
  @Input() classes = [];
  anchor: string = null;
  status: boolean = false;
  subscription = null;

  constructor(private router: Router) {
    this.subscription = this.router.events.subscribe(event => {
      this.status = true;
      if (event instanceof Scroll && !!event.anchor) {
        this.anchor = event.anchor;
      }
    });
  }

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

  ngAfterViewChecked(): void {
    if (this.anchor && this.status) {
      this.status = false;
      this.scrollToAnchor();
    }
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  setClasses(classes = []) {
    return [...classes, ...this.classes];
  }

  scrollToAnchor() {
    if (this.anchor) {
      const anc = document.getElementById(this.anchor);
      anc && window.setTimeout(() => anc.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }), 100);
    }
  }
}
