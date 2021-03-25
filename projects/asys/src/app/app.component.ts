import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Anket Sınav Yönetim Sistemi';

  public sampleClickAct() {
    console.log('### Item Clicked');
  }

  public sampleTabChange(e) {
    console.log('### Tab Changed:' + e);
  }

  public sampleTabEvent(e) {
    console.log('### Tab Event:' + e);
  }

  public sampleTabInit(e) {
    console.log('### Tab Init:' + e);
  }

  public sampleTabClick(e) {
    console.log('### Tab Clicked:' + e);
  }

  public sampleOnTimeEnd(e) {
    console.log('### Timer ended. ID of the timer is:' + e);
  }
}
