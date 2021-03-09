import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface TagItem {
  id: string;
  name: string;
}

@Component({
  selector: 'logo-tags',
  templateUrl: 'tags.component.html',
  styleUrls: ['tags.component.scss'],
})
export class TagsComponent implements OnInit {
  @Input() item: TagItem;
  @Input() cssClass?: string;
  @Input() size?: 'small' | 'medium' | 'large';
  @Output() onRemoveClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public removeEmitter(id: string) {
    this.onRemoveClicked.emit(id);
  }
}
