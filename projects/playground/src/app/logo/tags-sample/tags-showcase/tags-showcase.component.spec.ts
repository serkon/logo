import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsShowcaseComponent } from './tags-showcase.component';

describe('TagsShowcaseComponent', () => {
  let component: TagsShowcaseComponent;
  let fixture: ComponentFixture<TagsShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagsShowcaseComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
