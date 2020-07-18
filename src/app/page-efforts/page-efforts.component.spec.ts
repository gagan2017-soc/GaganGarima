import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEffortsComponent } from './page-efforts.component';

describe('PageEffortsComponent', () => {
  let component: PageEffortsComponent;
  let fixture: ComponentFixture<PageEffortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEffortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEffortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
