import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YsComponent } from './ys.component';

describe('MsComponent', () => {
  let component: YsComponent;
  let fixture: ComponentFixture<YsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
