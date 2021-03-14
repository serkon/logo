import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksShowcaseComponent } from './links-showcase.component';

describe('LinkShowcaseComponent', () => {
  let component: LinksShowcaseComponent;
  let fixture: ComponentFixture<LinksShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinksShowcaseComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
