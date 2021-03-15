import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MssComponent } from './ms.component';

describe('MsComponent', () => {
  let component: MssComponent;
  let fixture: ComponentFixture<MssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MssComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
