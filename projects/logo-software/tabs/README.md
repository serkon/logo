#Tabs

Tabs organize content into separate views where only one view can be visible at a time. Tabs are used to quickly navigate between views within the same context.
Each tabs has own router.

Click here for [demo](http://design.logo.com.tr/#/docs/components/tabs-module#tabsmodule)

### Installation
All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Tabs Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/tabs -s
```
Then add TabsModule to @NgModule `imports` section

<sub>app.module.ts</sub>
```typescript
@NgModule({
  ...
  imports: [TabsModule],
  ...
})
export class AppModule {
}
```
###Tab(s)Component
 `TabsComponent` contains the `TabComponent` list in its content. Just add `<logo-tab>` into your `<logo-tabs>`. Below code is the full sample usage of the `tabs component`.

 __Usage Example__

 <sub>app.component.ts</sub>
 ```html
 <logo-tabs activeTab=0 class="tab-class-names-goes-here" routing="true" (change)="yourChangeTrigger($event)" (tabEvent)="yourTabEvent($event)">
  <logo-tab
    (init)="tabInit($event)"
    [params]="{id: '44-133'}"
    [route]="'route/to/some/ref'"
    [title]="'Free'"
  >
    <h1>Content goes here</h1>
    <p>Tab one content detail's goes here</p>
  </logo-tab>
  <logo-tab title="two">tab content two</logo-tab>
 </logo-tabs>
 ```

 #### Alignment
 Add [left] or [right] property to any element to set position's on the navbar.
 For example:

 <sub>app.component.html</sub>
 ```html
 <logo-tabs...>
   <logo-tab title="one">Tab content one</logo-tab>
   <logo-tab title="two">Tab content two</logo-tab>
   <div right>right text or some buttons</div>
   <div left>left text or some buttons</div>
 </logo-tabs>
 ```

###TabComponent
Tab component determines Tabs title and its content. Tab's title attribute will be the display text of the tab. And its child DOM elements will be the content of the tabs.

__Usage Example__
<sub>app.component.ts</sub>
```html
 <logo-tab
  (init)="tabInit($event)"
  [params]="{id: 'user-id-1'}"
  [route]="'logo/table-sample/table-showcase/table-showcase.component'"
  [title]="'Two'"
 >
 <div>contents</div>
 </logo-tab>
```
