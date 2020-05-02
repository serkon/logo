With this module you can easily translate any text to specified language on the fly.
Set configuration properties, if default language is different from English.
For example, import section on you NgModule and set configuration

@stacked-example(LanguageModule, logo/language-sample/language-showcase/language-showcase.component)

<sub>app.module.ts</sub>

__Usage Example__

```typescript
import { LanguageModule } from '@logo-software/language';

@NgModule({
 imports: [
   CommonModule,
   LanguageModule.forRoot({ abbr: 'en', readFromFile: false, extension: 'json', path: 'languages' }),
 ],
})
export class AppModule {
}
```
<hr>

### Installation
All public npm packages of Logo Software is at [https://www.npmjs.com/~logofe](https://www.npmjs.com/~logofe).
To install Excel Module:

  ```bash
$ npm set registry https://registry.npmjs.org/
$ npm install @logo-software/language -s
```

<div class="note note-info">
  <div class="note-title">Custom Language Files</div>
  <div class="note-body">

  * Add it to AppModule `@NgModule`'s imports block with `LanguageModule.forRoot({ abbr: 'en', readFromFile: false, extension: 'json', path: 'languages' })`
  * Put your **language files** to your `src/assets/languages` folder
  put json to /src/assets/language/**en-En.json** etc
  </div>
</div>
<hr>

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
<hr>

### Change Language

If you decide to use multiple language and change it using button to another one, just paste below sample to your code base.

<sub>**app.component.ts**</sub>

```typescript
 import {Component} from '@angular/core';
 import {LanguageService} from '@logo-software/language';

 @Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  })
 export class AppComponent {
    constructor(private language: LanguageService) {
      this.language.onLoadComplete.subscribe(() => {
        console.log(this.language.translate('hello_world'));
      });
      this.addLanguage();
      this.setLanguage('tr');
    }

    /**
    * change application language to tr
    */
    setLanguage(lang: string = 'tr') {
      this.languageService.setLanguage(lang);
    }

    /**
    * adds new language to app
    */
    addLanguage() {
      // Don't forget to add **ro-Ro.json** to `/src/assets/languages` folder
      this.languageService.addLanguage({abbr: 'ro', code: 'ro-RO', display: 'Romain'});
    }
  }
```
<hr>

### Add Language

If you desire add more languages to your scope: first add your language file to **assetsPath** (default path is: `/src/assets/languages`). After that call newly created language definition from  code. Example usage:

Save following JSON code into `ro-Ro.json` and then move this file to the `/src/assets/language` folder.
 
<sub>**ro-Ro.json**</sub>
```json
{
  "app-name": "JOURNEY",
  "login-info": "Romania to<br/>you via e-mail",
  "login-fail-header": "Login failed",
  "login-fail-subheader": "Unable to login, either username or password is incorrect.",
  "username": "username",
  "password": "password",
  "login": "login",
  "remember_me": "Remember Me",
  "manage": "Manage"
}
```

<sub>**sample.component.ts**</sub>
```typescript
this.languageService.addLanguage({abbr: 'ro', code: 'ro-RO', display: 'Romain'});
```
