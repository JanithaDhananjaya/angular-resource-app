import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerListComponent } from './view-customer-list.component';

describe('ViewCustomerListComponent', () => {
  let component: ViewCustomerListComponent;
  let fixture: ComponentFixture<ViewCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
