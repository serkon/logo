import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logo-tags-showcase',
  templateUrl: './tags-showcase.component.html',
  styleUrls: ['./tags-showcase.component.scss'],
})
export class TagsShowcaseComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public sampleRemoveClicked($event) {
    console.log($event);
  }

}
