import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngd-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgdFooterComponent {
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
