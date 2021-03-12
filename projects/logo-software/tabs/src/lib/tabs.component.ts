import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { NavigationEnd, PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { delay } from 'rxjs/operators';

import { TabComponent } from './tab.component';
import { TabsService } from './tabs.service';

/**
 * Tabs components contains TabComponent list inside. Just add `<logo-tab>` into your `<logo-tabs>`.
 *
 * __Usage Example__
 *
 * <sub>app.component.ts</sub>
 *
 * ```typescript
 * <logo-tabs activeTab=0 class="tab-class-names-goes-here" routing="true" (change)="yourChangeTrigger($event)" (tabEvent)="yourTabEvent($event)">
 *   <logo-tab title="one">content of tab one</logo-tab>
 *   <logo-tab title="two">content of tab two</logo-tab>
 * </logo-tabs>
 * ```
 *
 * ### Alignment
 * Add [left] or [right] property to any element to set position's on the navbar.
 * For example:
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-tabs...>
 *   <logo-tab title="one">content of tab one</logo-tab>
 *   <div right>right text</div>
 *   <div left>left text</div>
 * </logo-tabs>
 * ```
 */
@Component({
  selector: 'logo-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss'],
  providers: [TabsService],
})
export class TabsComponent implements AfterContentInit {
  /**
   * Tab changer subscription
   */
  public $changeTab: EventEmitter<number> = new EventEmitter<number>();
  /**
   * Set active tabs. Default is first one.
   */
  @Input() activeTab: number = 0;
  /**
   * Add classes as a string for styling.
   */
  @Input() class: string;
  /**
   * Full width or not selector of the tabs base.
   */
  @Input() isContainer: boolean;
  /**
   * All tabs was added
   */
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  /**
   * Routing is enabled, default false. Just shows ng-content. If route enabled, tab route will be shown inside the content.
   */
  @Input() routing: boolean = false;
  /**
   * Triggered when clicked another tab
   */
  @Output() change: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();
  /**
   * When added, created or changed TabComponent this event will be triggered
   */
  @Output() tabEvent: EventEmitter<QueryList<TabComponent>> = new EventEmitter<QueryList<TabComponent>>();

  private tree: UrlTree;
  private group: UrlSegmentGroup;

  constructor(private router: Router, private tabService: TabsService) {
    this.isRouteMatch();
    this.$changeTab.subscribe((index: number) => {
      this.setActiveTab(index);
    });
  };

  isRouteMatch() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.tree = this.router.parseUrl(this.router.url);
        this.group = this.tree.root.children[PRIMARY_OUTLET];
      }
    });
  }

  ngAfterContentInit() {
    if (this.group && this.routing) {
      const segments: UrlSegment[] = this.group.segments;
      // const urlWithoutParams = segments.map(it => it.path).join('/');
      this.tabs.toArray().forEach((tab: TabComponent, tabIndex) => {
        if (tab.route) {
          const parts = tab.route.split('/');
          const isMatched = parts.every((part, index) => {
            const isParameter = part.startsWith(':');
            if (!isParameter) {
              return !!segments.find((segment: UrlSegment) => segment.path === part);
            }
            return true;
          });
          if (isMatched) {
            this.activeTab = tabIndex;
          }
        }
      });
    }
    if (this.activeTab !== this.tabService.active) {
      this.setActiveTab(this.activeTab);
    }
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
        this.router.navigate([tab.route], {fragment: tab.fragment, queryParams: tab.params});
      }, 0);
    }
  }

  /**
   * Set selected tab with index number. For example setActiveTab(0);
   * @param index
   */
  setActiveTab(index: number) {
    this.selectTab(this.tabs.toArray()[index]);
    this.tabService.active = index;
  }
}
