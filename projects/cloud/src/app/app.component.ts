import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { HeaderService, HeaderTheme } from '@logo-software/header';
import { IdmService } from '@logo-software/idm';

import { UserService } from '@cloud/app/services/auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked, OnInit {
  public headerTheme = HeaderTheme;
  items = [];

  tenants = [
    {a: {b: 'Uzay A.Ş.', c: 2}},
    {a: {b: 'Logo Yazılım A.Ş.', c: 4}},
    {a: {b: 'Yapı-Taş İnşaat Taah. Tic. ve San. Ltd. Şti.', c: 6}},
    {a: {b: 'Ensan Proje İnşaat Mühendislik Ltd. Şti.', c: 8}},
    {a: {b: 'Başkentsan Endüstriyel Gıda Maddeleri San.Tic.Ltd.Şti.', c: 10}},
    {a: {b: 'Ege Hazır Yiyecek A.Ş.', c: 12}},
  ];
  displayedTenants = [];

  selectedTanent = this.tenants[3];

  constructor(
    private cdr: ChangeDetectorRef,
    public idmService: IdmService,
    public userService: UserService,
    private router: Router,
    private headerService: HeaderService,
  ) {
    this.userService.subscribeUserInfo();
    this.displayedTenants = this.generateTanentItems(this.tenants);
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  login() {
    this.idmService.toLogin();
  }

  logout() {
    this.idmService.logout();
  }

  generateTanentItems(items) {
    return items.map(item => Array.isArray(item) ? this.generateTanentItems(item) : item);
  };

  onTenantsFiltered($event) {
    this.displayedTenants = this.tenants.filter(item => {
      return item.a.b.includes($event);
    });
  }

  onTenantSelected($event) {
    console.log('Selected Tenant: ', $event);
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
      if (this.headerService.mobileMenu) {
        this.headerService.mobileMenu = !this.headerService.mobileMenu;
      }
    });
  }
}
