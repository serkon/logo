import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkShowcaseComponent } from './link-showcase.component';

describe('LinkShowcaseComponent', () => {
  let component: LinkShowcaseComponent;
  let fixture: ComponentFixture<LinkShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinkShowcaseComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
