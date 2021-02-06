import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LeftbarService } from './leftbar.service';

@Component({
  selector: 'logo-leftbar',
  styleUrls: ['./leftbar.component.scss'],
  templateUrl: './leftbar.component.html',
})
export class LeftbarComponent implements OnInit {
  @Output() public onInit: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public leftbarApi: LeftbarService) {
  }

  ngOnInit(): void {
    this.onInit.emit(true);
  }

  public showPopover(id: string) {
    console.log(id);
  }

  public homeEmitter() {
    console.log('Home Button');
  }

  public selectTanentEmitter(id: string) {
    console.log(id);
  }

  public selectAppEmitter(id: string) {
    console.log(id);
  }

}
