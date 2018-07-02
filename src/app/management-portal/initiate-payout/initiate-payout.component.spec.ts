import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiatePayoutComponent } from './initiate-payout.component';

describe('InitiatePayoutComponent', () => {
  let component: InitiatePayoutComponent;
  let fixture: ComponentFixture<InitiatePayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiatePayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiatePayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
