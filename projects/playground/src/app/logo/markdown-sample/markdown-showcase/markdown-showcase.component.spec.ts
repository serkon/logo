import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownShowcaseComponent } from './markdown-showcase.component';

describe('MarkdownShowcaseComponent', () => {
  let component: MarkdownShowcaseComponent;
  let fixture: ComponentFixture<MarkdownShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownShowcaseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
