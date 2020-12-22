import { Component } from '@angular/core';

@Component({
  selector: 'logo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground';
  hidden = true;
  components = [
    {
      name: 'core',
      hide: true,
      children: [
        {name: 'mask-directive'},
        {name: 'endpoint-service'},
        {name: 'storage-class'},
      ],
    },
    {name: 'excel'},
    {name: 'icons'},
    {name: 'language'},
    {name: 'paging'},
    {name: 'table'},
    {name: 'theme'},
    {name: 'toast'},
    {name: 'input'},
  ];

  toUpperCase(value) {
    return `${value[0].toUpperCase()}${value.slice(1)}`;
  }
}