/**
 * @license
 * Copyright LOGO YAZILIM SANAYİ VE TİCARET A.Ş. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of LOGO YAZILIM SANAYİ VE TİCARET A.Ş. Limited.
 * Any reproduction of this material must contain this notice.
 */

import { TestBed } from '@angular/core/testing';

import { DynamicService } from './dynamic.service';

describe('DynamicService', () => {
  let service: DynamicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
