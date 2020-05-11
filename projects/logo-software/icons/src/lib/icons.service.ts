import { Injectable } from '@angular/core';
import { LOGO_ICONS } from './logo-icons';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  icons = LOGO_ICONS;

  constructor() {
    console.log('icons is : ', this.icons);
  }
}
