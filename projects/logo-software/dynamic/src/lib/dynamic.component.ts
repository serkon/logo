/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import {
  AfterViewInit,
  ChangeDetectorRef,
  Compiler,
  Component,
  ComponentFactory,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicService } from './dynamic.service';

/**
 * The dynamic module accepts two inputs, one of them is your Module list and the other is your template string.
 * So, these components load your modules and run your templates inside them.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.ts</sub>
 *
 * ```ts
 * import { Component, NgModule } from '@angular/core'; *
 * import { PlaygroundModule } from '@logo-software/playground';
 * import { BreadcrumbModule } from '@logo-software/breadcrumb';
 *
 * @Component({
 *   selector: 'logo-dynamic-showcase',
 *   templateUrl: './dynamic-showcase.component.html',
 *   styleUrls: ['./dynamic-showcase.component.scss'],
 * })
 * export class DynamicShowcaseComponent {
 *  imports = [PlaygroundModule, BreadcrumbModule];
 *  text = `
 *    <logo-playground path="#/logo/button-sample/button-showcase/button-showcase.component" context='{"title": "Button Demo", "button": true}' ></logo-playground>
 *    <logo-breadcrumb [breadcrumb]="[{name:'Home', link: '/'}, {name:'Products', link: '/products'}, {name: 'Potato'}]" [isLight]="false" [size]="'medium'"></logo-breadcrumb>
 *  `;
 * }
 * ```
 * <sub>app.component.html</sub>
 *
 * ```angular2html
 * <logo-dynamic imports="imports" context="text"></logo-drawer>
 * ```
 */
@Component({
  selector: 'logo-dynamic',
  template: `
    <div #container></div>`,
  styles: [],
})
export class DynamicComponent implements OnInit, AfterViewInit {
  @Input() context;
  @Input() imports;
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private changeDetectorRef: ChangeDetectorRef, private compiler: Compiler, private dynamicService: DynamicService) {
  }

  ngAfterViewInit() {
    this.addComponent();
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit() {
    this.dynamicService.imports.push(this.imports);
  }

  private async addComponent() {
    const factory: ComponentFactory<any> = this.dynamicService.factory(this.context);
    this.container.createComponent(factory);
  }
}
