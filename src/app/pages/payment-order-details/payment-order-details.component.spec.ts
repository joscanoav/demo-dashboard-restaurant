import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOrderDetailsComponent } from './payment-order-details.component';

describe('PaymentOrderDetailsComponent', () => {
  let component: PaymentOrderDetailsComponent;
  let fixture: ComponentFixture<PaymentOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentOrderDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
