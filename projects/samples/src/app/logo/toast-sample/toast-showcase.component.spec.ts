import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastShowcaseComponent } from './toast-showcase.component';

describe('ToastSampleComponent', () => {
  let component: ToastShowcaseComponent;
  let fixture: ComponentFixture<ToastShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToastShowcaseComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
