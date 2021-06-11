import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from '@logo-software/header';
import { ComboboxModule } from '@logo-software/combobox';
import { HeroModule } from '@logo-software/hero';
import { BadgeModule } from '@logo-software/badge';
import { BreadcrumbModule } from '@logo-software/breadcrumb';
import { TreeModule } from '@logo-software/tree';
import { PagingModule } from '@logo-software/paging';
import { TagsModule } from '@logo-software/tags';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './search/result/result.component';
import { DetailComponent } from './document/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    ComboboxModule,
    HeroModule,
    BadgeModule,
    TreeModule,
    BreadcrumbModule,
    PagingModule,
    TagsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ResultComponent,
    DetailComponent,
  ],
})
export class AppModule {
}
