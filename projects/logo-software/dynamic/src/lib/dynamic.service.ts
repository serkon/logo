import { Compiler, Component, ComponentFactory, Injectable, ModuleWithComponentFactories, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { PlaygroundModule } from '@logo-software/playground';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class DynamicService {

  public $compile = new Subject();

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
      template: `<div class="dynamic-component">${this.escape(htmlText)}</div>`,
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
      imports: [PlaygroundModule],
    })
    class TemplateModule {
    }

    const mod: ModuleWithComponentFactories<TemplateModule> = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
    const compFactory = mod.componentFactories.find(comp => comp.componentType === TemplateComponent);
    this.$compile.next(compFactory);
    return compFactory;
  }

}
