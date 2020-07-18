import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGoGreenComponent } from './page-go-green.component';

describe('PageGoGreenComponent', () => {
  let component: PageGoGreenComponent;
  let fixture: ComponentFixture<PageGoGreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGoGreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGoGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
