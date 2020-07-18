import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWaterConvComponent } from './page-water-conv.component';

describe('PageWaterConvComponent', () => {
  let component: PageWaterConvComponent;
  let fixture: ComponentFixture<PageWaterConvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWaterConvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWaterConvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
