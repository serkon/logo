import { Component, Input } from '@angular/core';

/**
 * The interface which describe Breadcrumb items content
 */
export interface Breadcrumb {
  /**
   * display name
   */
  name: string;
  /**
   * route path
   */
  link?: string;
  /**
   * icon image path
   */
  iconImage?: string;
  /**
   * icon class name
   */
  iconClass?: string;
}

/**
 * Breadcrumbs mark and communicate a user's location in the product. Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.ts</sub>
 *
 * ```html
 * <logo-breadcrumb [breadcrumb]="items" [size]="'medium'" [isLight]="true" [cssClasses]="css-class-name"></logo-breadcrumb>
 * ```
 */
@Component({
  selector: 'logo-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  /**
   * Breadcrumb item
   */
  @Input() breadcrumb: Breadcrumb[];
  /**
   * Css classes will be added to component first child
   */
  @Input() cssClasses?: string;
  /**
   * Breadcrumb size. Default is `medium`.
   */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * Light theme will be shown if it set to true. Default is false.
   */
  @Input() isLight: boolean = false;
}
