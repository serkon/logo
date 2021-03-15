import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DafsComponent } from './ms.component';

describe('MsComponent', () => {
  let component: DafsComponent;
  let fixture: ComponentFixture<DafsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DafsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DafsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
