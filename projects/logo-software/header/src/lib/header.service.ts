import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public mobileMenu: boolean = false;
  public startTheme: string = 'default';
  public scrollTheme: string = 'scrolled';
  public catchPoint: number = 100;
  public isScrollSpy: boolean = true;

  constructor() {
  }
}
