import { Component } from '@angular/core';

import { Tree } from '@logo-software/tree';
import { DrawerService } from '@logo-software/drawer';

@Component({
  selector: 'logo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground';
  hidden = false;
  components: Tree[] = [
    {name: 'accordion'},
    {name: 'breadcrumb'},
    {name: 'card'},
    {name: 'carousel'},
    {name: 'combobox', params: {patates: 3}},
    {name: 'core'},
    {name: 'cursor'},
    {name: 'datepicker'},
    {name: 'drawer'},
    {name: 'dynamic'},
    {name: 'excel'},
    {name: 'header'},
    {name: 'hero'},
    {name: 'icons'},
    {name: 'idm'},
    {name: 'image-slider'},
    {name: 'language'},
    {name: 'leftbar'},
    {name: 'links'},
    {name: 'markdown'},
    {name: 'modal'},
    {name: 'paging'},
    {name: 'perspective'},
    {name: 'playground'},
    {name: 'progress'},
    {name: 'select'},
    {name: 'storage'},
    {name: 'switch'},
    {name: 'table'},
    {name: 'tabs'},
    {name: 'tags'},
    {name: 'theme'},
    {name: 'timer'},
    {name: 'toast'},
    {name: 'tree'},
    {
      name: 'directive',
      children: [
        {name: 'endpoint-service'},
        {name: 'mask-directive'},
      ],
    },
  ];

  constructor(private drawerService: DrawerService) {
    this.refactor(this.components);
  }

  toUpperCase(value) {
    return `${value[0].toUpperCase()}${value.slice(1)}`;
  }

  setLink(name) {
    return '/logo/' + name + '-sample/' + name + '-showcase/' + name + '-showcase.component';
  }

  refactor(items) {
    items.forEach((item) => {
      item['link'] = this.setLink(item.name);
      item['name'] = this.toUpperCase(item.name + ' Module');
      if (item.children) {
        this.refactor(item.children);
      }
    });
  }

  htmlMenuClick(item: Tree) {
    this.drawerService.setHeaderTitle(item.name);
  }

  htmlCategoryClick(item: Tree) {
    console.log(item.name);
  }
}
