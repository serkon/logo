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
