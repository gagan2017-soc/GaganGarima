import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFescalEntryComponent } from './page-fescal-entry.component';

describe('PageFescalEntryComponent', () => {
  let component: PageFescalEntryComponent;
  let fixture: ComponentFixture<PageFescalEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFescalEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFescalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
