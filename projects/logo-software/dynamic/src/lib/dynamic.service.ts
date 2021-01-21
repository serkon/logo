import { Compiler, Component, ComponentFactory, Injectable, Injector, ModuleWithComponentFactories, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { PlaygroundModule } from '@logo-software/playground';

@Injectable({
  providedIn: 'root',
})
export class DynamicService {

  public $compile = new Subject();
  public htmlText = '';

  constructor(private compiler: Compiler, private injector: Injector) {
  }

  public factory(htmlText): ComponentFactory<any> {
    /**
     * TemplateComponent Creating
     */
    @Component({
      template: htmlText || 'empty',
    })
    class TemplateComponent {
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
    return mod.componentFactories.find(comp => comp.componentType === TemplateComponent);
  }

}
