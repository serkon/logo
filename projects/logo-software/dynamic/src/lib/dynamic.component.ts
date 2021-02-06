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
  Compiler,
  Component,
  ComponentFactory,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicService } from './dynamic.service';

@Component({
  selector: 'logo-dynamic',
  template: `
    <div #container></div>`,
  styles: [],
})
export class DynamicComponent implements AfterViewInit {
  @Input() context;
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private compiler: Compiler, private dynamicService: DynamicService) {
  }

  ngAfterViewInit() {
    this.addComponent();
  }

  private async addComponent() {
    const factory: ComponentFactory<any> = this.dynamicService.factory(this.context);
    this.container.createComponent(factory);
  }
}
