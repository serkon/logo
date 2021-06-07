import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LanguageModule } from '@logo-software/language';
import { LanguageSampleRoutingModule } from './language-sample-routing.module';
import { LanguageShowcaseComponent } from './language-showcase/language-showcase.component';
import { SharedPipeModule } from '@logo-software/core';

@NgModule({
  declarations: [LanguageShowcaseComponent],
  imports: [
    CommonModule,
    LanguageSampleRoutingModule,
    SharedPipeModule,
    LanguageModule,
  ],
})
export class LanguageSampleModule {
}
