/**
 * @license
 * Copyright Logo Yazılım. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Logo Yazılım.
 * Any reproduction of this material must contain this notice.
 */

import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ToastService } from './toast.service';
import { Toast, ToastAction } from './toast';

/**
 * The Toast Component is run through the Toast Service. However, the Toast Component must be added to
 * the main module of the application first. Then it is enough to add `<logo-toast> </logo-toast>` to html.
 *
 * __Usage Example__
 *
 * <sub>**app.component.html**</sub>
 * ```html
 * <logo-toast></logo-toast>
 * ```
 *
 * @stacked-example(Table Showcase, logo/toast-sample/toast-showcase/toast-showcase.component)
 */
@Component({
  selector: 'logo-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnDestroy, OnInit, AfterViewInit {
  @ViewChildren('reference') public queryList: QueryList<ElementRef<HTMLDivElement>>;
  public closeButton: ElementRef;
  protected timeout: any = null;

  constructor(public toastService: ToastService) {
  }

  @ViewChild('closeRef', {read: ElementRef, static: true})
  set closeRef(elRef: ElementRef) {
    this.closeButton = elRef;
    if (this.closeButton && this.toastService.closeFocus) {
      this.closeButton.nativeElement.focus();
    }
  }

  ngOnInit() {
    this.toastService.watch.subscribe((toast: Toast) => {
      this.timeout = null;
      this.opened(toast);
    });
  }

  ngAfterViewInit() {
    this.queryList.changes.subscribe((queryList: QueryList<ElementRef>) => {
      if (this.toastService.toasts.length > 0) {
        // this.size(queryList.first);
      }
    });
  }

  ngOnDestroy(): void {
    this.toastService.watch.unsubscribe();
  }

  public opened(toast: Toast): void {
    if (this.toastService.soundEnable) {
      toast.audio = new Audio(`assets/sounds/${toast.soundType}.mp3`);
      const promise = new Promise(resolve => {
        toast.audio.play();
        toast.audio.addEventListener('ended', () => {
          toast.audio.pause();
          toast.audio.currentTime = 0;
          resolve(toast.audio);
        });
        return toast.audio;
      });
      promise.then((htmlAudioElement: HTMLAudioElement) => this.pause(toast, htmlAudioElement));
    } else {
      this.pause(toast);
    }
  }

  public pause(toast: Toast, htmlAudioElement?: HTMLAudioElement) {
    this.toastService.soundCompleteWatch.next(true);
    if (toast.autoClose) {
      this.timeout = setTimeout(() => {
        this.close(toast);
      }, this.toastService.autoCloseTimeout);
    }
  }

  public async eventHandler(toast: Toast, index: number, action: ToastAction) {
    const value = await action.event(toast);
    this.close(toast);
  }

  public close(toast: Toast): void {
    this.timeout = null;
    if (this.toastService.closeAction) {
      this.toastService.closeAction();
    }
    if (this.toastService.soundEnable && toast.audio) {
      toast.audio.currentTime = 0;
    }
    this.removeElement(toast);
  }

  private removeElement(toast: Toast) {
    const index = this.toastService.toasts.indexOf(toast);
    const elementRef: ElementRef<HTMLDivElement> = this.queryList.toArray()[index];
    const divElement: HTMLDivElement = ((elementRef.nativeElement) as HTMLDivElement);
    divElement.classList.remove('flip-in-x');
    divElement.classList.add('flip-out-x');
    window.setTimeout(() => {
      this.moveTop(divElement);
    }, 1000);
    window.setTimeout(() => this.toastService.remove(toast), 1350);
  }

  private moveTop(element) {
    element.style.marginTop = parseInt(getComputedStyle(element)['height'], 10) * -1 + 'px';
  }
}
