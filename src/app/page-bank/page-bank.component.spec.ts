import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBankComponent } from './page-bank.component';

describe('PageBankComponent', () => {
  let component: PageBankComponent;
  let fixture: ComponentFixture<PageBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
