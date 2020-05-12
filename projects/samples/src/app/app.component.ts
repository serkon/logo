import { Component } from '@angular/core';

@Component({
  selector: 'logo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'samples';
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
    {name: 'language'},
    {name: 'paging'},
    {name: 'table'},
    {name: 'toast'},
    {name: 'icons'},
  ];

  toUpperCase(value) {
    return `${value[0].toUpperCase()}${value.slice(1)}`;
  }
}
