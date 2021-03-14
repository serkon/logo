import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbShowcaseComponent } from './breadcrumb-showcase.component';

describe('BreadcrumbShowcaseComponent', () => {
  let component: BreadcrumbShowcaseComponent;
  let fixture: ComponentFixture<BreadcrumbShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbShowcaseComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
