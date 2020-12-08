import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LanguageInitSetting, LanguageModule } from '@logo-software/language';
import { LanguageSampleRoutingModule } from './language-sample-routing.module';
import { LanguageShowcaseComponent } from './language-showcase/language-showcase.component';
import { SharedPipeModule } from '@logo-software/core';

const languageConf: LanguageInitSetting = {
  abbr: 'ro', readFromFile: false, extension: 'json', path: 'languages',
};

@NgModule({
  declarations: [LanguageShowcaseComponent],
  imports: [
    CommonModule,
    LanguageSampleRoutingModule,
    LanguageModule.forRoot(languageConf),
    SharedPipeModule,
  ],
})
export class LanguageSampleModule {
}
