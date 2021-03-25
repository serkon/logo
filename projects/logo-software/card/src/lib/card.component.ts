import { Component, Input } from '@angular/core';

/**
 * Cards contain content and actions about a single subject.
 * Add the below code to your code stack and give initializer parameters.
 *
 * <sub>app.component.ts</sub>
 *
 * ```html
 * <logo-card [cardImage]="imagePath" [cssClasses]="css-class-names"></logo-card>
 * ```
 */
@Component({
  selector: 'logo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  /**
   * displayed card image at top. Optional default is `undefined`.
   */
  @Input() cardImage?: string;
  /**
   * the css class names that will add. Add multiple class names separated with space.
   */
  @Input() cssClasses?: string = 'card-base';
  /**
   * Shadow style of the card. It accepts 'large', 'all', 'down', 'up', 'left', 'right' and 'none'.
   */
  @Input() shadowStyle: 'all' | 'down' | 'up' | 'left' | 'right' | 'large' | 'none' = 'large';
}
