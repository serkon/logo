import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@logo-software/core';
import { TagsModule } from '@logo-software/tags';

import { AutocompleteComponent } from './autocomplete.component';
import { MultiplePipe } from './pipe/multiple.pipe';

@NgModule({
  declarations: [AutocompleteComponent, MultiplePipe],
  imports: [FormsModule, CommonModule, CoreModule, TagsModule, TagsModule],
  exports: [AutocompleteComponent],
})
export class AutocompleteModule {
}
