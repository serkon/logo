import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsShowcaseComponent } from './icons-showcase.component';

describe('IconsSampleComponent', () => {
  let component: IconsShowcaseComponent;
  let fixture: ComponentFixture<IconsShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconsShowcaseComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
