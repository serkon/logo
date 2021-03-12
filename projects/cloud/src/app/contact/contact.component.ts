import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { HeaderService } from '@logo-software/header';

import { ContactData, FAQ, HttpResponse } from '@cloud/models/interfaces';
import { FaqService } from '@cloud/app/services/faq/faq.service';

@Component({
  selector: 'logo-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contactData: HttpResponse<ContactData[]>;
  public contactPage: ContactData;
  public Faqs: FAQ;
  private FaqData: HttpResponse<FAQ>;

  constructor(
    private headerService: HeaderService,
    private http: HttpClient,
    private domSanitizer: DomSanitizer,
    private faqService: FaqService,
  ) {
  }

  ngOnInit(): void {
    this.headerService.isScrollSpy = true;
    this.getPageData();
    this.loadFaqs();
  }

  public sanitizer(image: string) {
    return this.domSanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  private async getPageData() {
    this.contactData = await this.getContactData();
    this.contactPage = this.contactData.data[0];
  }

  private getContactData() {
    return this.http.get<HttpResponse<ContactData[]>>(`/assets/data/json/contact.json`).toPromise().then(response => {
      return response;
    });
  }

  private async loadFaqs() {
    this.FaqData = await this.faqService.getFaqs();
    this.Faqs = this.FaqData.data;
  }
}
