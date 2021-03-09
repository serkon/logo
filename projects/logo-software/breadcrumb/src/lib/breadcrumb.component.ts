import { Component, Input } from '@angular/core';

export interface Breadcrumb {
  name: string;
  link?: string;
  iconImage?: string;
  iconClass?: string;
}

@Component({
  selector: 'logo-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})

export class BreadcrumbComponent {
  @Input() breadcrumb: Breadcrumb[];
  @Input() cssClasses?: string;
  @Input() size?: 'small' | 'medium' | 'large';
  @Input() isLight?: boolean;

  constructor() {
  }
}
