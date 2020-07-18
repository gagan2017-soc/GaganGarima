import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHappyStreetComponent } from './page-happy-street.component';

describe('PageHappyStreetComponent', () => {
  let component: PageHappyStreetComponent;
  let fixture: ComponentFixture<PageHappyStreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHappyStreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHappyStreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
