import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGenInfoComponent } from './page-gen-info.component';

describe('PageGenInfoComponent', () => {
  let component: PageGenInfoComponent;
  let fixture: ComponentFixture<PageGenInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGenInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
