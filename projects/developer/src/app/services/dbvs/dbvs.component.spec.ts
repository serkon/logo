import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbvsComponent } from './vvs.component';

describe('MsComponent', () => {
  let component: DbvsComponent;
  let fixture: ComponentFixture<DbvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DbvsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
