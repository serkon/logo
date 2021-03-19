# Tags Module

Use tags to label, categorize, or organize items using keywords that describe them. Tags can be used as filter chips
with remove buttons.

Click here for [demo](http://design.logo.com.tr/#/docs/components/tags-module#tagsmodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Tags Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/tags -s
```

Just import it to your project of `@NgModule` import section.

```typescript
import {TagsModule} from '@logo-software/tags';

@NgModule({
  imports: [CommonModule, TagsModule],
})
export class AppModule {
}
```

### Tags Component

Tags library can be used as chips to show the filters and also tags of the related content. Add the below code to your
code stack and give initializer parameters.

<sub>app.component.html</sub>

```html

<logo-tags
  (onRemoveClicked)="sampleRemoveClicked($event)"
  [cssClass]="'my-tag'"
  [item]="{id:'12345', name: 'My Tag'}"
>
</logo-tags>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
