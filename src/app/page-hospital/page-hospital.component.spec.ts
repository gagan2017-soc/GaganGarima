import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHospitalComponent } from './page-hospital.component';

describe('PageHospitalComponent', () => {
  let component: PageHospitalComponent;
  let fixture: ComponentFixture<PageHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
