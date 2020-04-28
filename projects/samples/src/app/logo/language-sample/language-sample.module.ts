import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { LanguageInitSetting, LanguageModule } from '@logo-software/language';
import { CoreModule } from '@logo-software/core';
import { LanguageSampleRoutingModule } from './language-sample-routing.module';
import { LanguageShowcaseComponent } from './language-showcase/language-showcase.component';

const languageConf: LanguageInitSetting = {
  abbr: 'ro', readFromFile: false, extension: 'json', path: 'languages',
};

@NgModule({
  declarations: [LanguageShowcaseComponent],
  imports: [
    CommonModule,
    LanguageSampleRoutingModule,
    NbButtonModule,
    NbCardModule,
    LanguageModule.forRoot(languageConf),
    CoreModule.forRoot(),
  ],
})
export class LanguageSampleModule {
}
