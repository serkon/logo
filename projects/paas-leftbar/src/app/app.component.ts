import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { LeftbarService, PaasUser } from '@logo-software/leftbar';
import { Tree, TreeComponent } from '@logo-software/tree';
import { ModalService } from '@logo-software/modal';
import { ToastService } from '@logo-software/toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public menuItems: Tree[];
  public shortcutItems: Tree[];

  @ViewChild(TreeComponent, {read: TreeComponent}) tree: TreeComponent;

  constructor(public http: HttpClient, public leftbarService: LeftbarService, public modal: ModalService, public toast: ToastService) {
  }

  ngOnInit(): void {
  }

  public sampleUserDataGet() {
    this.http.request('GET', '/assets/data/sample-user.json')
      .pipe(
        retry(2),
        catchError(this.handleError),
      )
      .subscribe(
        (val: PaasUser) => {
          this.leftbarService.userDataLoad.next(val);
          this.sampleMenuDataGet();
        },
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Hata Oluştu:', error.error.message);
    } else {
      console.error(`Backend Hata Kodu: ${error.status}, ` + `Hata Mesajı: ${error.error}`);
    }
    return throwError(
      'Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.');
  }

  public sampleAddShortcut() {
    this.modal.openModal('logo-modal');
  }

  public sampleSaveAction() {
    this.modal.closeModal('logo-modal');
    this.toast.success('Kısayollarınız kayıt edilmiştir.', {autoClose: true});
  }

  public sampleMenuDataGet() {
    this.http.request<Tree[]>('GET', '/assets/data/sample-menu.json')
      .pipe(
        retry(2),
        catchError(this.handleError),
      )
      .subscribe(
        data => {
          this.menuItems = data;
        },
      );
  }

  public sampleShorcutDataGet() {
    this.http.request<Tree[]>('GET', '/assets/data/sample-shortcut-menu.json')
      .pipe(
        retry(2),
        catchError(this.handleError),
      )
      .subscribe(
        data => {
          console.log(data);
          this.shortcutItems = data;
        },
      );
  }

  public sampleDataGet(method: string, url: string) {
    this.http.request(method, url)
      .pipe(
        retry(2),
        catchError(this.handleError),
      )
      .subscribe(
        data => {
          return data;
        },
      );
  }

  public sampleItemDataGet(item: Tree) {
    console.log(item.id);
    this.http.request<Tree[]>('GET', '/assets/data/sample-menu.json')
      .pipe(
        retry(2),
        catchError(this.handleError),
      )
      .subscribe(
        data => {
          item['children'] = data;
          item.isOpen = true;
        },
      );
  }

  public sampleShortcutItemDataGet(item: Tree) {
    this.http.request<Tree[]>('GET', '/assets/data/sample-shortcut-menu.json')
      .pipe(
        retry(2),
        catchError(this.handleError),
      )
      .subscribe(
        data => {
          item['children'] = data;
          item.isOpen = true;
        },
      );
  }

  public sampleHomeAction() {
    console.log('### Home Clicked');
  }

  public sampleTenantAction(id) {
    console.log('### Tanent Action' + id);
  }

  public sampleAppAction(id) {
    console.log('### Application Action' + id);
  }

  public sampleSettingsAction() {
    console.log('### Settings');
  }

  public sampleLangAction(id: string) {
    console.log(id);
  }

  public sampleSearchAction(val) {
    console.log('### Search For:' + val);
  }

  public sampleInfoReqAction(val) {
    console.log('### Get Info For:' + val);
  }
}
