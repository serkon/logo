import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TagItem } from './item';

/**
 * Tags library can be used as chips to show the filters and also tags of the related content.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.html</sub>
 *
 * ```html
 * <logo-tags
 *    (onRemoveClicked)="sampleRemoveClicked($event)"
 *    [cssClass]="'my-tag'"
 *    [item]="{id:'12345', name: 'My Tag'}"
 * ></logo-tags>
 * ```
 */
@Component({
  selector: 'logo-tags',
  templateUrl: 'tags.component.html',
  styleUrls: ['tags.component.scss'],
})
export class TagsComponent {
  /**
   * Input that identifies the tag item content. It accepts TagItem data model.
   */
  @Input() item: TagItem;
  /**
   * Custom CSS Class to customize visual design.
   */
  @Input() cssClass?: string;
  /**
   * Size of the tag item.
   */
  @Input() size?: 'small' | 'medium' | 'large';
  /**
   * Output that fired when remove button clicked.
   */
  @Output() onRemoveClicked: EventEmitter<string> = new EventEmitter<string>();

  public removeEmitter(id: string) {
    this.onRemoveClicked.emit(id);
  }
}
