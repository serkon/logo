import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeShowcaseComponent } from './badge-showcase.component';

describe('BadgeShowcaseComponent', () => {
  let component: BadgeShowcaseComponent;
  let fixture: ComponentFixture<BadgeShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeShowcaseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
