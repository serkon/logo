# Application Tree Module

Application tree module represents a hierarchical view of applications, where each item can have a number of subitems.
Click on the arrow(s) to open or close the tree branches.

Click here for [demo](http://design.logo.com.tr/#/docs/components/leftbar-module#leftbarmodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Application Tree Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/application-tree -s
```

Then add ApplicationTreeModule to @NgModule `imports` section

<sub>app.module.ts</sub>

```typescript
@NgModule({
  imports: [CommonModule, ApplicationTreeModule],
})
export class AppModule {
}
```

### Application Tree Component

Almost anything can be represented in a tree structure. On this scope Application Tree View shows application lists in
tree structure. The Application Tree component is a way of representing the hierarchical relationship between
applications. You can also expand, collapse, and select a treeNode within a Tree.

Add the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html
<logo-application-tree [items]="items" [start]="0" [iconClasses]=""></logo-application-tree>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
