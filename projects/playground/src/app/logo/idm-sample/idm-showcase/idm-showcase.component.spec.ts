import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdmShowcaseComponent } from './idm-showcase.component';

describe('IdmShowcaseComponent', () => {
  let component: IdmShowcaseComponent;
  let fixture: ComponentFixture<IdmShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdmShowcaseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdmShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
