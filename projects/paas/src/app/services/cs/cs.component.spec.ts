import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsComponent } from './cs.component';

describe('CsComponent', () => {
  let component: CsComponent;
  let fixture: ComponentFixture<CsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
