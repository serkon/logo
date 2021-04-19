import { Component } from '@angular/core';

import { Tree } from '@logo-software/tree';
import { DrawerService } from '@logo-software/drawer';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'logo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hidden = false;
  components: Tree[] = [
    {
      name: 'Components',
      children: [
        {name: 'accordion'},
        {name: 'autocomplete'},
        {name: 'breadcrumb'},
        {name: 'badge'},
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
        {name: 'popover'},
        {name: 'progress'},
        {name: 'select'},
        {name: 'storage'},
        {name: 'switch'},
        {name: 'table'},
        {name: 'tabs'},
        {name: 'tags'},
        {name: 'theme'},
        {name: 'timepicker'},
        {name: 'timer'},
        {name: 'toast'},
        {name: 'tree'},
        {name: 'wizard'},
      ],
    },
    {
      name: 'Directives',
      children: [
        {name: 'endpoint-service'},
        {name: 'mask-directive'},
      ],
    },
  ];

  constructor(private title: Title, private drawerService: DrawerService) {
    this.refactor(this.components);
    this.drawerService.changeTitle$.subscribe((item: Tree) => {
      this.title.setTitle(item.name);
    });
  }

  private _selected = {name: 'Welcome'};

  get selected() {
    return this._selected;
  }

  set selected(item: Tree) {
    this._selected = item;
    this.drawerService.setHeaderTitle(item.name);
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
    this.selected = item;
  }

  htmlCategoryClick(item: Tree) {
    console.log(item.name);
  }

  htmlActivatedItem(item: Tree) {
    console.log(item);
    this.selected = item;
  }
}
