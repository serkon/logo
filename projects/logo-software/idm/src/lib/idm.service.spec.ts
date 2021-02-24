import { TestBed } from '@angular/core/testing';

import { IdmService } from './idm.service';

describe('IdmService', () => {
  let service: IdmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
