/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Compiler, Component, ComponentFactory, Injectable, ModuleWithComponentFactories, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';

import { PlaygroundModule } from '@logo-software/playground';

@Injectable({
  providedIn: 'root',
})
export class DynamicService {

  public compile$ = new Subject();
  public imports = [PlaygroundModule];

  constructor(private compiler: Compiler, private sanitizer: DomSanitizer) {
  }

  escape(text) {
    return text.replace(/{/gi, '&#123;').replace(/}/gi, '&#125;');
  }

  public factory(htmlText): ComponentFactory<any> {

    /**
     * TemplateComponent Creating
     */
    @Component({
      template: `
        <div class="dynamic-component">${this.escape(htmlText)}</div>`,
      styles: [':host { display: block; }'],
      interpolation: ['[[', ']]'],
    })
    class TemplateComponent {
      /**
       * <div [innerHTML]="text"></div>
       * Component içerisine aktarılıp innerHTML olarak basılırsa eklenmiş olan component render edilemiyor.
       * Bu nedenle template içerisine HTML'i direk bastırıyorum.
       */
      public text = htmlText;
    }

    /**
     * TemplateModule Creating
     */
    @NgModule({
      declarations: [TemplateComponent],
      imports: [this.imports],
    })
    class TemplateModule {
    }

    const mod: ModuleWithComponentFactories<TemplateModule> = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
    const compFactory = mod.componentFactories.find(comp => comp.componentType === TemplateComponent);
    this.compile$.next(compFactory);
    return compFactory;
  }

}
