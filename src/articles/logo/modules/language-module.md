# Language Module

With this module you can easily translate any text to specified language on the fly. 

### Installation
There are three steps:

 - Install package using `npm install @logo-software/language` 
 - add it to your AppModule imports code block using `LanguageModule.forRoot(languageConf)`
 - Put your language files to your `assets/languages` folder (assets/language/en-En.json etc.). 

### Configuration

Before AppModule bootstrap, configuration constants must be set. The configuration file type is a [LanguageInitSetting](docs/logo-business-solutions/language-module#languageinitsetting) object type. There are several parameters for configuration:

 - **abbr**: Codes for the Representation of Names of Languages are described at [ISO 639-1](http://www.loc.gov/standards/iso639-2/php/code_list.php) Code.
 - **path**: HTTP request path that contains language files. **Note:** When **readFromFile** is **true**, you must put your language files under your `src/assets/languages` folder. And this property will not effect the project. If **readFromFile** is **false**, You can set your language files path anywhere you request with path option.
 - **readFromFile**: If set readFromFile to true data will be load from file system and HTTP request will not call. Otherwise data will be requested over HTTP protocol. Default value is false.
 - **extension**: The file extension will be download. Default is **json**. If change to another it will add to end of line this extension. With Following code, HTTP request will be send to the `http(s)://.../path/of/lang/en-GB.xyz` address.
 
```typescript
 const lang = {code: 'en-GB', extension: 'xyz', abbr: 'en', path:'/path/of/lang'}
```
 
### Usage

Just as below you can easily set you application's language.
 
<sub>**app.module.ts**</sub>
```typescript
import {LanguageInitSetting, LanguageModule} from '@logo-software/language';

const languageConf: LanguageInitSetting = {abbr: 'en', readFromFile: false, extension: 'json'};
const EXTERNAL_MODULES = [LanguageModule.forRoot(languageConf)];

@NgModule({
  declarations: [AppComponent],
  imports: [EXTERNAL_MODULES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

### Change Language

If you decide to use multiple language and change it using button to another one, just paste below sample to your code base.

<sub>**app.component.ts**</sub>
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

```typescript
this.languageService.addLanguage({abbr: 'ro', code: 'ro-RO', display: 'Romain'});
```
