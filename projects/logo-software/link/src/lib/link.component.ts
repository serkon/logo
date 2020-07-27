import { AfterViewChecked, Component, Input } from '@angular/core';
import { Link } from './link';
import { Router, Scroll } from '@angular/router';

/**
 * It creates external or internal links
 *
 * __Usage Example__
 *
 * <sub>header.component.ts</sub>
 * ```typescript
 * items = [{
 *   icon: '/assets/images/home/section-03/user.svg',
 *   abbr: 'IDM',
 *   title: 'Centeral Identitiy Management',
 *   description: 'Uygulamaların kullanıcı veritabanını tutarak, kullanıcı kayıt ve giriş işlemleri güvenli olarak yönetir',
 *   link: '',
 *   class: '',
 * }]
 * ```
 *
 * <sub>header.component.html</sub>
 * ```html
 * <logo-link [classes]="['light', 'large', 'ghost']" [links]="items"></logo-link>
 * ```
 * @stacked-example(Table Showcase, logo/link-sample/link-showcase/link-showcase.component)
 */
@Component({
  selector: 'logo-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements AfterViewChecked {
  /**
   * add css classes to links
   */
  @Input() classes = [];
  anchor: string = null;
  status: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      this.status = true;
      if (event instanceof Scroll && !!event.anchor) {
        this.anchor = event.anchor;
      }
    });
  }

  private _links = [];

  get links() {
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
      const anc = document.getElementById(this.anchor);
      console.log('#### scrolling');
      window.setTimeout(() => anc.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }), 100);
    }
  }

  setClasses(classes = []) {
    return [...classes, ...this.classes];
  }

  scrollToAnchor() {
    if (this.anchor) {
      const anc = document.getElementById(this.anchor);
      anc.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  onClick(link: Link) {
    this.anchor = link.fragment || null;
    this.scrollToAnchor();
    link.click(event);
  }

}
