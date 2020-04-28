import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowcaseComponent } from './table-showcase.component';

describe('TableShowcaseComponent', () => {
  let component: TableShowcaseComponent;
  let fixture: ComponentFixture<TableShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableShowcaseComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
