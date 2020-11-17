import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdmComponent } from './idm.component';

describe('IdmComponent', () => {
  let component: IdmComponent;
  let fixture: ComponentFixture<IdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdmComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
