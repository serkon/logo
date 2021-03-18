# Theme

Theme module customize UI of the elements with Logo Element Design standard. It also support bootstrap, .Net, Angular
and ReactNative based projects.

@stacked-example(Theme Showcase, logo/theme-sample/theme-showcase/theme-showcase.component)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Theme Module:

 ```bash
 $ npm set registry https://registry.npmjs.org/
 $ npm install @logo-software/theme -s
 ```

__Usage Example__

1. Create `_config.scss` file, if you change some settings then just import `scss` to your project __main__ `style.scss`

<sub>_config.scss</sub>

 ```scss
 $config: (
  grid:(status: true),
  bootstrap:(status: false),
  extend-colors: true,
  customize: (status: true),
  debug: true
);
 ```

2. Add `_config.scss` to your main `style.scss`

<sub>style.scss</style>

 ```scss
@import "/src/config";
@import "~@logo-software/theme/style";
 ```

3. And additionally if you use theme in a any component just add base `scss` file. It contains basic property not all
things (all things before already added to style.scss).

<sub>any.component.scss</sub>

 ```scss
 // if you customize the config add first `config.scss` file
@import "/src/config";
@import "~@logo-software/theme/base";

:host {
  // component custom css goes here
}
 ```

4. And use in component's html

<sub>app.component.html</sub>

 ```html
<div>
  Three type form size exist `large | medium | small`:<br/>
  <input class="large"/> <input class="medium"/> <input class="small"/>
</div>
<div>
  Three type form display exist `fill | outline | ghost`:<br/>
  <input class="fill"/> <input class="outline"/> <input class="ghost"/>
</div>
 ```
