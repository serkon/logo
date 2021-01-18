import { Compiler, Component, ComponentFactory, Injectable, Injector, NgModule } from '@angular/core';
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
      // tslint:disable-next-line:max-classes-per-file
    @Component({
      template: htmlText || 'empty',
    })
    class TemplateComponent {
    }

    /**
     * TemplateModule Creating
     */
      // tslint:disable-next-line:max-classes-per-file
    @NgModule({
      declarations: [TemplateComponent],
      imports: [PlaygroundModule],
    })
    class TemplateModule {
    }

    const mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
    return mod.componentFactories.find(comp => comp.componentType === TemplateComponent);
  }

}
