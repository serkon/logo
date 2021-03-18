# Markdown Module


Dynamic markdown loader from MD/MDX files and parser for Angular.io projects. Markdown module converts md content text to html styled and formatted text.

Click here for [demo](http://design.logo.com.tr/#/docs/components/markdown-module#markdownmodule)

### Installation

All public NPM packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Markdown Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/markdown -s
```

Just import it to your project of `@NgModule` import section.

```typescript
@NgModule({
  imports: [CommonModule, MarkdownModule]
})
export class AppModule {
}
```

### Markdown Component

Markdown based content loader components. It will convert md text to html formatted and styled text.
Add the below code to your code stack and give initializer parameters.

<sub>app.component.html</sub>

```html
<logo-markdown url="'/assets/docs/getstarted.md'"></logo-markdown>
```

For API details, please visit http://design.logo.com.tr/#/docs/components/components-overview
