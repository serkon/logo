import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input, OnInit } from '@angular/core';
import { NB_WINDOW, NbMenuItem, NbSidebarService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { NgdVersionService, Version } from '../../services';

@Component({
  selector: 'ngd-header',
  styleUrls: ['./header.component.scss'],
  template: `
    <div class="section left">
      <button *ngIf="sidebarTag" class="sidebar-toggle" (click)="toggleSidebar()">
        <nb-icon icon="menu-2"></nb-icon>
      </button>
      <div class="logo-container">
        <a class="logo" routerLink="/"><span>Logo</span><span>Elements</span></a>
      </div>
    </div>
    <div class="section middle">
      <nb-menu [items]="mainMenu"></nb-menu>
      <ngd-search *ngIf="showSearch"></ngd-search>
      <nb-select class="version-select"
                 *ngIf="showVersion && (showVersionSelect$ | async)"
                 [selected]="currentVersion$ | async"
                 (selectedChange)="redirectToVersion($event)">
        <nb-option *ngFor="let version of supportedVersions$ | async" [value]="version">
          {{ version.name }}
        </nb-option>
      </nb-select>
    </div>
    <div class="section right">
      <span class="version" *ngIf="currentVersionName$ | async">
        v{{ currentVersionName$ | async }}
      </span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgdHeaderComponent implements OnInit {

  @Input() showSearch = false;
  @HostBinding('class.docs-page') @Input() isDocs = false;
  supportedVersions$: Observable<Version[]>;
  currentVersion$: Observable<Version>;
  currentVersionName$: Observable<string>;
  showVersionSelect$: Observable<boolean>;
  @Input() showVersion = false;
  mainMenu: NbMenuItem[] = [
    {
      title: 'Docs',
      link: '/docs',
    },
    {
      title: 'Components',
      link: '/docs/components/components-overview',
    },
    {
      title: 'Design System',
      url: 'http://wiki.logo.com.tr/display/PAAS/UI+Elements',
    },
    {
      title: 'Blog',
      url: 'https://blog.logo.com.tr/',
    },
  ];
  @Input() sidebarTag: string;
  private window: Window;

  constructor(
    @Inject(NB_WINDOW) window,
    private versionService: NgdVersionService,
    private sidebarService: NbSidebarService,
  ) {
    this.window = window;
  }

  ngOnInit() {
    this.currentVersion$ = this.versionService.getCurrentVersion();
    this.currentVersionName$ = this.currentVersion$.pipe(map((version: Version) => version.name));
    this.supportedVersions$ = this.versionService.getSupportedVersions();

    this.showVersionSelect$ = this.supportedVersions$
      .pipe(
        map((versions: Version[]) => versions.length > 0),
        startWith(false),
      );

    if (!this.isDocs) {
      this.mainMenu.push({
        title: 'Professional Services',
        link: '/docs/getting-started/professional-services',
      });
    }
  }

  toggleSidebar() {
    this.sidebarService.toggle(false, this.sidebarTag);
  }

  redirectToVersion(version: Version): void {
    this.window.location.href = version.path;
  }
}
