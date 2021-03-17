## Language Module

With this module you can easily translate any text to specified language on the fly.
Set configuration properties, if default language is different from English.
For example, import section on you NgModule and set configuration

Click here for [demo](http://design.logo.com.tr/#/docs/components/language-module#languagemodule)

### Installation

All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe). To
install Language Module:

```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/language -s
```

Just import it to your project of `@NgModule` import section.

```typescript
@NgModule({
 imports: [
   CommonModule,
   LanguageModule.forRoot({ abbr: 'en', readFromFile: false, extension: 'json', path: 'languages' }),
 ],
})
export class AppModule {
}
```

There are three steps:

- Install package using `npm install @logo-software/language`
- add it to your AppModule imports code block using `LanguageModule.forRoot(languageConf)`
- Put your language files to your `src/assets/languages` folder (`src/assets/language/en-En.json` etc.).

### Configuration

Before AppModule bootstrap, configuration constants must be set. The configuration file type is a [LanguageInitSetting](docs/logo-business-solutions/language-module#languageinitsetting) object type. There are several parameters for configuration:

- **abbr**: Codes for the Representation of Names of Languages are described at [ISO 639-1](http://www.loc.gov/standards/iso639-2/php/code_list.php) Code.
- **path**: HTTP request path that contains language files. **Note:** When **readFromFile** is **true**, you must put your language files under your `src/assets/languages` folder. And this property will not effect the project. If **readFromFile** is **false**, You can set your language files path anywhere you request with path option.
- **readFromFile**: If set readFromFile to true data will be load from file system and HTTP request will not call. Otherwise data will be requested over HTTP protocol. Default value is false.
- **extension**: The file extension will be download. Default is **json**. If change to another it will add to end of line this extension. With Following code, HTTP request will be send to the `http(s)://.../path/of/lang/en-GB.xyz` address.

```typescript
// path will look to 'src/assets/`languages`' with this option
const lang = {abbr: 'ro', readFromFile: false, extension: 'json', path: 'languages',}
```
  
####Usage Example

Just as below you can easily translate language.

<sub>some.component.html</sub>

```html
<span>{{"some_text_from_lang_json" | translate}}</span>
```

**Change Language**

If you decide to use multiple language and change it using button to another one, just paste below sample to your code base.

```typescript
import {Component} from '@angular/core';
import {LanguageService} from '@logo-software/language';

@Component({
  selector: 'lbs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'logo-ng-library';

  constructor(private languageService: LanguageService) {
    this.addLanguage();
  }
  
  // change application language to tr
  setLanguage(lang: string = 'tr') {
    this.languageService.setLanguage(lang);
  }
  
  // adds new language to app
  addLanguage() {
    this.languageService.addLanguage({abbr: 'ro', code: 'ro-RO', display: 'Romain'});
  }
}


```

**Add Language**

If you desire, There are not enough language exist for me then you can add more languages to your scope. First add your language file to **assetsPath** (For example: `/src/assets/languages`). After that call newly created language definition from  code. Example usage:

```typescript
this.languageService.addLanguage({abbr: 'ro', code: 'ro-RO', display: 'Romain'});
```
