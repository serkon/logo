# Tree

A tree view represents a hierarchical view of information, where each item can have a number of subitems.
Click on the arrow(s) to open or close the tree branches.

Click here for [demo](http://design.logo.com.tr/#/docs/components/tree-module#treemodule)

### Installation
All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Tree Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/tree -s
```
Then add TreeModule to @NgModule `imports` section
```typescript
@NgModule({
  ...
  imports: [CommonModule, TreeModule],
  ...
})
export class AppModule {
}
```

Almost anything can be represented in a tree structure. Examples include directories, organization hierarchies, biological classifications, countries, etc. The Tree component is a way of representing the hierarchical relationship between these things. You can also expand, collapse, and select a treeNode within a Tree.

__Usage Example__

<sub>**app.component.html**</sub>
```html
<logo-tree [items]="items" [start]="0" [iconClasses]=""></logo-tree>
```