import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingShowcaseComponent } from './paging-showcase.component';

describe('PagingShowcaseComponent', () => {
  let component: PagingShowcaseComponent;
  let fixture: ComponentFixture<PagingShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PagingShowcaseComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
