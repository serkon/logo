import { Component } from '@angular/core';

@Component({
  selector: 'logo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground';
  hidden = false;
  components = [
    {name: 'accordion'},
    {name: 'carousel'},
    {name: 'combobox'},
    {name: 'cursor'},
    {name: 'drawer'},
    {name: 'dynamic'},
    {name: 'excel'},
    {name: 'icons'},
    {name: 'language'},
    {name: 'link'},
    {name: 'markdown'},
    {name: 'paging'},
    {name: 'perspective'},
    {name: 'playground'},
    {name: 'table'},
    {name: 'theme'},
    {name: 'toast'},
    {
      name: 'core',
      hide: true,
      children: [
        {name: 'mask-directive'},
        {name: 'endpoint-service'},
        {name: 'storage-class'},
      ],
    },
  ];

  toUpperCase(value) {
    return `${value[0].toUpperCase()}${value.slice(1)}`;
  }
}
