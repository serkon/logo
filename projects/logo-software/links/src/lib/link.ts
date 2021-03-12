import { Params } from '@angular/router';
import { EventEmitter, Input } from '@angular/core';

/**
 * definition of link interface
 */
export interface Link {
  /**
   * Specifies a root URI to use for relative navigation. Default is false.
   * For example `this.router.navigate(['../list'], { relativeTo: this.route });`
   */
  relativeTo?: boolean;
  /**
   * disable redirection. Default is true.
   */
  redirection?: boolean;
  /**
   * add delay when click link before route. Default is zero.
   */
  delay?: number;
  /**
   * display text will be visible for click
   */
  display: string;
  /**
   * redirection address will be load
   */
  url: string;
  /**
   * description will use for title definition of links
   */
  description?: string;
  /**
   * it define given url is local or external, if external it will redirect to this url
   */
  external?: boolean;
  /**
   * if it is a anchor link give the target `id` value
   */
  fragment?: string;
  /**
   * a collection of matrix and query URL parameters.
   */
  params?: Params;
  /**
   * style classes will be give to the link
   */
  classes?: string[];
  /**
   * Hover event when link hovered
   */
  onHover?: EventEmitter<any>;
  /**
   * Output to be triggered when mouse leave element
   */
  onLeave?: EventEmitter<any>;
}
