import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEnergyEffComponent } from './page-energy-eff.component';

describe('PageEnergyEffComponent', () => {
  let component: PageEnergyEffComponent;
  let fixture: ComponentFixture<PageEnergyEffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEnergyEffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEnergyEffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
