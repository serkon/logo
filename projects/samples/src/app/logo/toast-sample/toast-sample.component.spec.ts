import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastSampleComponent } from './toast-sample.component';

describe('ToastSampleComponent', () => {
  let component: ToastSampleComponent;
  let fixture: ComponentFixture<ToastSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToastSampleComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
