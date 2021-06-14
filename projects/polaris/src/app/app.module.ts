import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

import { HeaderModule } from '@logo-software/header';
import { ComboboxModule } from '@logo-software/combobox';
import { HeroModule } from '@logo-software/hero';
import { BadgeModule } from '@logo-software/badge';
import { BreadcrumbModule } from '@logo-software/breadcrumb';
import { TreeModule } from '@logo-software/tree';
import { PagingModule } from '@logo-software/paging';
import { TagsModule } from '@logo-software/tags';
import { CardModule } from '@logo-software/card';
import { IdmModule } from '@logo-software/idm';
import { PopoverModule } from '@logo-software/popover';

import { environment } from '@polaris/environments/environment';
import { FooterComponent } from '@polaris/app/components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './search/result/result.component';
import { DetailComponent } from './document/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    DetailComponent,
    FooterComponent,
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
    PdfJsViewerModule,
    CardModule,
    BadgeModule,
    IdmModule.forRoot(environment.IDM.CLIENT_ID, {RETURN_URI: environment.IDM.CONFIG.RETURN_URI}),
    PopoverModule,
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
