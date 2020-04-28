import { Component, Input } from '@angular/core';

@Component({
  selector: 'expander',
  template: `
    Expander status: {{expandable}}
    <ng-container>
      <ng-content></ng-content>
    </ng-container>
  `,
})
export class ExpanderComponent {
  @Input() expandable;
}
