import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdfComponent } from './ms.component';

describe('MsComponent', () => {
  let component: RdfComponent;
  let fixture: ComponentFixture<RdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RdfComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
