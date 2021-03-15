import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfsComponent } from './dfs.component';

describe('MsComponent', () => {
  let component: DfsComponent;
  let fixture: ComponentFixture<DfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DfsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
