import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityPayoutComponent } from './facility-payout.component';

describe('FacilityPayoutComponent', () => {
  let component: FacilityPayoutComponent;
  let fixture: ComponentFixture<FacilityPayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityPayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
