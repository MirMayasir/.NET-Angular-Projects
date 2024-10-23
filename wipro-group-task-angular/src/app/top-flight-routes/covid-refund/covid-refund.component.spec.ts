import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidRefundComponent } from './covid-refund.component';

describe('CovidRefundComponent', () => {
  let component: CovidRefundComponent;
  let fixture: ComponentFixture<CovidRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidRefundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
