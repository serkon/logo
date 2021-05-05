import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VvsComponent } from './vvs.component';

describe('MsComponent', () => {
  let component: VvsComponent;
  let fixture: ComponentFixture<VvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VvsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
