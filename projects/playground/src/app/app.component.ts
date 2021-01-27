import { Component } from '@angular/core';
import { MenuItem } from '@logo-software/accordion';
import { DrawerService } from '@logo-software/drawer';

@Component({
  selector: 'logo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground';
  hidden = false;
  components: MenuItem[] = [
    {
      name: 'basic',
      children: [
        {
          name: 'test',
          children: [
            {name: 'combobox', params:{patates: 3}},
            {name: 'link'},
            {name: 'carousel'},
            {name: 'accordion'},
            {name: 'tree'},
            {name: 'drawer'},
          ],
        },
      ],
    },
    {
      name: 'custom',
      children: [
        {name: 'perspective'},
        {name: 'cursor'},
      ],
    },
    {
      name: 'top',
      children: [
        {name: 'excel'},
        {name: 'icons'},
        {name: 'language'},
        {name: 'table'},
        {name: 'theme'},
        {name: 'toast'},
      ],
    },
    {
      name: 'other',
      children: [
        {name: 'dynamic'},
        {name: 'markdown'},
        {name: 'paging'},
        {name: 'playground'},
      ],
    },
    {
      name: 'core',
      children: [
        {name: 'mask-directive'},
        {name: 'endpoint-service'},
        {name: 'storage-class'},
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

  htmlMenuClick(item: MenuItem) {
    this.drawerService.setHeaderTitle(item.name);
  }

  htmlCategoryClick(item: MenuItem) {
    console.log(item.name);
  }
}
