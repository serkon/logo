/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { ToastService } from '@logo-software/toast';

export interface Subscriber {
  $key: string;
  email: string;
  registration: Date;
}

@Component({
  selector: 'logo-led-footer',
  templateUrl: './led-footer.component.html',
  styleUrls: ['./led-footer.component.scss'],
})
export class LedFooterComponent implements OnInit {
  public subscribeForm: FormGroup;
  public subscriber: Subscriber;
  private subscriberRef: AngularFireList<any>;

  constructor(public fb: FormBuilder, private db: AngularFireDatabase, public toast: ToastService) {
  }

  ngOnInit(): void {
    this.subscribeForm = new FormGroup(
      {
        'email': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      },
    );
  }

  submitSubscriber() {
    this.subscriber = this.subscribeForm.value;
    this.subscriberRef = this.db.list('subscribers');
    this.subscriberRef.push({
      email: this.subscriber.email,
      registration: new Date().toISOString(),
    }).catch(e => {
      this.showToast('error');
    }).then(r => {
      this.showToast('success');
    });
  }

  showToast(type: string) {
    if (type === 'success') {
      this.toast.success('Thank you. We have got your email and we will be in-touch with you for further updates.', {autoClose: true});
    } else if (type === 'error') {
      this.toast.error('Uppsss! We have got an error at system. Please try again a little bit later', {autoClose: false});
    }
  }
}
