import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityWalletComponent } from './facility-wallet.component';

describe('FacilityWalletComponent', () => {
  let component: FacilityWalletComponent;
  let fixture: ComponentFixture<FacilityWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
