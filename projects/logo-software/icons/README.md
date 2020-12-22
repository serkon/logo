Icon module uses for add icons to project.
Just download and import `scss` to your project main `style.scss`

__Usage Example__

<sub>style.scss</style>
```scss
@import "~@logo-software/icons/style";
```

### Installation
There are two way to install Logo Icons to the project.
1. Download Icons's scss from [GitHub](https://github.com/logo-group/logo-elements/blame/master/projects/logo-software/icons/style.scss).
2. Install it to project using through NPM Package Manager
All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Icons Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/icons -s
```

__Usage Example__

<sub>app.component.scss</sub>
```scss
// import icon style here
@import "~@logo-software/icons/style";
:host{
  // component custom css goes here
}
```
<sub>app.component.html</sub>
```html
 // this will add search icon to input to right side of it.
  <button class="le-search icon-right">Right</button>
// This code add search icon to the left side
  <button class="le-search icon-left">Left</button
// This code add search icon to the center (default)
  <button class="le-save">Center</button>
```

For more detail please visit: [Icons Module](http://design.logo.com.tr/#/docs/components/icons-module#iconsmodule)
