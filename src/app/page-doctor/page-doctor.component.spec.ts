import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDoctorComponent } from './page-doctor.component';

describe('PageDoctorComponent', () => {
  let component: PageDoctorComponent;
  let fixture: ComponentFixture<PageDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
