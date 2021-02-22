import { Inject, Injectable } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import has = Reflect.has;

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  fragment;
  subscription = null;

  constructor(@Inject(DOCUMENT) private document, private router: Router) {
    this.subscription = this.router.events
      .subscribe(event => {
        if (event instanceof Scroll && !!event.anchor) {
          this.scrollToAnchor(this.fragment);
        }
      });
  }

  scrollToAnchor(fragment) {
    const hash = document.location.hash.split('#')[1];
    const id = hash || this.fragment;
    if (id) {
      window.setTimeout(() => {
        const anc = document.getElementById(id);
        console.log('delay');
        anc && anc.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 200);
    }
  }
}
