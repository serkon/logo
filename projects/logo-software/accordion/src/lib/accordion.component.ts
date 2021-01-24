/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';

export class MenuItem {
  id: any;
  name: string;
  classes?: string;
  iconClasses?: string;
  link?: string;
  params?: { [key: string]: any };
  children?: MenuItem[];
  role?: string;
}

@Component({
  selector: 'logo-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent implements OnInit {

  @Input() public items: MenuItem[] = [];
  @Input() public forChildItems: any = [];
  @Input() public elementId = '0';
  @Input() public start = 1;
  @Input() request?: HttpRequest<any>;

  constructor(private http: HttpClient) {
  }

  private _level = 0;

  public get level() {
    return this._level;
  }

  @Input('level')
  public set level(level: any) {
    ++level;
    this._level = level;
  }

  ngOnInit() {
    console.log('leve: ', this.level);
    if (this.level <= 1) {
      // this.getMenuList();
      // } else {
      // this.items = this.forChildItems;
    }
  }

  open(routerLinkActive: RouterLinkActive) {
    this.recursiveParent((routerLinkActive as any).element.nativeElement);
  }

  recursiveParent(element: HTMLLIElement) {
    const parent = (element as any).closest('ul').closest('li');
    if (parent) {
      const input = parent.querySelector('input');
      input.checked = true;
      this.recursiveParent(parent);
    }
  }

  getMenuList() {
    this.http.request(this.request).subscribe(
      (response: HttpResponse<MenuItem>) => this.onSuccessHandler(response),
    );
  }

  onSuccessHandler(response: HttpResponse<MenuItem>) {
    this.items = response.body.children;
  }
}
