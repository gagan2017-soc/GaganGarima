import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmergNumberComponent } from './page-emerg-number.component';

describe('PageEmergNumberComponent', () => {
  let component: PageEmergNumberComponent;
  let fixture: ComponentFixture<PageEmergNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEmergNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmergNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
