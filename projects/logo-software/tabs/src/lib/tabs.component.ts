import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { NavigationEnd, PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { delay } from 'rxjs/operators';

import { TabComponent } from './tab.component';
import { TabsService } from './tabs.service';

/**
 * ### Alignment
 * Add [left] or [right] property to any element to set position's on the navbar.
 * For example:
 *
 * <sub>app.component.html</sub>
 * ```html
 * <logo-tabs...>
 *   <div right>right text</div>
 *   <div left>left text</div>
 * </logo-tabs>
 * ```
 */
@Component({
  selector: 'logo-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit {
  @Input() activeTab: number = 0;
  @Input() class: string;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Input() routing: boolean = false;
  @Output() change: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();
  @Output() tabEvent: EventEmitter<QueryList<TabComponent>> = new EventEmitter<QueryList<TabComponent>>();

  constructor(private router: Router, private tabService: TabsService) {
    this.isRouteMatch();
    tabService.$changeTab.subscribe((index: number) => {
      this.setActiveTab(index);
    });
  };

  isRouteMatch() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const tree: UrlTree = this.router.parseUrl(this.router.url);
        const group: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
        if (group) {
          const segments: UrlSegment[] = group.segments;
          const urlWithoutParams = segments.map(it => it.path).join('/');
          this.tabs.toArray().forEach((tab: TabComponent, tabIndex) => {
            const parts = tab.route.split('/');
            const res = parts.every((part, index) => {
              const isParameter = part.startsWith(':');
              if (!isParameter) {
                return !!segments.find((segment: UrlSegment) => segment.path === part);
              }
              return true;
            });
            if (res) {
              this.activeTab = tabIndex;
            }
          });
        }
        if (this.activeTab !== this.tabService.active) {
          this.setActiveTab(this.activeTab);
        }
      }
    });
  }

  ngAfterContentInit() {
    this.tabService.tabs = this.tabs.toArray();
    this.tabs.changes.pipe(delay(0)).subscribe((changes: QueryList<TabComponent>) => {
      setTimeout(() => {
        this.tabEvent.emit(changes);
      }, 0);
    });
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach((item: TabComponent) => {
      item.isActive = false;
    });
    // activate the tab the user has clicked on.
    tab.isActive = true;
    // switch trigger
    this.change.emit(tab);
    if (this.routing && !!tab.route) {
      setTimeout(() => {
        // this.router.navigate([tab.route], {fragment: tab.fragment, queryParams: tab.params});
      }, 0);
    }
  }

  setActiveTab(index: number) {
    this.selectTab(this.tabs.toArray()[index]);
    this.tabService.active = index;
  }
}
