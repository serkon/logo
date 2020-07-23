import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  quotes = [
    {story: 'Logo güvencesiyle uygulama geliştirmeye siz de başlayın!', author: 'Get Ready?'},
    // {story: 'Good designs come from the heart, not from the brain', author: 'DANNY SENGERS'},
  ];

  corporate = [
    {url: '#', display: 'Corporate'},
    {url: '#', display: 'Contact'},
    {url: '#', display: 'Blog'},
    {url: '#', display: 'Carier'},
  ];

  legal = [
    {url: '#', display: 'Copyright'},
    {url: '#', display: 'Terms of Use'},
    {url: '#', display: 'Privacy'},
    {url: '#', display: 'Personal Data'},
    {url: '#', display: 'Cookie Policy'},
  ];

  socials = [{url: '#', display: 'twitter'}, {url: '#', display: 'facebook'}, {url: '#', display: 'youtube'}];

  constructor(public router: Router) {
  }
}
