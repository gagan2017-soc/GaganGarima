import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNearSocComponent } from './page-near-soc.component';

describe('PageNearSocComponent', () => {
  let component: PageNearSocComponent;
  let fixture: ComponentFixture<PageNearSocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNearSocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNearSocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
