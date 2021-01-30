/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedFooterComponent } from './led-footer.component';

describe('LedFooterComponent', () => {
  let component: LedFooterComponent;
  let fixture: ComponentFixture<LedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LedFooterComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
