import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeShowcaseComponent } from './tree-showcase.component';

describe('TreeShowcaseComponent', () => {
  let component: TreeShowcaseComponent;
  let fixture: ComponentFixture<TreeShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeShowcaseComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
