import { AfterViewInit, Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'logo-playground',
  template: `
    <div>
      <h3>Playground:</h3>
      <div class="code">{{context | json}}</div>
    </div>
  `,
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements AfterViewInit {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor() {
  }

  private _context;

  get context() {
    return this._context;
  }

  @Input() set context(value) {
    this._context = JSON.parse(value);
  }

  ngAfterViewInit() {
    console.log(this.context);
  }

}
