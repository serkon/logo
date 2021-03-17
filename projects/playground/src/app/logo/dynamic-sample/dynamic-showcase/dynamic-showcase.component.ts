import { Component, NgModule } from '@angular/core';
import { PlaygroundModule } from '@logo-software/playground';
import { BreadcrumbModule } from '@logo-software/breadcrumb';

@Component({
  selector: 'logo-dynamic-showcase',
  templateUrl: './dynamic-showcase.component.html',
  styleUrls: ['./dynamic-showcase.component.scss'],
})
export class DynamicShowcaseComponent {
  imports = [PlaygroundModule, BreadcrumbModule];
  text = `
    <logo-playground path="#/logo/button-sample/button-showcase/button-showcase.component" context='{"title": "Button Demo", "button": true}' ></logo-playground>
    <logo-breadcrumb [breadcrumb]="[{name:'Home', link: '/'}, {name:'Products', link: '/products'}, {name: 'Potato'}]" [isLight]="false" [size]="'medium'"></logo-breadcrumb>
    `;
}
