import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFescalViewComponent } from './page-fescal-view.component';

describe('PageFescalViewComponent', () => {
  let component: PageFescalViewComponent;
  let fixture: ComponentFixture<PageFescalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFescalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFescalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
