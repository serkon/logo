# Drawer Module

The drawer creates the main layout of the application. There are 3 parts of the layout which include left, top, right
sides.

Click here for [demo](http://design.logo.com.tr/#/docs/components/drawer-module#drawermodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Drawer Module:

 ```bash
 $ npm set registry https://registry.npmjs.org/
 $ npm install @logo-software/drawer -s
 ```

Just import it to your project of `@NgModule` import section.

 ```typescript
 @NgModule({
  imports: [CommonModule, DrawerModule],
})
export class AppModule {
}
 ```

### Drawer Component

The drawer component is designed to add side content to a small section of your app. Left side menu can be opened or closed using the open(), close() and toggle() methods. Add the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```angular2html
<logo-drawer height="65px" width="200px" [menu]="false">
  <ng-container drawer-left>
    <div class="logo">LOGO<span>ELEMENTS</span></div>
  </ng-container>
  <ng-container drawer-top>
    <h1>Title</h1>
  </ng-container>
  <ng-container drawer-right>
    content goes here. <button (click)="close()">menu</button>
  </ng-container>
</logo-drawer>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
