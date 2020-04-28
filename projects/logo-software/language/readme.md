## Language Translation

With this module you can easly translate any text to specified language on the fly. Over HTTP or LOCAL file resource can be usable.

### Installation
There are three steps:

 - Install package using `npm install @logo-software/language` 
 - add it to your AppModule imports code block using `LanguageModule.forRoot(languageConf)`
 - Put your language files to your `src/assets/languages` folder (`src/assets/language/en-En.json` etc.). 

### Configuration

Default language is `en`. You can also change language to `tr`. There are some options for customization:

1. **abbr**: is your page language, change it to `tr` if you want to set default language to `tr
2. **readFromFile**: is default **false**,  and if you set true this option import en-En.json file statically from path without http request. Otherwise it will include language file over http protocol. 
 **NOTE** If `readFromFile` is **true**, `assetPath` must be `/assets/languages`
3. **assetPath**: is the path of the language files. Default path is `/assets/languages`. When **readFromFile** is **true**, you must put your language files under your `src/assets/languages` folder. If **readFromFile** is **false**, you can set your language files where you want then set **assetsPath** to these files paths.
4. **extensition**: is the file extension will be download. Default is **json**.
  

####Usage Example

Just as below you can easily set you application's language.
 
<sub>**app.module.ts**</sub>
```typescript
import { LanguageInitSetting, LanguageModule } from '@logo-software/language'; 
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component';

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
