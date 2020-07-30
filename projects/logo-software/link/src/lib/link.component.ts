import { Component, Input, OnInit } from '@angular/core';
import { Link } from './link';

@Component({
  selector: 'logo-link',
  template: `
    <ng-container *ngTemplateOutlet="external ? externalURL: internalURL">
    </ng-container>
    <ng-template #internalURL>
      <a routerLink="{{url}}" [fragment]="fragment" [ngClass]="classes" (click)="onClickEvent($event)">
        <ng-container *ngTemplateOutlet="display ? displayHTML : contentHTML"></ng-container>
      </a>
    </ng-template>
    <ng-template #externalURL>
      <a href="{{url}}" [ngClass]="classes" (click)="onClickEvent($event)">
        <ng-container *ngTemplateOutlet="display ? displayHTML : contentHTML"></ng-container>
      </a>
    </ng-template>
    <ng-template #displayHTML>{{display}}</ng-template>
    <ng-template #contentHTML>
      <ng-content></ng-content>
    </ng-template>
  `,
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input() external: boolean = false;
  @Input() fragment: string;
  @Input() url: string;
  @Input() classes: string[] = [];
  @Input() display: string = '';
  @Input() onClick: (event: Event) => void;
  @Input() link: Link;

  ngOnInit() {
    if (this.link) {
      this.external = this.link.external;
      this.fragment = this.link.fragment;
      this.url = this.link.url;
      this.classes = this.link.classes && [...this.classes, ...this.link.classes] || this.classes;
      this.display = this.link.display;
      this.onClick = this.link.onClick;
    }
  }

  scrollToAnchor() {
    if (this.fragment) {
      console.log('#### scrolling link');
      const anc = document.getElementById(this.fragment);
      anc && window.setTimeout(() => anc.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }), 100);
    }
  }

  onClickEvent($event) {
    this.scrollToAnchor();
    this.onClick && this.onClick($event);
  }
}
