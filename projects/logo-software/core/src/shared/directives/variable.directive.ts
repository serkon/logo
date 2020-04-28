import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


/**
 * It set a variable in HTML than use everywhere.
 *
 * __Usage Example__
 *
 * ```html
 * <div [appVar]="someValue" let-someVar="appVar">{{someVar | json}}</div>
 * <div *appVar="someValue as someVar">{{someVar | json}}</div>
 * <div *appVar="false as deneme">{{deneme | json}}</div>
 * <div *appVar="false; let variable">{{variable | json}}</div>
 * <div *appVar="{ x: 4 } as variable">{{variable | json}}</div>
 * ```
 */
@Directive({
  selector: '[appVar]',
})
export class VariableDirective {
  context: any = {};

  constructor(private vcRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
  }

  @Input() set appVar(context: any) {
    this.context.$implicit = this.context.appVar = context;
    this.updateView();
  }

  updateView() {
    this.vcRef.clear();
    this.vcRef.createEmbeddedView(this.templateRef, this.context);
  }
}
