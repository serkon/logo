import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Pipe for a value that's safe to use as HTML.
 *
 * __Usage Example__
 *
 * ```html
 * <div>{{ 'some html with unsafe content' | safeHTML}}</div>
 * ```
 */
@Pipe({
  name: 'safeHTML',
})
export class SafeHTMLPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {
  }

  transform(value: string): SafeHtml {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
