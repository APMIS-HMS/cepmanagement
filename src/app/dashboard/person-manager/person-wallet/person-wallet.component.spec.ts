import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonWalletComponent } from './person-wallet.component';

describe('PersonWalletComponent', () => {
  let component: PersonWalletComponent;
  let fixture: ComponentFixture<PersonWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
