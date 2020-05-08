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
import { Toast } from './toast';

/**
 * Toast component can be call using ToastService.
 * Add a Class constructor to ToastService then
 * call with one of the below methods.
 *
 * For example:
 * 1. add constructor(private toastService: ToastService)...
 * 2. call this.toastService.success('translate_text');
 *
 * Other option is CloseAction, it must be define before below methods. For example
 * this.toastService.closeAction = () => console.log();
 *
 * @Input (boolean) closeFocus - When modal opened, if you want to set focus to close button use this property.
 */
@Component({
  selector: 'logo-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnDestroy, OnInit, AfterViewInit {
  @ViewChildren('reference') public queryList: QueryList<ToastComponent>;
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

  public close(toast: Toast): void {
    if (this.toastService.closeAction) {
      this.toastService.closeAction();
    }
    if (this.toastService.soundEnable && toast.audio) {
      toast.audio.pause();
      toast.audio.currentTime = 0;
    }
    this.toastService.remove(toast);
    this.timeout = null;
  }
}
